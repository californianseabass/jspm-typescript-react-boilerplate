import bcrypt from 'bcryptjs';


export function hash(myString) {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(10, function(err, salt) {
            if (err) reject(err);
            bcrypt.hash(myString, salt, function(err, hash) {
                if (err) reject(err);
                // Store hash in your password DB.
                resolve(hash, salt);
            });
        });
    });
}
