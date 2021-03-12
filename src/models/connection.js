const mysql = require('mysql2');

module.exports = (config) => {

  const pool = mysql.createPool(config);
  const con = pool.promise();

  return con;
}
