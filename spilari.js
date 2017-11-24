//búa til section og div fyrir videospilara

const main = document.querySelector('main');
const container = document.createElement('section');
container.className = "container";
main.appendChild(container);

const header = document.createElement('h2');
header.className = "heading__video";
container.appendChild(header);

const videobox = document.createElement('div');
videobox.className = "container__videobox";
container.appendChild(videobox);

const box = document.createElement('div');
box.className = "container__box";
container.appendChild(box);

const controls = document.createElement('div');
controls.className = "container__controls";
box.appendChild(controls);

//búa til div fyrir vidjó

const div = document.createElement('div');
div.className = "container__overlay";
const videocontainer = document.querySelector('.container__videobox');
  videocontainer.appendChild(div);
  const overlay = document.querySelector('.container__overlay');

const video = document.createElement('video');
video.className = "container__video";
const videoplayer = document.querySelector('.container__video');
videocontainer.appendChild(video);
video.controls = false;

//div fyrir takka
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
a.className = "container__linkur";
a.href = 'index.html';
a.innerHTML = 'Linkur til baka';
container.appendChild(a);


var idstring = window.location.href;
var passId = idstring[idstring.length-1];

//sækir upplýsingar json í localStorage
var user = JSON.parse(localStorage.getItem('user'));


video.setAttribute('src', user.videos[passId-1].video);
var heading = document.querySelector('.heading__video');
heading.textContent = user.videos[passId-1].title;





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
    overlay.className = "container__hidden";
    playpause.className = "container__pause";}

  else {
    video.pause();
    console.log("pause");
    playpause.className = "container__play";
    overlay.className = "container__overlay";
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

    video.addEventListener('click', function(e) {
     if (video.paused || video.ended) {
       video.play();
       console.log("play");
       playpause.className = "container__pause";
       overlay.className = "container__hidden";}

     else {
       video.pause();
       console.log("pause");
       playpause.className = "container__play";
       overlay.className = "container__overlay";
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
