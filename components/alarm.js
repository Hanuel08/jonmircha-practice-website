import { $ } from "../utils/querySelector.js";

export const alarm = ({ sound, startBtn, stopBtn, frequency }) => {
  let alarmSoundInterval;
  let alarmSound = document.createElement('audio');
  alarmSound.setAttribute('src', sound);

  document.addEventListener('click', e => {
    if (e.target.matches(startBtn)) {
      alarmSoundInterval = setInterval(() => {
        alarmSound.play();
      }, 1000);

      $(startBtn).setAttribute('disabled', true);
      $(stopBtn).removeAttribute('disabled');
    } else if (e.target.matches(stopBtn)) {
      clearInterval(alarmSoundInterval);
      alarmSound.pause();
      alarmSound.currentTime = 0;
      $(stopBtn).setAttribute("disabled", true);
      $(startBtn).removeAttribute("disabled");
    }
  })
}