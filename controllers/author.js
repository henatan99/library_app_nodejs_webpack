const db = require('../db');

class Author {
    static getAuthors(callback) {
        db.query('SELECT * FROM authors', (err, results) => {
            if(err) throw err;
            callback(results);
        })
    }

    static createAuthor(values, callback) {
        const { first_name, family_name, date_of_birth, date_of_death } = values;
        db.query(`
            INSERT INTO authors (first_name, family_name, date_of_birth, date_of_death)
            VALUES ('${first_name}', '${family_name}', '${date_of_birth}', '${date_of_death}');
        `, (err, results) => {
            if(err) throw err;
            callback(results);
        })
    }

    static updateAuthor(values, callback) {
        const { id, first_name, family_name, date_of_birth, date_of_death } = values;
        db.query(`
            UPDATE authors
            SET first_name = '${first_name}', family_name = '${family_name}', date_of_birth = '${date_of_birth}', date_of_death = '${date_of_death}'
            WHERE id = ${id};
        `, (err, results) => {
            if(err) throw err;
            callback(results);
        })
    }

    static deleteAuthor(values, callback) {
        const { id } = values;
        db.query(`
            DELETE FROM authors
            WHERE id = ${id};
        `, (err, results) => {
            if(err) throw err;
            callback(results);
        })
    }
}

module.exports = Author;