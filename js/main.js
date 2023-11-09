
const menuBtn = document.querySelector(".menu__button");
const menu = document.querySelector(".navbar__panel");
const menuCloseBtn = document.querySelector(".close__menu");
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("is-open");
});
menuCloseBtn.addEventListener("click", () => {
  menu.classList.toggle("is-open");
});
