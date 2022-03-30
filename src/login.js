function login(userNameMail, password, onSuccess, onError) {
  if (userNameMail && password) {
    let userData = JSON.parse(localStorage.getItem("userData"));
    if (
      (userData.surname == userNameMail || userData.email == userNameMail) &&
      userData.password == password
    ) {
      if (onSuccess) {
        onSuccess();
      } else {
        window.location.href = "./index.html";
      }
    } else {
      if (onError) {
        onError();
      }
    }
  }
}

function logOut() {
  setTimeout(() => {
    window.location.href = "./login.html";
  }, 500);
}
