import { menu } from "../components/menu.js";
import { clock } from "../components/clock.js";
import { alarm } from "../components/alarm.js";
import { shortcuts } from "../components/shortcuts.js";
import { game } from "../components/game.js";
import { countdown } from "../components/countdown.js";
import { scrollBtn } from "../components/scrollBtn.js";
import { themeBtn } from "../components/themeBtn.js";
import { setTheme } from "../utils/setTheme.js";
import { responsiveMedia } from "../components/responsiveMedia.js";
import { responsiveTester } from "../components/responsiveTester.js";
import { deviceDetection } from "../components/deviceDetection.js";
import { internetDetection } from "../components/internetDetection.js";
import { webcamDetector } from "../components/webcamDetector.js";
import { geolocationDetector } from "../components/geolocationDetector.js";


document.addEventListener("DOMContentLoaded", async () => { 
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
  
  setTheme({
    btn: ".theme-btn",
  });

  responsiveMedia({
    id: "youtube",
    mq: "(min-width: 1024px)",
    mobileContent: `<a href="https://www.youtube.com/embed/6IwUl-4pAzc?si=SQJVIon0qujemDZT" target="_blank" rel="noopener">Ver video</a>`,
    desktopContent: `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc?si=SQJVIon0qujemDZT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  });

  responsiveMedia({
    id: "gmaps",
    mq: "(min-width: 1024px)",
    mobileContent: `<a href="https://maps.app.goo.gl/KBP39DyDtSeKKnhC6" target="_blank" rel="noopener">Ver mapa</a>`,
    desktopContent: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7248282.074800875!2d-89.10144152166932!3d27.494147624773408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c1766591562abf%3A0xf72e13d35bc74ed0!2sFlorida%2C%20EE.%20UU.!5e0!3m2!1ses!2sdo!4v1736984201923!5m2!1ses!2sdo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
  });

  responsiveTester({
    form: ".content__main__section__form",
    btnCancel: "cancel",
  })

  deviceDetection({
    content: ".content__main__section__device-detection",
  });

  internetDetection({
    internet: ".internet",
    notInternet: ".not-internet",
  });

  webcamDetector({
    video: ".content__main__section__media__video",
    canvas: ".content__main__section__media__canvas",
    photo: ".content__main__section__media__photo",
    startBtn: ".content__main__section__photo-btn",
  })

  geolocationDetector({
    content: ".content__main__section__geolocation",
  })
  
});
