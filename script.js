const wrapper = document.querySelector(".wrapper");
const btnLogin_popup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".iconClose");
const inputBox = document.querySelector(".inputBox input");
const loginBtn = document.querySelector(".loginBtn");
const registerLink = document.querySelector(".registerLink");
const registerBtn = document.querySelector(".registerBtn");
const loginLink = document.querySelector(".loginLink");
btnLogin_popup.addEventListener("click", () => {
  wrapper.classList.remove("active");
  wrapper.classList.add("active-popup");
  btnLogin_popup.style.backgroundColor = "limegreen";
  btnLogin_popup.style.border = "2px solid limegreen";
  btnLogin_popup.style.color = "white";
});
iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
  btnLogin_popup.style.background = "transparent";
  btnLogin_popup.style.border = "2px solid black";
  btnLogin_popup.style.color = "black";
});
loginBtn.addEventListener("click", (e) => {
  if (inputBox.value === "") {
    e.preventDefault();
    displayError("Please enter your login details.");
  } else {
    wrapper.classList.remove("active-popup");
  }
});
registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});
registerBtn.addEventListener("click", (e) => {
  if (inputBox.value === "") {
    e.preventDefault();
    displayError("Please enter your registration details.");
  } else {
    wrapper.classList.remove("active");
  }
});
loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});
function displayError(message) {
  alert(message);
}
