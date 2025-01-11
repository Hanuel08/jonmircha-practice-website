import { $ } from "../utils/querySelector.js";

export const scrollBtn = ({ btn }) => {
  let $btn = $(btn);

  document.addEventListener("scroll", () => {
    if (window.scrollY >= 500) {
      $btn.style.display = "flex";
      console.log('Visible', window.scrollY)
    } else {
      $btn.style.display = "none";
      console.log('Nooo Visible', window.scrollY)
    }
  });

  document.addEventListener("click", e => {
    if (e.target.matches(`${btn} *`)) { 
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      console.log('WOAAAAAAA')
    }
  });
};