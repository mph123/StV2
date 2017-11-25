const container = document.querySelector('.container');
const videocontainer = document.querySelector('.container__videobox');
const overlaybox = document.querySelector('.container__overlaybox');
const overlay = document.createElement('div');
const errorvid = document.querySelector('.errorvid');
overlay.className = 'container__overlay';
overlaybox.appendChild(overlay);
const video = document.createElement('video');
video.className = 'container__video';
videocontainer.appendChild(video);
video.controls = false;
const videocontrols = document.querySelector('.container__controls');
const rew = document.createElement('button');
rew.className = 'container__rew';
videocontrols.appendChild(rew);
const playpause = document.createElement('button');
playpause.className = 'container__play';
videocontrols.appendChild(playpause);
const mute = document.createElement('button');
mute.className = 'container__mute';
videocontrols.appendChild(mute);
const fs = document.createElement('button');
fs.className = 'container__fullscreen';
videocontrols.appendChild(fs);
const forward = document.createElement('button');
forward.className = 'container__forward';
videocontrols.appendChild(forward);
const a = document.createElement('a');
a.className = 'container__linkur';
a.href = 'index.html';
a.innerHTML = 'Til baka';
container.appendChild(a);
const idstring = window.location.href;
const passId = idstring[idstring.length - 1];
const user = JSON.parse(localStorage.getItem('user'));
video.setAttribute('src', user.videos[passId - 1].video);
const heading = document.querySelector('.heading__video');
heading.textContent = user.videos[passId - 1].title;

function setTime(tValue) {
  try {
    if (tValue === 0) {
      video.currentTime = tValue;
    } else {
      video.currentTime += tValue;
    }
  } catch (err) {
    errorvid.textContent = 'Vídjó hleðst ekki';
  }
}

playpause.addEventListener('click', () => {
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

mute.addEventListener('click', () => {
  if (video.muted) {
    video.muted = false;
    mute.className = 'container__mute';
  } else {
    video.muted = true;
    mute.className = 'container__unmute';
  }
}, false);

video.addEventListener('click', () => {
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

rew.addEventListener('click', () => {
  setTime(-3);
}, false);

forward.addEventListener('click', () => {
  setTime(3);
}, false);

fs.addEventListener('click', () => {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  }
});
