let navButton = document.querySelector(".nav__burger");
let navMenu = document.querySelector(".nav__menu");

navButton.addEventListener("click", () => {
  navButton.classList.toggle("active");
  navMenu.classList.toggle("active");

  if (navMenu.classList.contains("active")) {
    disableScroll();
  } else {
    enableScroll();
  }
});

function disableScroll() {
  let scrollTop = document.documentElement.scrollTop;
  let scrollLeft = document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop);
  };
}

function enableScroll() {
  window.onscroll = function () {};
}
