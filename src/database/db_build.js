const fs = require('fs');
const connect = require('./db_connection');

const sql = fs.readFileSync(`${__dirname}/data.sql`).toString();

connect.query(sql, (err, res) => {
  if (err) {
    console.log(err);
  } else console.log(res);
});
