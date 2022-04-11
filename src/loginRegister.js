"enable-strict";

function setFormMessage(formElement, type, message) {
  const messageElement = formElement.querySelector(".form__message");

  messageElement.textContent = message;
  messageElement.classList.remove(
    "form__message--success",
    "form__message--error"
  );
  messageElement.classList.add(`form__message--${type}`);
}

function clearFormMessage(formElement) {
  const messageElement = formElement.querySelector(".form__message");
  messageElement.textContent = "";
  messageElement.classList.remove(
    "form__message--success",
    "form__message--error"
  );
}

function setInputError(inputElement, message) {
  inputElement.classList.add("form__input--error");
  inputElement.parentElement.querySelector(
    ".form__input-error-message"
  ).textContent = message;
}

function clearInputError(inputElement) {
  inputElement.classList.remove("form__input--error");
  inputElement.parentElement.querySelector(
    ".form__input-error-message"
  ).textContent = "";
}

// input warning
function inputWarn(inputElement, message) {
  setInputError(inputElement, message);

  setTimeout(() => {
    clearInputError(inputElement);
  }, 5000);
}

// validate mail
function validateEmail(mail) {
  let mailFormat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (mail.value.match(mailFormat)) {
    return true;
  } else {
    return false;
  }
}

// validate phone number
function validatePhoneNumber(phoneNumber) {
  let phoneNumberFormat = /^(\+?27|0)|[6-8][0-9]{8}$/;
  if (phoneNumber.value.replace(/\s/g, "").match(phoneNumberFormat)) {
    return true;
  } else {
    return false;
  }
}

// validate password
function validatePassword(password) {
  if (password.value.length >= 8) {
    return true;
  } else {
    return false;
  }
}

// form
const loginForm = document.querySelector("#login");
const createAccountForm = document.querySelector("#createAccount");

// Creating an Account
let userAccounts = [];

const addUser = (e) => {
  e.preventDefault();

  // submitted data
  let name = document.getElementById("userName");
  let surname = document.getElementById("userSurname");
  let email = document.getElementById("userEmail");
  let phoneNumber = document.getElementById("phoneNumber");
  let password = document.getElementById("password");
  let permission = 1;

  // check name
  let allowName = name.value;
  if (!allowName) {
    inputWarn(name, "Write your Name");
  }
  // check name
  let allowSurname = surname.value;
  if (!allowSurname) {
    inputWarn(surname, "Write your surname");
  }
  // check email
  let allowMail = validateEmail(email);
  if (!allowMail) {
    inputWarn(email, "Enter a valid Mail Address");
  }
  // check phone number
  let allowPhoneNumber = validatePhoneNumber(phoneNumber);
  if (!allowPhoneNumber) {
    inputWarn(phoneNumber, "Enter a valid phone number");
  }
  // check password
  let allowPassword = validatePassword(password);
  if (!allowPassword) {
    inputWarn(password, "Must contain at least one number");
  }

  // let allowPerm = permission;
  // if (!allowPerm) {
  //   inputWarn(permission, "Must have a permission");
  // }

  if (
    permission &&
    allowName &&
    allowSurname &&
    allowMail &&
    allowPhoneNumber &&
    allowPassword
  ) {
    let user = {
      permission: 1,
      name: document.getElementById("userName").value,
      surname: document.getElementById("userSurname").value,
      email: document.getElementById("userEmail").value,
      phoneNumber: document.getElementById("phoneNumber").value,
      password: document.getElementById("password").value,
      profile:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAEOer7jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA+dpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjVEMjA4OTI0OTNCRkRCMTE5MTRBODU5MEQzMTUwOEM4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkZCREYyOUZBQzUyMDExRTU5Q0NFQjUwOTVERDA3MTAzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkZCREYyOUY5QzUyMDExRTU5Q0NFQjUwOTVERDA3MTAzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgTWFjaW50b3NoIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkY0MjdBNUMwODIwNjgxMUI5RDBBMTA2RjE0NDdEM0YiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkU0MjdBNUMw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",
    };
    console.log(user);
    userAccounts.push(user);

    localStorage.setItem("userData", JSON.stringify(user));
    setFormMessage(createAccountForm, "success", "User has been registered");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector("#linkCreateAccount")
    .addEventListener("click", (e) => {
      e.preventDefault();
      loginForm.classList.add("form--hidden");
      createAccountForm.classList.remove("form--hidden");
    });

  document.querySelector("#linkLogin").addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.remove("form--hidden");
    createAccountForm.classList.add("form--hidden");
  });

  document.getElementById("continue").addEventListener("click", addUser);

  //     Logging in a user
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // submitted data
    let userNameEmail = document.getElementById("loginUsernameId");
    let password = document.getElementById("loginPassword");

    // allow username & email
    let allowUserNameEmail = userNameEmail.value;
    if (!allowUserNameEmail) {
      inputWarn(userNameEmail, "field are required");
    }

    // allow password
    let allowPassword = password.value;
    if (!allowPassword) {
      inputWarn(password, "field are required");
    }

    if (allowUserNameEmail && allowPassword) {
      login(allowUserNameEmail, allowPassword, null, () => {
        setFormMessage(
          loginForm,
          "error",
          "Invalid username/password combination"
        );
      });
    }
  });

  document.querySelectorAll(".form__input").forEach((inputElement) => {
    inputElement.addEventListener("blur", (e) => {
      if (
        e.target.id === "signupUsername" &&
        e.target.value.length > 0 &&
        e.target.value.length < 10
      ) {
        setInputError(
          inputElement,
          "Username must be at least 10 characters in length"
        );
      }
    });

    inputElement.addEventListener("input", (e) => {
      clearInputError(inputElement);
    });
  });
});
