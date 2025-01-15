import { $ } from "../utils/querySelector.js";

export const responsiveMedia = ({ id, mq, mobileContent, desktopContent }) => {
  const breakPoint = window.matchMedia(mq);

  const responsive = (e) => {    
    if (e.matches) {
      document.getElementById(id).innerHTML = desktopContent;
    } else {
      document.getElementById(id).innerHTML = mobileContent;
    }
    //console.log("Media Query", breakPoint, e.matches);
  } 

  breakPoint.addEventListener('change', responsive);
  responsive(breakPoint);
}