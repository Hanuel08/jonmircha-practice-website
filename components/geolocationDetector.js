import { $ } from "../utils/querySelector.js";

export const geolocationDetector = ({ content }) => {
  const $content = $(content);

  if ("geolocation" in navigator) {
    const options = {
      enableHighAccurate: true,
      timeout: 5000,
      maximumAge: 0,
    };

    const success = (position) => {
      const { accuracy, longitude, latitude } = position.coords;

      const mapLink = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}&zoom=20`;
      console.log(position)
      $content.innerHTML = //HTML
        `
      <p>
      Position actual: <br><br>
      Latitude: <strong>${latitude}</strong><br>
      Longitude: <strong>${longitude}</strong><br>
      Accurate: <strong>${Math.ceil(accuracy)} metros</strong>
      </p><br>
      <a href="${mapLink}" target="_blank" rel="noopener">Ver en Google Maps</a>`;
    }

    const error = (err) => {
      console.log(`Geolocation error: ${err}`);
      $content.innerHTML = //HTML
        `<h3>Geolocation error: <strong>${err}</strong></h3><br>`;
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  } else {
    console.log("Geolocation is NOT Available");
  }
}