import { $ } from "../utils/querySelector.js";

export const intelligentVideo = ({ video }) => {
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
  observer.observe($video);
}