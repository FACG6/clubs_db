const dbConection = require('../database/db_connection');

const getClubs = (typeId, cb) => {
  const sqlquery = `SELECT cb.c_name , cb.c_desc ,cb_t.type_name  
   FROM clubs cb  join clubs_type cb_t on cb_t.id = cb.type_id where cb_t.id =${typeId};`;
  dbConection.query(sqlquery, (err, res) => {
    if (err) return cb(err);
    return cb(null, res.rows);
  });
};
module.exports = getClubs;
