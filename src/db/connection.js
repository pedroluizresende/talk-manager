const mysql = require('mysql2/promise');
// cria a conexão com o bando de dados connection
const connection = mysql.createPool({
  host: process.env.MYSQL_HOSTNAME,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_DATABASE,
});

module.exports = connection;