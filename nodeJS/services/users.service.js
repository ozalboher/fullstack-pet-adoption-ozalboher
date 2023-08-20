const db = require('../data/database');
const crypto = require('crypto');


const getUserFullNameService = async (id) => {
    const query = `SELECT firstName, lastName FROM users WHERE users.id = '${id}'`;
    const [user] = await db.query(query);
    return user;
   /* return db.get(id).firstName + " " + db.get(id).lastName; */
};
const getUserInfoService = async (id) => {
    const query = `SELECT firstName, lastName, email, phoneNumber, bio, role FROM users WHERE users.id = '${id}'`;
    const [result] = await db.query(query);
    return result[0];
};
const addNewUserService = async (user) => {
    const updatedObject = {
        id: crypto.randomUUID(),
        ...user
    };
    const arrayData = Object.values(updatedObject); 
    await db.query (`INSERT INTO users (id, email, firstName, lastName, password, phoneNumber, role) VALUES (?)`,[arrayData]);
    // the question mark act as a placeholder for the values that we want to insert into the table
    // the values are passed as an array to the query function
    // Therefore we need to convert the object into an array using Object.values()
};
const findUserByEmailService = async (email) => {
    email = email.toLowerCase();
    if (!email) {
        return null;
    }
    const query = `SELECT id FROM users WHERE users.email = '${email}'`;
    const [user] = await db.query(query);
    // if the user is not found, the query will return an empty array which is a truthy value in JS so we need to convert it to an empty string:
    const userValue = user.length > 0 ? user : ''; // convert the [] to '' if the user is not found
    return userValue; 
};
const updateUserService = async (userId, user) => {
    const { firstName, lastName, email, phoneNumber, bio } = user;
        const query = `UPDATE users SET firstName = '${firstName}', lastName = '${lastName}', email = '${email}', phoneNumber = '${phoneNumber}', bio = '${bio}' WHERE users.id = '${userId}'`;
        await db.query(query);
};
const updateUserWithPasswordService = async (userId, user) => {
    const { firstName, lastName, email, phoneNumber, bio, password } = user;
        const query = `UPDATE users SET firstName = '${firstName}', lastName = '${lastName}', email = '${email}', phoneNumber = '${phoneNumber}', bio = '${bio}', password = '${password}' WHERE users.id = '${userId}'`;
        await db.query(query);
};


module.exports = {
    addNewUserService,
    findUserByEmailService,
    getUserFullNameService,
    getUserInfoService,
    updateUserService,
    updateUserWithPasswordService,
};


