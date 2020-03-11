let loginBtn = document.getElementById("log-reg-show");
let regBtn = document.getElementById("log-login-show");
let whitePanel = document.getElementById("white-panel");
let loginCard = document.getElementById("login-show");
let regCard = document.getElementById("register-show");
let inputs = document.querySelectorAll(".floating input:not([type='button'])");

loginBtn.addEventListener("click", addRemoveActiveClass);
regBtn.addEventListener("click", addRemoveActiveClass);

inputs.forEach(element =>
  element.addEventListener("focus", addClassForFloating)
);

inputs.forEach(element =>
  element.addEventListener("blur", removeClassForFloationg)
);

function addClassForFloating() {
  let classes = this.parentElement;
  if (classes.className === "floating") {
    classes.classList.toggle("active", true);
  }
}

function removeClassForFloationg() {
  let classes = this.parentElement;
  console.log(classes);
  if (!this.value) {
    classes.classList.toggle("active", false);
  }
}

function addRemoveActiveClass() {
  whitePanel.classList.toggle("right");
  loginCard.classList.toggle("active");
  regCard.classList.toggle("active");
}
