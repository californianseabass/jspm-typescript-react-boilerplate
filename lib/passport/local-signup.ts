import Strategy from 'passport-local';
import uuidV4 from 'uuid/v4';


import { hash } from 'jspm-typescript-react-boilerplate/lib/database/util';

// TODO use bcryptjs here
function addUserToDatabase({ pool, done, userId, email, password, name }) {
    Promise.all({ client: pool.connect(), password_hash: hash(password) })
        .then((results) => {
            const client = results.client;
            const hash_password = results.password_hash;
            const queryString = `INSERT INTO am.users(id, email, password, name)
                              VALUES ('${userId}', '${email}', '${hash_password}', '${name}')`;

            client.query(queryString, function(err, result) {
                //call `done(err)` to release the client back to the pool (or destroy it if there is an error)
                if (err) {
                    console.error("error running query", err);
                    return done(err);
                } else {
                    return done(null);
                }
            });
        })
        .catch(err => {
            console.log("error in querying table for signup:", err);
        });
}

const registerNewUser = pool => {
    return (req, email, password, done) => {
    };
};

const config = {
    usernameField: "email",
    passwordField: "password",
    session: false,
    passReqToCallback: true,
};

export default pool => {
    return new Strategy(config, registerNewUser(pool));
};
