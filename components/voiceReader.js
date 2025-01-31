import { $, $$ } from '../utils/querySelector.js';
import { d } from "../const/const.js";





export const voiceReader = ({ input, select, btn }) => {
  const $input = $(input),
    $select = $(select);

  const createOptions = () => {
    const $fragment = d.createDocumentFragment();
    const voices = speechSynthesis.getVoices();

    voices.forEach((voice) => {
      const $option = d.createElement("option");
      $option.value = voice.name;
      $option.textContent = `${voice.name} - ${voice.lang}`;
      $fragment.appendChild($option);
    });

    $select.appendChild($fragment);
  };
  
  speechSynthesis.addEventListener("voiceschanged", e => {
    createOptions();

    d.addEventListener("click", (e) => {
      if (e.target.matches(btn)) {
        if ($input.value.length < 1) return;

        const message = new SpeechSynthesisUtterance($input.value);
        const $selected = $select.options[$select.selectedIndex];

        if (!$selected) return;

        const voice = speechSynthesis
          .getVoices()
          .find((object) => object.name === $selected.value);
        message.voice = voice;
        speechSynthesis.speak(message);
      }
    });
  })
}