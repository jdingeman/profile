const db = require('../db');

exports.getAll = () => {
    return db.query('SELECT * FROM user').then(([rows]) => rows);
};

exports.getById = (id) => {
    return db.query('SELECT * FROM user WHERE id= ?', [id]).then(([rows]) => rows);
}

exports.create = ({ name, email, companyId}) => {
    return db.query(
        'INSERT INTO user (name, email, companyId) VALUES (?, ?, ?)',
        [name, email, companyId]
    )
    .then(([result]) => ({ id: result.insertId, name, email, companyId}));
}