import { $ } from "../utils/querySelector.js";

export const themeBtn = ({ btn }) => {

  document.addEventListener('click', e => {
    if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
      let $icon = $(btn).firstElementChild;

      /* Tambien se prodria usar un data attribute como data-dark para confirmar a cuales elementos le daras x clase con un forEach. document.querySelectorAll("[data-dark]")   */
      if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');
        $icon.classList.remove("ti-sun-high-filled");
        $icon.classList.add("ti-moon-filled");

        localStorage.setItem('theme', 'light');
        return;
      }
      document.body.classList.add("dark");
      $icon.classList.remove("ti-moon-filled");
      $icon.classList.add("ti-sun-high-filled");
      
      localStorage.setItem("theme", "dark");
      return;
    }
  })
}