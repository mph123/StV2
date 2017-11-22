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
var unmute = document.getElementById('unmute');
var fs = document.getElementById('fs');
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
  if (video.paused || video.ended) {
    video.play();
    console.log("play");
    playpause.className = "container__pause";}
  else {
    video.pause();
    console.log("pause");
    playpause.className = "container__play";

  }
 });



 mute.addEventListener("click", function () {
    if (video.muted) {
      video.muted = false;
      console.log("unmute");
      mute.className = "container__mute";

    } else {
      console.log("mute");
      video.muted = true;
      mute.className = "container__unmute";
    }
}, false);



rew.addEventListener('click', function() {
  setTime(-3);
}, false);

forward.addEventListener('click', function() {
  setTime(3);
}, false);

fs.addEventListener('click', function(){
  if(video.requestFullscreen){
    video.requestFullscreen();}
      else if(video.mozRequestFullScreen){
        video.mozRequestFullScreen();
      } else if(video.webkitRequestFullscreen){
        video.webkitRequestFullscreen();
      }
    });
