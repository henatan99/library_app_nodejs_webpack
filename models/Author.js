const db = require('../db');

const AuthorSchema = `
    CREATE TABLE IF NOT EXISTS authors (
        id INT AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(100) NOT NULL,
        family_name VARCHAR(100) NOT NULL,
        date_of_birth DATE,
        date_of_death DATE
    );
`;

module.exports = () => (
    db.query(AuthorSchema, (err) => {
        if(err) throw err;
        console.log('Author table created');
    })
);
