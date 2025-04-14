const wrapper = document.querySelector(".wrapper");
const btnLogin_popup = document.querySelector(".btnLogin-popup");
const loginLink = document.querySelector(".loginLink");
const registerLink = document.querySelector(".registerLink");
const iconClose = document.querySelector(".iconClose");
btnLogin_popup.addEventListener("click", () => {
  wrapper.classList.remove("active");
  wrapper.classList.add("active-popup");
  btnLogin_popup.style.backgroundColor = "limegreen";
  btnLogin_popup.style.border = "2px solid limegreen";
  btnLogin_popup.style.color = "white";
});
loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});
registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});
iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
  btnLogin_popup.style.background = "transparent";
  btnLogin_popup.style.border = "2px solid black";
  btnLogin_popup.style.color = "black";
});
