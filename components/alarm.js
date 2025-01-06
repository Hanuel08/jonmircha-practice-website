import { $ } from "../utils/querySelector.js";

export const alarm = ({ sound, startBtn, stopBtn, frequency }) => {
  let alarmSoundInterval;

  document.addEventListener('click', e => {
    if (e.target.matches(startBtn)) {
      alarmSoundInterval = setInterval(() => {
        $(sound).play();
      }, 1000);

      $(startBtn).setAttribute('disabled', true);
      $(stopBtn).removeAttribute('disabled');
    } else if (e.target.matches(stopBtn)) {
      clearInterval(alarmSoundInterval);
      $(stopBtn).setAttribute("disabled", true);
      $(startBtn).removeAttribute("disabled");
    }
  })
}