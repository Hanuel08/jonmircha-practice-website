
import { $ } from "../utils/querySelector.js";

export const findFilter = ({ input, content, text }) => {
  const $input = $(input);

  $input.addEventListener("input", e => {
    const $content = $(content);
    const $cards = Array.from($content.children);

    $cards.forEach($card => {
      let $text = $card.querySelector(text);
      let find = $input.value.toLocaleLowerCase();

      if ($text.textContent.toLocaleLowerCase().includes(find)) $card.style.display = "flex";
      else $card.style.display = "none";
    })
  })
}