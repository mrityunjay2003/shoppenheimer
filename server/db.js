const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "mjay2812",
  database: "ecommerce",
  host: "localhost",
  port: 5432,
});

module.exports = pool;
