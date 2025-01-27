import { $ } from "../utils/querySelector.js";
import { $$ } from "../utils/querySelector.js";

export const scrollSpy = ({ menuLink, section }) => {
  const $sections = $$(section);
  
  const callback = (entries) => {
    entries.forEach(entry => {
      const sectionId = entry.target.getAttribute('id');
      const menuLinkSelector = `${menuLink}[href="#${sectionId}"]`;
  
      entry.isIntersecting
        ? $(menuLinkSelector).classList.add("active")
        : $(menuLinkSelector).classList.remove("active");
    })
  }

  const observer = new IntersectionObserver(callback, {
    /* 
      //El root define donde quieres que se observan los elementos. Si no le das nada usa el document
      root: $element,

      //El rootMargin define el margen de la observación. Si no le das nada usa el valor por defecto 0. El -250px dice que no haga match hasta que toque los -250 px de la sección, es decir en vez de afuera, para dentro
      rootMargin: "-250px",

      Esto es mejor que el rooMargin. Se le puede pasar un array y en este caso dice que no haga match hasta que el 50% del elemento sea visible
      threshold: 0.5,
    */
    //Desde, hasta
    threshold: [0.5, 0.75],
  });

  $sections.forEach($section => observer.observe($section));
}