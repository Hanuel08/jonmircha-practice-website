import { $ } from "../utils/querySelector.js";

export const webcamDetector = async ({ video, canvas, startBtn, photo }) => {
  const $video = $(video),
    $canvas = $(canvas),
    $startBtn = $(startBtn),
    $photo = $(photo);

  let width = 420,
    height = 0,
    streaming = false;
  

  if ("mediaDevices" in navigator && "getUserMedia" in navigator.mediaDevices) {
    try {
      let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });

      $video.srcObject = stream;
      $video.play();

      $video.addEventListener('canplay', e => {
        if (!streaming) {
          height = $video.videoHeight / ($video.videoWidth / width);

          $video.setAttribute("width", width);
          $video.setAttribute("height", height);

          $canvas.setAttribute("width", width);
          $canvas.setAttribute("height", height);
          streaming = true;
        }

        $startBtn.addEventListener('click', e => {
          e.preventDefault();
          $canvas.width = width;
          $canvas.height = height;

          $canvas.getContext('2d').drawImage($video, 0, 0, width, height);
          let imageSrc = $canvas.toDataURL('image/png');
          $photo.setAttribute("src", imageSrc);
          $photo.style.display = "inline-block";
        })

      })


    } catch (err) { console.error(err) }

    
  }




}