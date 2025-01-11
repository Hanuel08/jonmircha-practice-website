import { $ } from "../utils/querySelector.js";

export const countdown = ({ output, targetDate, message }) => {
  

  let countdownInterval = setInterval(() => {
    let date = new Date(targetDate);
    let currentDate = new Date();
    let timeLeft = Math.abs(date.getTime() - currentDate.getTime());

    let years = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 365));
    timeLeft -= years * (1000 * 60 * 60 * 24 * 365);
    
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    timeLeft -= days * (1000 * 60 * 60 * 24);

    let hours = Math.floor(timeLeft / (1000 * 60 * 60));
    timeLeft -= hours * (1000 * 60 * 60);

    let minutes = Math.floor(timeLeft / (1000 * 60));
    timeLeft -= minutes * (1000 * 60);

    let seconds = Math.floor(timeLeft / (1000));
    timeLeft -= seconds * (1000);

    /* # Otra forma de hacerlo
    let years =  Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 365));
    let days = Math.floor((timeLeft % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / (1000)); */

    $(output).textContent = `${years} years, ${days} days, ${hours.toString().padStart(2, "0")} hours, ${minutes.toString().padStart(2, "0")} minutes, ${seconds.toString().padStart(2, "0")} seconds`;

    if (date.getTime() < currentDate.getTime()) {
      clearInterval(countdownInterval);
      $(output).textContent = message;
    }
    
  }, 1000);



  
};