const fs = require('fs');
const path = require('path');
const connection = require('./db_connection');

const buildDatabase = () => {
  const filepathSQL = path.join(__dirname, 'data.sql');
  const sql = fs.readFileSync(filepathSQL).toString();
  connection.query(sql, (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log('The table creation', result);
      connection.end(() => {
        console.log('connection closed');
      });
    }
  });
};
buildDatabase();
module.exports = buildDatabase;