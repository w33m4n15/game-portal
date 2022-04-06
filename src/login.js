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

// NEW SQL Solution

/*
function login(userNameMail, password, onSuccess, onError)
{
  if (userNameMail && password) {
    let userData = JSON.parse(localStorage.getItem("userData"));

    //pull database into a local variable for the session that is open.
    //
    // tempPass = SELECT password FROM user WHERE email = userNameMail;
    //
    // if(tempPass = null)
    //    onError()

    if( tempPass == password )
    {
      if (onSuccess)
      {
        onSuccess();
      }
      else
      {
        // tempPermish = SELECT permission FROM user WHERE email = userNameMail;
        // if (tempPermish === 1)
        {
          window.location.href = "./index.html";
        }
        // else if 2
        // else if 3
      }
    }
    else
    {
      if (onError)
      {
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
*/
