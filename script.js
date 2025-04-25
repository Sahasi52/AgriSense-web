const btnLogin_popup = document.querySelector(".btnLogin-popup");
const btnCrop_popup = document.querySelector(".btnCrop-popup");
const btnFertilizer_popup = document.querySelector(".btnFertilizer-popup");
const wrapper = document.querySelector(".wrapper");
const iconClose = document.querySelector(".iconClose");
const loginEmail = document.querySelector(".loginEmail");
const loginPassword = document.querySelector(".loginPassword");
const forgotPassword = document.querySelector(".forgotPassword");
const loginBtn = document.querySelector(".loginBtn");
const registerLink = document.querySelector(".registerLink");
const registerUsername = document.querySelector(".registerUsername");
const registerEmail = document.querySelector(".registerEmail");
const registerPassword = document.querySelector(".registerPassword");
const registerBtn = document.querySelector(".registerBtn");
const loginLink = document.querySelector(".loginLink");
const cover = document.querySelector(".cover");
const iconBack = document.querySelector(".iconBack");
btnLogin_popup.addEventListener("click", () => {
  wrapper.classList.remove("active");
  wrapper.classList.add("active-popup");
  btnLogin_popup.classList.add("active");
});
iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
  btnLogin_popup.classList.remove("active");
});
forgotPassword.addEventListener("click", () => {
  displayError("Click here to reset it.");
});
loginBtn.addEventListener("click", () => {
  if (loginEmail.value === "" || loginPassword.value === "") {
    displayError("Please enter your login details.");
  } else {
    wrapper.classList.remove("active-popup");
  }
});
registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});
registerBtn.addEventListener("click", () => {
  if (
    registerUsername.value === "" ||
    registerEmail.value === "" ||
    registerPassword.value === ""
  ) {
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
btnCrop_popup.addEventListener("click", () => {
  cover.classList.remove("active");
  cover.classList.add("active-popup");
});
btnFertilizer_popup.addEventListener("click", () => {
  cover.classList.add("active");
  cover.classList.add("active-popup");
});
iconBack.addEventListener("click", () => {
  cover.classList.remove("active-popup");
});
