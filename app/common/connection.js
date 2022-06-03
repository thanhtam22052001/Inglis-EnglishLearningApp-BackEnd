const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Tamhandsome22052001",
  database: "inglisdatabase",
});

module.exports = connection;
