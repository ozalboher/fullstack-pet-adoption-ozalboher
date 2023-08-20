const mysql = require('mysql2/promise'); // we use mysql2/promise because it supports async/await

// we create a pool of connections to the database so we can use it in the controllers without having to create a new connection every time we want to query the database.
const pool = mysql.createPool({
    host: 'localhost',
    database: 'pets',
    user: 'root',
    password: '012321'
}); 

module.exports = pool;