const pg = require('pg');
const url = require('url');
require('dotenv').config();

const {
  Pool,
} = pg;
const params = url.parse(process.env.DATABASE_URL);
const [username, password] = params.auth.split(':');
const options = {
  user: username,
  password,
  port: params.port,
  host: params.hostname,
  database: params.pathname.split('/')[1],
  ssl: params.hostname !== 'localhost',
  max: process.env.DB_MAX_CONNECTIONS || 2,
};
module.exports = new Pool(options);
