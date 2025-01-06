import { $ } from "../utils/querySelector.js";

export const menu = ({ menu, menuBtn, menuLinks}) => {
  document.addEventListener("click", e => {
    /* El selector 'elemento *' es para seleccionar los todos hijos de elemento */
    if (e.target.matches(menuBtn) || e.target.matches(`${menuBtn} *`)) { 
      $(menu).classList.toggle("is-active");
      $(menuBtn).classList.toggle("is-active");
    }

    if (e.target.matches(menuLinks)) {
      $(menu).classList.remove("is-active");
      $(menuBtn).classList.remove("is-active");
    }
  });
}
