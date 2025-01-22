import { $ } from "../utils/querySelector.js";

export const responsiveSlider = ({ sliderContainer, btnLeft, btnRight }) => {
  let index = 0;
  let $sliderContainer = $(sliderContainer);
  let imgNumber = $sliderContainer.children.length;
  
  document.addEventListener('click', e => {
    if (e.target.matches(btnLeft) || e.target.matches(`${btnLeft} *`)) index--;
    else if (e.target.matches(btnRight) || e.target.matches(`${btnRight} *`)) index++;
    
    if (index < 0) index = imgNumber - 1;
    else if (index > imgNumber - 1) index = 0;
    
    $sliderContainer.style.transform = `translateX(-${index * 100}%)`;
  })
}
