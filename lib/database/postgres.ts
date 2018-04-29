'use strict';
import bcrypt from 'bcryptjs';
import pg from 'pg';

let pool = null;

export default () => {
    if (pool) {
        return pool;
    }

    bcrypt.hash(process.env.DB_PASS, 10, function(err, password_hash) {
        const config = {
            user: process.env.DB_USER,
            database: process.env.DB_NAME,
            password: password_hash,
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            max: process.env.DB_POOL_SIZE,
            idleTimeoutMillis: process.env.DB_CLIENT_TIMEOUT,
        };
    });

    pool = new pg.Pool(config);

    pool.connect(function(err, client, done) {
        if (err) {
            console.error("error fetching client from pool", err);
            process.exit(1);
        }
        done();
    });

    pool.on("error", function(err, client) {
        // if an error is encountered by a client while it sits idle in the pool
        // the pool itself will emit an error event with both the error and
        // the client which emitted the original error
        // this is a rare occurrence but can happen if there is a network partition
        // between your application and the database, the database restarts, etc.
        // and so you might want to handle it and at least log it out
        console.error("idle client error", err.message, err.stack);
    });

    return pool;
}
