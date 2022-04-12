// "enable-strict";

// upload profile pic
function onUploadProfile() {
  let userData = JSON.parse(localStorage.getItem("userData"));
  let profilePicElement = document.querySelector(".profile__picture img");
  let profilePicInput = document.querySelector(
    ".profile__picture input[type=file]"
  ).files[0];
  let imgReader = new FileReader();

  imgReader.addEventListener("load", () => {
    userData.profile = imgReader.result;
    localStorage.setItem("userData", JSON.stringify(userData));

    profilePicElement.setAttribute("src", imgReader.result);
  });

  imgReader.readAsDataURL(profilePicInput);
}

// SQL Connect
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
