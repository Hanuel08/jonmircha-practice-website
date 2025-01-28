import { $ } from "../utils/querySelector.js";
import { $$ } from "../utils/querySelector.js";

export const intelligentVideo = ({ videos }) => {
  //Solucion de jonmircha
  const $videos = $$(videos);
  console.log($videos);

  const handler = (entries) => {
    entries.forEach(entry => {
      let intersecting = false;

      if (entry.isIntersecting) {
        entry.target.play();
        intersecting = true;
      } else {
        entry.target.pause();
        intersecting = false;
      }

      document.addEventListener("visibilitychange", e => {
        document.visibilityState === 'visible' && intersecting ?
          entry.target.play() :
          entry.target.pause();
      })
    })
  }

  const observer = new IntersectionObserver(handler, { threshold: 0.5 });
  $videos.forEach($video => observer.observe($video));

  /* 
  //Mi solucion
  const $video = $(video);
  const videoState = {
    pause: $video.paused,
    intersecting: false,
  }

  const playVideo = (e) => {
    if (!document.hidden && videoState.pause && videoState.intersecting) $video.play();
    else $video.pause();
  }

  const observerHandler = (entries) => {
    entries.forEach(entry => {
      videoState.intersecting = entry.isIntersecting;
      playVideo();
    })
  }

  const observer = new IntersectionObserver(observerHandler, {
    threshold: [0.75],
  });

  document.addEventListener("visibilitychange", playVideo);
  observer.observe($video); */
}