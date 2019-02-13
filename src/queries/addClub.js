const connet = require('../database/db_connection');

const addClub = (clubName, clubeDes, clubtype, cb) => {
  const addnewClub = `insert into clubs(c_name ,c_desc ,type_id )values ('${clubName}','${clubeDes}',${clubtype})`;
  connet.query(addnewClub, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res);
    }
  });
};
module.exports = addClub;
