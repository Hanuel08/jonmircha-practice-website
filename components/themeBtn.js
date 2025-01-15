import { $ } from "../utils/querySelector.js";

export const themeBtn = ({ btn }) => {

  document.addEventListener('click', e => {
    if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
      let $icon = $(btn).firstElementChild;

      if ($icon.classList.contains('ti-moon-filled')) {
        $icon.classList.remove('ti-moon-filled');
        $icon.classList.add("ti-sun-high-filled");
      } else {
        $icon.classList.remove("ti-sun-high-filled");
        $icon.classList.add('ti-moon-filled');
      }
      document.body.classList.toggle('dark-theme');
    }
  })
}