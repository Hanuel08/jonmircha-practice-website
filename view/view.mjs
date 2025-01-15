import { menu } from "../components/menu.js";
import { clock } from "../components/clock.js";
import { alarm } from "../components/alarm.js";
import { shortcuts } from "../components/shortcuts.js";
import { game } from "../components/game.js";
import { countdown } from "../components/countdown.js";
import { scrollBtn } from "../components/scrollBtn.js";
import { themeBtn } from "../components/themeBtn.js";


document.addEventListener("DOMContentLoaded", () => { 
  menu({
    menu: ".menu",
    menuBtn: ".menu-btn",
    menuLinks: ".menu__list__li *"});
  
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
    frequency: 1000,
  });

  shortcuts();

  game({
    stage: ".content__main__section__stage",
    ball: ".content__main__section__stage__ball",
    velocity: 10,
  });

  countdown({ 
    output: ".content__main__section__countdown__time",
    targetDate: "Jan 10, 2025 23:25:00",
    message: "Felicidades primo!",
  });

  scrollBtn({
    btn: ".scroll-btn",
  });

  themeBtn({
    btn: ".theme-btn",
  });
  
});
