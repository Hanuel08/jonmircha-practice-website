import { $, $$ } from "../utils/querySelector.js";
import { d } from "../const/const.js";

export const formValidations = ({ form, loading, response }) => {
  const $form = $(form),
    $inputs = $$(`${form} [required]`);

  $inputs.forEach($input => {
    const $span = d.createElement('span');
    $span.id = $input.name;
    $span.textContent = $input.title;
    $span.classList.add('contact-form-error', 'none');
    $input.insertAdjacentElement('afterend', $span);
  })

  d.addEventListener('keyup', e=> {
    if (e.target.matches(`${form} [required]`)) {
      const $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern;
      
      if (pattern && $input.value !== "") {
        const regex = new RegExp(pattern);
        if (!regex.exec($input.value)) {
          d.getElementById($input.name).classList.add("is-active");
          d.getElementById($input.name).classList.remove("none");
          return;
        }
        d.getElementById($input.name).classList.add('none');
        d.getElementById($input.name).classList.remove('is-active');
      }

      if (!pattern) {
        if ($input.value === "") {
          d.getElementById($input.name).classList.add("is-active");
          d.getElementById($input.name).classList.remove("none");
          return;
        }
        d.getElementById($input.name).classList.add("none");
        d.getElementById($input.name).classList.remove("is-active");
      }
    }
  })

  d.addEventListener('submit', e => {
    //e.preventDefault();

    const $loading = $(loading),
      $response = $(response);
    
    $loading.classList.remove("none");

    setTimeout(() => {
      $loading.classList.add("none");
      $response.classList.remove("none");

      setTimeout(()=> $response.classList.add("none"), 3000)
    }, 3000)
    
  })

}