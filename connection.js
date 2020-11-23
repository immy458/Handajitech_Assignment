/*const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1522",
  database: "handajitech",
});*/

const { createPool } = require("mysql");
require("dotenv").config();

const pool = createPool({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.MYSQL_DB,
});
console.log(pool);
module.exports = pool;
