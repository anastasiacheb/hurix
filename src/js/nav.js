let navButton = document.querySelector(".nav__burger");
let navMenu = document.querySelector(".nav__menu");

navButton.addEventListener("click", () => {
  navButton.classList.toggle("active");
  navMenu.classList.toggle("active");
});
