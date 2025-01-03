

const $ = element => document.querySelector(element);
const $$ = element => document.querySelectorAll(element);

const $btnNav = $(".menu-btn");

$btnNav.addEventListener("click", () => {
  let $nav = $(".nav");
  if ($nav.classList.contains('open')) {
    $nav.classList.remove('open');
    $nav.style.display = "none";
  } else {
    $nav.classList.add('open');
    $nav.style.display = "flex";
  }
});

