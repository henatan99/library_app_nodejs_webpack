const db = require('../db');

class Book {
    static getBooks(callback) {
        db.query('SELECT * FROM books', (err, results) => {
            if(err) throw err;
            callback(results);
        })
    }

    static createBook(values, callback) {
        const { title, author_id, summary, isbn, due_back } = values;
        db.query(`
            INSERT INTO books (title, author_id, summary, isbn, due_back)
            VALUES ('${title}', ${author_id}, '${summary}', '${isbn}', '${due_back}');
        `, (err, results) => {
            if(err) throw err;
            callback(results);
        })
    }

    static updateBook(values, callback) {
        const { id, title, author_id, summary, isbn, due_back } = values;
        db.query(`
            UPDATE authors
            SET title = '${title}', author_id = '${author_id}', summary = '${summary}', isbn = '${isbn}, due_back = '${due_back}''
            WHERE id = ${id};
        `, (err, results) => {
            if(err) throw err;
            callback(results);
        })
    }

    static deleteBook(values, callback) {
        const { id } = values;
        db.query(`
            DELETE FROM books
            WHERE id = ${id};
        `, (err, results) => {
            if(err) throw err;
            callback(results);
        })
    }
}

module.exports = Book;
