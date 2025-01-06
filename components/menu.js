import { $ } from "../utils/querySelector.js";

export const navMenu = (panelBtn, panel, menuLinks) => {
  
  document.addEventListener("click", e => {
    /* El selector 'elemento *' es para seleccionar los todos hijos de elemento */
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) { 
      $(panel).classList.toggle("is-active");
      $(panelBtn).classList.toggle("is-active");
    }

    if (e.target.matches(menuLinks)) {
      $(panel).classList.remove("is-active");
      $(panelBtn).classList.remove("is-active");
    }
  });
}
