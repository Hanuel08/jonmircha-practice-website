import { $ } from "./querySelector.js";
import { themeBtn } from "../components/themeBtn.js";

export const setTheme = ({ btn }) => {
  const theme = localStorage.getItem("theme");
  if (theme == "dark" && !document.body.classList.contains("dark")) {
    //document.body.classList.add("dark");
    $(btn).click();
  } 
}