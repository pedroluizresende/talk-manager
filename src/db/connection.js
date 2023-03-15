const mysql = require('mysql2/promise');
// cria a conexão com o bando de dados connection
const connection = mysql.createPool({
  host: 'db',
  user: 'root',
  password: 'password',
  port: '3306',
  database: 'TalkerDB',
});

module.exports = connection;