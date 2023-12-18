const db = require('../db');

const BookInstanceSchema = `
    CREATE TABLE IF NOT EXISTS bookinstances (
        id INT AUTO_INCREMENT PRIMARY KEY,
        book_id INT,
        imprint VARCHAR(255) NOT NULL,
        status ENUM('Available', 'Maintenance', 'Loaned', 'Reserved') NOT NULL DEFAULT 'Maintenance',
        due_back TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (book_id) REFERENCES books(id)
    );
`;

module.exports = () => (
    db.query(BookInstanceSchema, (err) => {
        if (err) throw err;
        console.log('BookInstance table created');
    })
);
