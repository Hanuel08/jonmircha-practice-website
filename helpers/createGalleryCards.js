import { $ } from "../utils/querySelector.js";
import { getGalleryCards } from "../utils/getGalleryCards.js";

export const createGalleryCards = async ({ template, content }) => {
  try {
    const cards = await getGalleryCards("http://localhost:54243");
    const $template = $(template).content;
    const $fragment = document.createDocumentFragment();
    const select = (element) => $template.querySelector(element);

    cards.forEach((card) => {
      select(".content__main__section__gallery__content__card__img").src = card.img;
      select(".content__main__section__gallery__content__card__text__p").textContent = card.title;
      let $clone = document.importNode($template, true);
      $fragment.appendChild($clone);
    });

    $(content).appendChild($fragment);
  } catch (err) { console.error(err) }
};