const hambrger = document.querySelector(".header__hamburger");
const navMenu = document.querySelector(".header__nav");
const header = document.querySelector(".header");
const links = document.querySelector(".header__links");
hambrger.addEventListener("click", () => {
  hambrger.classList.toggle("active");
  navMenu.classList.toggle("active");
  header.classList.toggle("active");
  links.classList.toggle("active");
});

document.querySelectorAll("header__links").forEach((n) => {
  n.addEventListener("click", () => {
    hambrger.classList.remove("active");
    navMenu.classList.remove("active");
    header.classList.remove("active");
    links.classList.remove("active");
  });
});
