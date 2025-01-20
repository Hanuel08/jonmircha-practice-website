import { $ } from "../utils/querySelector.js";
import { $$ } from "../utils/querySelector.js";

export const digitalLottery = ({ raffleItems, btnRaffle }) => {
  const raffleItemsList = Array.from($$(raffleItems));
  const raffleItemsListText = raffleItemsList.map(item => item.textContent);
  
  document.addEventListener("click", e => { 
    if (e.target.matches(btnRaffle)) {
      const randomIndex = Math.floor(Math.random() * (raffleItemsListText.length));
      alert(`El ganador es ${raffleItemsListText[randomIndex]}`);
    }
  })
}
