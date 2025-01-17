import { $ } from "../utils/querySelector.js";

export const deviceDetection = ({ content }) => {
  const ua = navigator.userAgent;

  
  /* const device = ua.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i); */

  const isMobile = {
    android: () => ua.match(/android/i),
    ios: () => ua.match(/iPhone|iPad|iPod/i),
    windows: () => ua.match(/windows phone/i),
    any: function () {
      return this.android() || this.ios() || this.windows();
    }
  }

  const isDesktop = {
    linux: () => ua.match(/linux/i),
    mac: () => ua.match(/mac os/i),
    windows: () => ua.match(/windows nt/i),
    any: function () {
      return this.linux() || this.mac() || this.windows();
    }
  }

  const isBrowser = {
    chrome: () => ua.match(/chrome/i),
    firefox: () => ua.match(/firefox/i),
    safari: () => ua.match(/safari/i),
    opera: () => ua.match(/opera/i),
    msie: () => ua.match(/msie|iemobile/i),
    edge: () => ua.match(/edge/i),
    any: function () {
      return this.chrome() || this.firefox() || this.safari() || this.opera() || this.msie() || this.edge();
    }
  }

  $(content).innerHTML = //HTML
  `
  <ul>
    <li>User Agent: <b>${ua}</b></li>
    <li>Plataforma <b>${isMobile.any() || isDesktop.any()}</b></li>
    <li>Navegador <b>${isBrowser.any()}</b></li>
  </ul>
  `

  //Esto es para mostrar contenido exclusivo
  if (isMobile.android()) $(content).innerHTML += "Esto solo se le muestra a android";
  if (isDesktop.windows()) $(content).innerHTML += "Esto solo se le muestra a windows";

  //Esto es para redireccionar a otra pag los que vengan desde cierto dispositivo
  if (isMobile.ios()) window.location.href = "https://jonmircha.com/cursos";
}