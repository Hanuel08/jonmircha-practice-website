import { navMenu } from "../components/navMenu.js";
import { clock } from "../components/clock.js";
import { alarm } from "../components/alarm.js";

document.addEventListener("DOMContentLoaded", () => { 
  navMenu(".menu-btn", ".nav", ".nav__list__li *");
  
  clock({
    hour: ".content__main__section__time__clock__hour",
    minute: ".content__main__section__time__clock__minute",
    second: ".content__main__section__time__clock__second",
    startClockBtn: ".btn-start-clock",
    stopClockBtn: ".btn-stop-clock"
  });


  alarm({
    sound: "../public/assets/audio/huawei-bongo-ringtones.mp3",
    startBtn: ".btn-start-alarm",
    stopBtn: ".btn-stop-alarm",
    frequency: 1000
  });
});
