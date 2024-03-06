const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "your password",
  host: "localhost",
  port: "5432",
  database: "rest_api_postgres",
});

module.exports = pool;
