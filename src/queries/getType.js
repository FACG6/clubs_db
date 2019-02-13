const connect = require('../database/db_connection');

const getType = (cb) => {
  const gettypeQuery = 'select * from clubs_type';
  connect.query(gettypeQuery, (error, res) => {
    if (error) {
      cb(error);
    } else {
      cb(null, res.rows);
    }
  });
};

module.exports = getType;
