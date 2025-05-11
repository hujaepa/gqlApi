const db = require('../../config/db');

const EmpDb = {
  getAll: (callback) => {
    const sql = 'SELECT * FROM employee';
    db.query(sql, callback);
  }
};

module.exports = EmpDb;
