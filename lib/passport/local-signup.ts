import Strategy from 'passport-local';
import uuidV4 from 'uuid/v4';

function addUserToDatabase({ pool, done, userId, email, password, name }) {
    pool
        .connect()
        .then(client => {
            const queryString = `INSERT INTO am.users(id, email, password, name)
                              VALUES ('${userId}', '${email}', '${password}', '${name}')`;

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
