export const keyboardShortcuts = () => {
  /* Existe keyip, keydown y keypress */
  document.addEventListener("keydown", e => {
    if (e.key == 'a' && e.altKey) {
      alert("Haz invocado un alert")
    }
    if (e.key == 'p' && e.altKey) {
      prompt("Haz invocado un prompt");
    }
    if (e.key == 'c' && e.altKey) {
      confirm("Haz invocado un confirm");
    }
  })
}