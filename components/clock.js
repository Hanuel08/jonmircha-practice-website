import { $ } from "../utils/querySelector.js";
import { zeroToTheLeft } from "../utils/zeroToTheLeft.js"

export const clock = ({ hour, minute, second, startClockBtn, stopClockBtn }) => {
  const $hour = $(hour);
  const $minute = $(minute);
  const $second = $(second);
  const $startClockBtn = $(startClockBtn);
  const $stopClockBtn = $(stopClockBtn);

  let currentTimeInterval;

  document.addEventListener('click', e => {
    if (e.target.matches(startClockBtn)) {
      currentTimeInterval = setInterval(() => {
        let currentTime = new Date();
        $hour.textContent = zeroToTheLeft(currentTime.getHours());
        $minute.textContent = zeroToTheLeft(currentTime.getMinutes());
        $second.textContent = zeroToTheLeft(currentTime.getSeconds());
      }, 1000)

      $startClockBtn.setAttribute('disabled', true);
      $stopClockBtn.removeAttribute('disabled');
    } else if (e.target.matches(stopClockBtn)) {
      clearInterval(currentTimeInterval);
    
      $stopClockBtn.setAttribute('disabled', true)
      $startClockBtn.removeAttribute('disabled');
    }
  })
}


