var mysql = require('mysql2');
require('dotenv').config();

// console.log('db', process.env.DB_NAME);
// console.log('user', process.env.DB_USER);
// console.log('pw', process.env.DB_USER_PASSWORD);

var connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_USER_PASSWORD,
    database: process.env.DB_NAME
});

// console.log('config', connection.config);
connection.connect((err) => {
    if(err) {
        console.log(`Error connecting to ${connection.config.database}:`, err);
        return;
    } else {
        console.log(`Conneted to database:`, connection.config.database);
    }
});

module.exports = connection;