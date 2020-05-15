console.log('melancia')

const recording = document.createElement('video');
recording.setAttribute('playsinline', '');
recording.setAttribute('autoplay', '');
recording.setAttribute('muted', '');
recording.style.width = '100%';
recording.style.height = '100%';


var facingMode = "user"; // Can be 'user' or 'environment' to access back or front camera (NEAT!)
var constraints = {
  // audio: false,
  // video: facingMode,
  video: {
    width: { min: 640, ideal: 1920 },
    height: { min: 400, ideal: 1080 },
    aspectRatio: { ideal: 1.7777777778 }
  },
  // deviceId : 'eb21168c52b6aa027637a99620dcf2ba9e93c73213faf8dc316ccfa959f15448'
};



// /* Stream it to video element */
navigator.mediaDevices.getUserMedia(constraints).then(function success(stream) {
  console.log(stream)
  recording.srcObject = stream;
});



//
camera.append(recording)
