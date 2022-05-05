const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#password-confirm");
const errMessage = document.querySelector(".error-message");
const form = document.querySelector(".signup-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (password !== passwordConfirm) {
    password.classList.add("error");
    passwordConfirm.classList.add("error");
    errMessage.style.display = "inline";
  }
});
