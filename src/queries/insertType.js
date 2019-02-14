const connet = require('../database/db_connection');

const addType = (typeName, typeImage, cb) => {
  const addnewClub = `insert into clubs_type(type_name ,type_image )values ('${typeName}','${typeImage}')`;
  connet.query(addnewClub, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, 'Sucsess');
    }
  });
};
module.exports = addType;
