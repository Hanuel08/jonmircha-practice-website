import { menu } from "../components/menu.js";
import { clock } from "../components/clock.js";
import { alarm } from "../components/alarm.js";
import { keyboardShortcuts } from "../components/keyboardShortcuts.js"

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

  keyboardShortcuts({ 
    player: ".content__main__section__game__player",  
    velocity: {
      x: 10,
      y: 10,
    },
    position: {
      top: 0,
      bottom: 0,
      right: 0,
      left: 0
    }

  });
  
});
