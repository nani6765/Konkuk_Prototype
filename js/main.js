let bg = document.getElementById("background");
navigator.mediaDevices.getUserMedia({ video: {
    width: { min: 1024, ideal: 1920, max: 1920 },
    height: { min: 576, ideal: 1080, max: 1080 }
  }, audio: false })
.then(function(stream) {
    bg.srcObject = stream;
    bg.play();
})