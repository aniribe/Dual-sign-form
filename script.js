let loginBtn = document.getElementById("log-reg-show");
let regBtn = document.getElementById("log-login-show");
let whitePanel = document.getElementById("white-panel");
let loginCard = document.getElementById("login-show");
let regCard = document.getElementById("register-show");

loginBtn.addEventListener("click", addRemoveActiveClass);
regBtn.addEventListener("click", addRemoveActiveClass);

function addRemoveActiveClass() {
  whitePanel.classList.toggle("right");
  loginCard.classList.toggle("active");
  regCard.classList.toggle("active");
}

// function loginShow() {
//   addRemoveActiveClass();
// }
