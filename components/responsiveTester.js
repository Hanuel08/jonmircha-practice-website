import { $ } from "../utils/querySelector.js";

export const responsiveTester = ({ form, btnCancel }) => {
  const $form = $(form);
  const $cancelBtn = document.getElementById(btnCancel);

  document.addEventListener("submit", (e) => {
    if (e.target === $form) {
      e.preventDefault();
      
      let website = $form.website.value.toString();
      let width = parseInt($form.width.value);
      let height = parseInt($form.height.value);
  
      window.open(
        website,
        "tester",
        `innerWidth=${width}, innerHeight=${height}, resizable, scrollbars=yes`
      );
    }

    if (e.target === $cancelBtn) {
      $form.website.value = '';
      $form.width.value = ''; 
      $form.height.value = '';

      tester.close();
    }
  });
}