let navList = document.querySelector(".jsNavList");
let hamburger = document.querySelector(".jsHamburger");
let jsClose = document.querySelector(".jsClose");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("nav-list-show");
  jsClose.addEventListener("click", () => {
    navList.classList.remove("nav-list-show");
  });
});
