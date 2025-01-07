import { $ } from "../utils/querySelector.js";

let x = 0,
  y = 0;

export const moveBall = ({ direction, velocity, ball, stage }) => {
  const $stage = $(stage),
    $ball = $(ball);

  /* El getBoundingClientRect obtiene un objeto con el top, left, etc de un elemento de html */
  let ballLimit = $ball.getBoundingClientRect(),
    stageLimit = $stage.getBoundingClientRect();

  if (
    direction == "up" &&
    Math.floor(ballLimit.top) > Math.floor(stageLimit.top)
  ) {
    y--;
  }
  if (
    direction == "down" &&
    Math.floor(ballLimit.bottom) < Math.floor(stageLimit.bottom)
  ) {
    y++;
  }
  if (
    direction == "left" &&
    Math.floor(ballLimit.left) > Math.floor(stageLimit.left)
  ) {
    ballLimit.left > stageLimit.left;
    x--;
  }
  if (
    direction == "right" &&
    Math.floor(ballLimit.right) < Math.floor(stageLimit.right)
  ) {
    x++;
  }
  $ball.style.transform = `translate(${x * velocity}px, ${y * velocity}px)`;
};