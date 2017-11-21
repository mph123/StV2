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
var fullscreen = document.getElementById('fs');
var forward = document.getElementById('forward');

var idstring = window.location.href;
var passId = idstring[idstring.length-1];
var source = document.querySelector('source');

//sækir upplýsingar json í localStorage
var user = JSON.parse(localStorage.getItem('user'));


source.setAttribute('src', user.videos[passId-1].video);


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

 document.getElementById("mute").addEventListener("click", function () {
    if (video.muted) {
      document.getElementById("mute").src="../img/mute.svg";
    } else {
      document.getElementById("mute").src="../img/mute.svg";
    }
}, false);






rew.addEventListener('click', function() {
  setTime(-3);
}, false);

forward.addEventListener('click', function() {
  setTime(3);
}, false);

fs.addEventListener('click', function() {

});

fs.addEventListener('click', function(){
  if(video.requestFullscreen){
    video.requestFullscreen();}
      else if(video.mozRequestFullScreen){
        video.mozRequestFullScreen();
      } else if(video.webkitRequestFullscreen){
        video.webkitRequestFullscreen();
      }
    });
