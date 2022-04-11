const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "eben",
  password: "lsql!@#2025!@#EB",
  database: "shaGAME01",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
