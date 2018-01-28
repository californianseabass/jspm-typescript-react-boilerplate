import jwt from "jsonwebtoken";
import Strategy from "passport-local";

const checkPassword = pool => {
    return (req, email, password, done) => {
        const userData = {
            email: email.trim(),
            password: password.trim(),
        };
        const query = `SELECT password, id, email
                   FROM am.users 
                   WHERE email='${userData.email}';`;

        // find a user by email address
        pool
            .connect()
            .then(client => {
                client
                    .query(query)
                    .then(dbQueryRes => {
                        client.release();
                        if (dbQueryRes.rows.length == 0) {
                            console.error("user was not found");
                            const error = new Error("Incorrect email or password");
                            error.name = "IncorrectCredentialsError";

                            return done(error);
                        } else {
                            const hash = dbQueryRes.rows[0].password;
                        }
                    })
                    .catch(err => {
                        console.error("error running query", err);
                    });
            })
            .catch(err => {
                console.error("error fetching client from pool", err);
            });
    };
};
/**
 * Return the Passport Local Strategy object.
 */
const config = {
    usernameField: "email",
    passwordField: "password",
    session: false,
    passReqToCallback: true,
};

export default pool => {
    return new Strategy(config, checkPassword(pool));
};
