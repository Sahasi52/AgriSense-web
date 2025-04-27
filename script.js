@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: url("image.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
html::-webkit-scrollbar,
body::-webkit-scrollbar {
  display: none;
}

/* Home page */

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 100px;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
}
.logo {
  height: 60px;
  width: 100px;
  user-select: none;
}
.navigation {
  display: flex;
  justify-content: center;
  align-items: center;
}
.navigation a {
  position: relative;
  font-size: 1rem;
  color: black;
  text-decoration: none;
  font-weight: 500;
  margin-left: 40px;
}
.navigation a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 100%;
  height: 3px;
  background: limegreen;
  border-radius: 5px;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform 0.5s;
}
.navigation a:hover,
.navigation a.active {
  color: limegreen;
}
.navigation a:hover::after,
.navigation a.active::after {
  transform-origin: left;
  transform: scaleX(1);
}
.navigation .btn-popup {
  width: 100px;
  height: 45px;
  background: transparent;
  border: 2px solid black;
  outline: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  color: black;
  font-weight: 500;
  margin-left: 40px;
  transition: 0.3s;
}
.navigation .btn-popup:hover {
  background: limegreen;
  color: white;
  border: 2px solid limegreen;
}
.navigation .btn-popup.active {
  background: lch(72.61% 91 137.53);
  color: white;
  border: 2px solid limegreen;
}
.hero {
  position: absolute;
  margin-top: 13vh;
  width: 100%;
  padding: 0px 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.hero h1 {
  font-size: 2.81rem;
  line-height: 60px;
  color: white;
}
.hero p {
  font-size: 1rem;
  margin: 0;
  padding-bottom: 25px;
  color: white;
}
.hero div {
  display: flex;
  justify-content: center;
  align-self: center;
  margin-bottom: 15px;
}
.hero div button {
  padding: 35px 50px;
  margin: 75px;
  background: hsl(120, 61%, 50%, 0.5);
  box-shadow: 2px 2px 5px black;
  border: none;
  cursor: pointer;
  backdrop-filter: blur(20px);
  border-radius: 10px;
  font-weight: 500;
  transition: 0.3s;
}
.hero div button:hover {
  transform: scale(1.1);
  transition: 0.3s;
  background: rgba(255, 255, 255, 0.5);
}
.hero div .btnCrop-popup.active,
.hero div .btnFertilizer-popup.active {
  transform: scale(1.1);
  background: rgba(255, 255, 255, 0.5);
}
.hero h4 {
  font-size: 1.2rem;
  color: white;
  align-self: center;
}
.wrapper {
  margin-top: 13vh;
  position: fixed;
  width: 400px;
  height: 440px;
  background: hsl(120, 61%, 50%, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  backdrop-filter: blur(20px);
  box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transform: scale(0);
  transition: transform 0.5s ease, height 0.2s ease;
  z-index: 1000;
}
.wrapper.active-popup {
  transform: scale(1);
}
.wrapper.active {
  height: 520px;
}
.wrapper .iconClose {
  position: absolute;
  top: 0;
  right: 0;
  width: 45px;
  height: 45px;
  background: black;
  font-size: 2rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 20px;
  cursor: pointer;
  z-index: 1;
}
.wrapper .iconClose:hover {
  color: limegreen;
}
.wrapper .formBox {
  width: 100%;
  padding: 40px;
}
.wrapper .formBox.login {
  transition: transform 0.18s ease;
  transform: translateX(0);
}
.wrapper.active .formBox.login {
  transition: none;
  transform: translateX(-400px);
}
.wrapper .formBox.register {
  position: absolute;
  transition: none;
  transform: translateX(400px);
}
.wrapper.active .formBox.register {
  transition: transform 0.18s ease;
  transform: translateX(0);
}
.wrapper .formBox h2 {
  font-size: 2rem;
  color: black;
  text-align: center;
}
.wrapper .formBox .inputBox {
  position: relative;
  width: 100%;
  height: 50px;
  border-bottom: 2px solid black;
  margin: 30px 0;
}
.wrapper .formBox .inputBox .icon {
  position: absolute;
  right: 8px;
  font-size: 1.2rem;
  color: black;
  line-height: 57px;
}
.wrapper .formBox .inputBox input {
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1rem;
  color: black;
  font-weight: 600;
  padding: 0 35px 0 5px;
}
.wrapper .formBox .inputBox label {
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  font-size: 1rem;
  color: black;
  font-weight: 500;
  pointer-events: none;
  transition: 0.5s;
}
.wrapper .formBox .inputBox input:focus ~ label,
.wrapper .formBox .inputBox input:valid ~ label {
  top: -5px;
}
.wrapper .formBox .remember-forgot {
  font-size: 0.9rem;
  color: black;
  font-weight: 500;
  margin: -15px 0 15px;
  display: flex;
  justify-content: space-between;
}
.wrapper .formBox .remember-forgot label input {
  accent-color: black;
  margin-right: 3px;
}
.wrapper .formBox .remember-forgot a {
  color: black;
  text-decoration: none;
}
.wrapper .formBox .remember-forgot a:hover {
  text-decoration: underline;
}
.wrapper .formBox .loginBtn,
.wrapper .formBox .registerBtn {
  width: 100%;
  height: 45px;
  background: black;
  border: none;
  outline: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  color: white;
  font-weight: 500;
  transition: 0.3s;
}
.wrapper .formBox .loginBtn:hover,
.wrapper .formBox .registerBtn:hover {
  color: limegreen;
}
.wrapper .formBox .login-register {
  font-size: 0.9rem;
  color: black;
  text-align: center;
  font-weight: 500;
  margin: 25px 0 10px;
}
.wrapper .formBox .login-register p a {
  color: black;
  text-decoration: none;
  font-weight: 600;
}
.wrapper .formBox .login-register p a:hover {
  text-decoration: underline;
}
.wrap {
  margin-top: 13vh;
  position: fixed;
  width: 480px;
  height: 360px;
  background: hsl(120, 61%, 50%, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  backdrop-filter: blur(20px);
  box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transform: scale(0);
  transition: transform 0.5s ease, height 0.2s ease;
  z-index: 1000;
}
.wrap.active-popup {
  transform: scale(1);
}
.wrap .closeIcon {
  position: absolute;
  top: 0;
  right: 0;
  width: 45px;
  height: 45px;
  background: black;
  font-size: 2rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 20px;
  cursor: pointer;
  z-index: 1;
}
.wrap .closeIcon:hover {
  color: limegreen;
}
.wrap .formBox h2 {
  font-size: 2rem;
  color: black;
  text-align: center;
  margin: 0 0 25px;
}
.wrap .formBox .logoutBtn {
  width: 100%;
  height: 45px;
  background: black;
  border: none;
  outline: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  color: white;
  font-weight: 500;
  transition: 0.3s;
}
.wrap .formBox .logoutBtn:hover {
  color: limegreen;
}
.wrap .formBox .logout {
  font-size: 0.9rem;
  color: black;
  text-align: center;
  font-weight: 500;
  margin: 10px;
}
.cover {
  margin-top: 13vh;
  position: relative;
  width: 800px;
  height: 520px;
  background: hsl(120, 61%, 50%, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  backdrop-filter: blur(20px);
  box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transform: scale(0);
  transition: transform 0.5s ease, height 0.2s ease;
}
.cover.active-popup {
  transform: scale(1);
}
.cover.active {
  width: 720px;
  height: 440px;
}

.cover .iconBack {
  position: absolute;
  top: 0;
  left: 0;
  width: 45px;
  height: 45px;
  background: black;
  font-size: 2rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-right-radius: 20px;
  cursor: pointer;
  z-index: 1;
}
.cover .iconBack:hover {
  color: limegreen;
}
.cover .formBox {
  width: 100%;
  padding: 80px;
}
.cover .formBox.crop {
  transition: transform 0.18s ease;
  transform: translateX(0);
}
.cover.active .formBox.crop {
  transition: none;
  transform: translateX(-800px);
}
.cover .formBox.fertilizer {
  position: absolute;
  transition: none;
  transform: translateX(800px);
}
.cover.active .formBox.fertilizer {
  transition: transform 0.18s ease;
  transform: translateX(0);
}
.cover .formBox h2 {
  font-size: 2rem;
  color: black;
  text-align: center;
}
.cover .formBox .inputBox {
  position: relative;
  width: 100%;
  height: 35px;
  border-bottom: 2px solid black;
  margin: 25px 0;
}
.cover.active .formBox .inputBox {
  height: 50px;
  margin: 30px 0;
}
.cover .formBox .inputBox input {
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1rem;
  color: black;
  font-weight: 600;
  padding: 0 35px 0 5px;
}
/* For Chrome, Safari, Edge, Opera */
.no-spinner::-webkit-outer-spin-button,
.no-spinner::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* For Firefox */
.no-spinner {
  -moz-appearance: textfield;
}
.cover .formBox .inputBox label {
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  font-size: 1rem;
  color: black;
  font-weight: 500;
  pointer-events: none;
  transition: 0.5s;
}
.cover .formBox .inputBox input:focus ~ label,
.cover .formBox .inputBox input:valid ~ label {
  top: -5px;
}
.cover .formBox .recommendationBtn {
  width: 100%;
  height: 45px;
  background: black;
  border: none;
  outline: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  color: white;
  font-weight: 500;
  transition: 0.3s;
}
.cover .formBox .recommendationBtn:hover {
  color: limegreen;
}

/* About Page */

.about {
  position: absolute;
  margin-top: 14vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 440px;
  background: hsl(120, 61%, 50%, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  backdrop-filter: blur(20px);
  box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.5);
  padding: 40px;
}
.about h1 {
  padding-left: 40%;
  font-size: 2.87rem;
  line-height: 54px;
  color: black;
}
.about p {
  font-size: 1rem;
  margin: 0;
  color: black;
}
.about marquee {
  background-color: white;
}

/* Contact Page */

.contact {
  position: absolute;
  margin-top: 14vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 720px;
  height: 440px;
  background: hsl(120, 61%, 50%, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  backdrop-filter: blur(20px);
  box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.5);
  padding: 40px;
}
.contact h6 {
  font-size: 0.75rem;
  color: black;
}
.contact h3 {
  font-size: 1.62rem;
  line-height: 35px;
  padding: 10px 0 20px 0;
  color: black;
}
.contact li {
  list-style: none;
  display: flex;
  padding: 10px 0;
}
.contact li span {
  font-size: 0.87rem;
  padding-right: 22px;
  color: black;
}
.contact li p {
  color: black;
  margin: 0;
  font-size: 0.87rem;
}
