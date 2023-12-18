const db = require('../db');

const GenreSchema = `
    CREATE TABLE genres (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        CHECK (CHAR_LENGTH(name) >= 3),
        CHECK (CHAR_LENGTH(name) <= 100)
    );
`;

module.exports = () => (
    db.query(GenreSchema, (err) => {
        if (err) throw err;
        console.log('Genre table created');
    })
);

