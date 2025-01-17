import { $ } from "../utils/querySelector.js";

const displayTemporally = ({ $html, display, time, }) => {
  $html.style.display = display;

  let displayNoneTimeOut = setTimeout(() => {
    $html.style.display = "none";
    clearTimeout(displayNoneTimeOut);
  }, time);
}

export const internetDetection = ({ internet, notInternet }) => {
  window.addEventListener("offline", () => {
    console.log('Estamos offline');
    displayTemporally({
      $html: $(notInternet),
      display: "flex", 
      time: 3000,
    })

    window.addEventListener("online", () => {
      console.log('Estamos online');
      displayTemporally({
        $html: $(internet),
        display: "flex",
        time: 3000,
      });
    });
  })
}