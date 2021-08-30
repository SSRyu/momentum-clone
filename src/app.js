const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");

function onLoginSubmit(submitEvent) {
  submitEvent.preventDefault();
  console.log(submitEvent);
  console.log(loginInput.value);
}

loginForm.onsubmit = onLoginSubmit;
