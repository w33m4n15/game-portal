"enable-strict";

const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "eben",
  password: "lsql!@#2025!@#EB",
  database: "shaGAME01",
});

connection.connect((error) => {
  if (error) {
    console.log("Error connecting to the MySQL Database");
    return;
  }
  console.log("Connection established sucessfully");
});
// connection.end((error) => {});
