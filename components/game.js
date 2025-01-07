import { moveBall } from "../helpers/moveBall.js";

export const game = ({ stage, ball, velocity }) => {
  document.addEventListener("keydown", (e) => {
    if (e.key == "ArrowUp") {
      e.preventDefault();
      moveBall({ direction: "up", velocity, ball, stage })
    }
    if (e.key == "ArrowDown") {
      e.preventDefault();
      moveBall({ direction: "down", velocity, ball, stage })
    }
    if (e.key == "ArrowLeft") {
      e.preventDefault();
      moveBall({ direction: "left", velocity, ball, stage });
    }
    if (e.key == "ArrowRight") {
      e.preventDefault();
      moveBall({ direction: "right", velocity, ball, stage });
    }
  });
}