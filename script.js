const navigation = document.querySelector(".navigation");
const btn_popup = document.querySelector(".btn-popup");
const bar = document.querySelector(".bar");
const closeBar = document.querySelector(".close");
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
const wrap = document.querySelector(".wrap");
const closeIcon = document.querySelector(".closeIcon");
const logoutBtn = document.querySelector(".logoutBtn");
const cover = document.querySelector(".cover");
const iconBack = document.querySelector(".iconBack");
btn_popup.addEventListener("click", () => {
  if (btn_popup.textContent === "Logout") {
    wrap.classList.add("active-popup");
    btn_popup.classList.add("active");
  } else {
    wrapper.classList.remove("active");
    wrapper.classList.add("active-popup");
    btn_popup.classList.add("active");
  }
});
bar.addEventListener("click", () => {
  navigation.classList.add("active");
  bar.style.display = "none";
});
closeBar.addEventListener("click", () => {
  navigation.classList.remove("active");
  bar.style.display = "flex";
});
iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
  btn_popup.classList.remove("active");
});
forgotPassword.addEventListener("click", () => {
  displayError("Click here to reset it.");
});
loginBtn.addEventListener("click", () => {
  const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (loginEmail.value === "" || loginPassword.value === "") {
    displayError("Please enter your login details.");
  } else if (!emailFormat.test(loginEmail.value)) {
    displayError("Please enter a valid email address.");
  } else if (
    (loginEmail.value === registerEmail.value &&
      loginPassword.value === registerPassword.value) ||
    (loginEmail.value === "example@gmail.com" &&
      loginPassword.value === "example1234")
  ) {
    wrapper.classList.remove("active-popup");
    btn_popup.classList.remove("active");
    btn_popup.textContent = "Logout";
  } else {
    displayError("Please enter your valid login details.");
  }
});
registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});
registerBtn.addEventListener("click", () => {
  const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (
    registerUsername.value === "" ||
    registerEmail.value === "" ||
    registerPassword.value === ""
  ) {
    displayError("Please enter your registration details.");
  } else if (!emailFormat.test(registerEmail.value)) {
    displayError("Please enter a valid email address.");
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
closeIcon.addEventListener("click", () => {
  wrap.classList.remove("active-popup");
  btn_popup.classList.remove("active");
});
logoutBtn.addEventListener("click", () => {
  wrap.classList.remove("active-popup");
  btn_popup.classList.remove("active");
  btn_popup.textContent = "Login";
});
btnCrop_popup.addEventListener("click", () => {
  cover.classList.remove("active");
  cover.classList.add("active-popup");
  btnCrop_popup.classList.add("active");
});
btnFertilizer_popup.addEventListener("click", () => {
  cover.classList.add("active");
  cover.classList.add("active-popup");
  btnFertilizer_popup.classList.add("active");
});
iconBack.addEventListener("click", () => {
  cover.classList.remove("active-popup");
  btnCrop_popup.classList.remove("active");
  btnFertilizer_popup.classList.remove("active");
});
