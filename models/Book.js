const db = require('../db');

const BookSchema = `
    CREATE TABLE IF NOT EXISTS books (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        author_id INT,
        summary TEXT NOT NULL,
        isbn VARCHAR(20) NOT NULL,
        FOREIGN KEY (author_id) REFERENCES authors(id),
        UNIQUE (isbn)
    );
`;

module.exports = () => (
    db.query(BookSchema, (err) => {
        if (err) throw err;
        console.log('Books table created');
    })
);
