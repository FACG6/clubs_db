const pg = require('pg');
const url = require('url');
require('dotenv').config();

const { Pool } = pg;
const params = url.parse(process.env.DATABASE_URL);

const options = {
  user: params.auth.split(':')[0],
  password: params.auth.split(':')[1],
  port: params.port,
  host: params.hostname,
  database: params.pathname.split('/')[1],
  ssl: params.hostname !== 'localhost',
  max: process.env.DB_MAX_CONNECTIONS || 2,
<<<<<<< HEAD
});
console.log('options = :' + Pool)
module.exports = options;
=======
};
>>>>>>> 4fbf899bc25ee056ab023debb76226d684b14069

module.exports = new Pool(options);
