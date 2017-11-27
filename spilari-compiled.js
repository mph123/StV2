'use strict';

var container = document.querySelector('.container');
var videocontainer = document.querySelector('.container__videobox');
var overlaybox = document.querySelector('.container__overlaybox');
var overlay = document.createElement('div');
var errorvid = document.querySelector('.container__errorvid');
overlay.className = 'container__overlay';
overlaybox.appendChild(overlay);
var video = document.createElement('video');
video.className = 'container__video';
videocontainer.appendChild(video);
video.controls = false;
var videocontrols = document.querySelector('.container__controls');
var rew = document.createElement('button');
rew.className = 'container__rew';
videocontrols.appendChild(rew);
var playpause = document.createElement('button');
playpause.className = 'container__play';
videocontrols.appendChild(playpause);
var mute = document.createElement('button');
mute.className = 'container__mute';
videocontrols.appendChild(mute);
var fs = document.createElement('button');
fs.className = 'container__fullscreen';
videocontrols.appendChild(fs);
var forward = document.createElement('button');
forward.className = 'container__forward';
videocontrols.appendChild(forward);
var a = document.createElement('a');
a.className = 'container__linkur';
a.href = 'index.html';
a.textContent = 'Til baka';
container.appendChild(a);
var idstring = window.location.href;
var passId = idstring.split('=').pop();
var user = JSON.parse(localStorage.getItem('user'));
var concontrol = document.querySelector('.container__controls');
// - athuga með id streng
if (passId <= user.videos.length) {
  video.setAttribute('src', user.videos[passId - 1].video);
  var heading = document.querySelector('.heading__video');
  heading.textContent = user.videos[passId - 1].title;
} else {
  errorvid.textContent = 'Vídjóið er ekki til';
  overlay.className = 'container__hidden';
  overlaybox.className = 'container__hidden';
  concontrol.className = 'container__hidden';
}

function setTime(tValue) {
  try {
    if (tValue === 0) {
      video.currentTime = tValue;
    } else {
      video.currentTime += tValue;
    }
  } catch (err) {
    errorvid.textContent = 'Virkni biluð, afsakið';
  }
}

playpause.addEventListener('click', function () {
  if (video.paused || video.ended) {
    video.play();
    overlay.className = 'container__hidden';
    overlaybox.className = 'container__hidden';
    playpause.className = 'container__pause';
  } else {
    video.pause();
    playpause.className = 'container__play';
    overlaybox.className = 'container__overlaybox';
    overlay.className = 'container__overlay';
  }
});

mute.addEventListener('click', function () {
  if (video.muted) {
    video.muted = false;
    mute.className = 'container__mute';
  } else {
    video.muted = true;
    mute.className = 'container__unmute';
  }
}, false);

video.addEventListener('click', function () {
  if (video.paused || video.ended) {
    video.play();
    playpause.className = 'container__pause';
    overlay.className = 'container__hidden';
    overlaybox.className = 'container__hidden';
  } else {
    video.pause();
    playpause.className = 'container__play';
    overlay.className = 'container__overlay';
    overlaybox.className = 'container__overlaybox';
  }
}, false);

rew.addEventListener('click', function () {
  setTime(-3);
}, false);

forward.addEventListener('click', function () {
  setTime(3);
}, false);

fs.addEventListener('click', function () {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  }
});

//# sourceMappingURL=spilari-compiled.js.map