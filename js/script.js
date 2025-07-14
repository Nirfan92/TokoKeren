const loginPopup = document.getElementById("loginPopup");
const openLogin = document.querySelector(".open-login");
const closeLogin = document.getElementById("closeLogin");

openLogin.addEventListener("click", () => {
  loginPopup.classList.add("active");
});

closeLogin.addEventListener("click", () => {
  loginPopup.classList.remove("active");
});

window.addEventListener("click", (e) => {
  if (e.target === loginPopup) {
    loginPopup.classList.remove("active");
  }
});
