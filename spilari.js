var videoContainer = document.getElementById('video-Container');
var video = document.getElementById('video');
var videoControls = document.getElementById('video-controls');

// Hide the default controls
video.controls = false;

// Display the user defined video controls
videoControls.style.display = 'block';


var back = document.getElementById('back');
var playpause = document.getElementById('playpause');
var mute = document.getElementById('mute');
var volinc = document.getElementById('volinc');
var voldec = document.getElementById('voldec');
var fullscreen = document.getElementById('fs');
var forward = document.getElementById('forward');


function setTime(tValue) {
  try {
    if (tValue == 0) {
      video.currentTime = tValue;
      }
      else {
      video.currentTime += tValue;
      }
       } catch (err) {
       errMessage("Video content might not be loaded");
       }
       }

 playpause.addEventListener('click', function(e) {
  if (video.paused || video.ended) video.play();
  else video.pause();
 });

rew.addEventListener('click', function() {
  setTime(-1);
}, false);

forward.addEventListener('click', function() {
  setTime(1);
}, false);
