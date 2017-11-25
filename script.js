class Videos {
  constructor() {
    this.error = document.querySelector('.error');
    this.main = document.querySelector('main');
    this.videolist = document.querySelector('.videolist');
  }
  // Loadar upplýsingum úr videos.json  - ajax
  load() {
    const xmlhttp = new XMLHttpRequest();
    const self = this;

    xmlhttp.onreadystatechange = function request() {
      if (this.readyState === 4 && this.status === 200) {
        const myObj = JSON.parse(this.responseText);
        localStorage.setItem('user', JSON.stringify(myObj));
        self.showData(myObj);
      } else if (this.readyState === 4 && this.status !== 200) {
        self.showError();
      }
    };
    xmlhttp.open('GET', 'videos.json', true);
    xmlhttp.send();
  }

  showError() {
    this.error.textContent = 'Gat ekki hlaðið gögnum';
  }

  showData(myObj) {
    const catNum = myObj.categories.length;
    for (let i = 0; i < catNum; i += 1) {
      const cat = myObj.categories[i].title;
      const fjoldi = myObj.categories[i].videos.length;
      const idArr = myObj.categories[i].videos;
      this.createElement(cat, fjoldi, myObj, idArr);
    }
    this.openVideo();
  }

  // býr til categoríur og raðar réttum víjóum inn
  createElement(cat, fjoldi, myObj, idArr) {
    const container = document.createElement('div');
    const header = document.createElement('h2');
    header.className = 'heading__two';
    header.textContent = cat;
    this.videolist.appendChild(header);
    container.className = 'videolist__container';
    this.videolist.appendChild(container);
    for (let i = 0; i < fjoldi; i += 1) {
      const stak = idArr[i] - 1; // raðar vídjóum eftir ID inn í categories
      const videoNum = document.createElement('div');
      videoNum.className = 'videolist__video';
      videoNum.setAttribute('id', stak + 1); // setur id Á hvert video div.
      const poster = document.createElement('figure');
      poster.className = 'videolist__fig';
      const time = document.createElement('div');
      const titill = document.createElement('h3');
      time.className = 'videolist__time';
      time.textContent = this.msToTime(myObj.videos[stak].duration * 1000);
      poster.appendChild(time);
      titill.className = 'heading__three';
      titill.textContent = myObj.videos[stak].title;
      const dags = document.createElement('span');
      const img = document.createElement('img');
      dags.className = 'videolist__created';
      dags.textContent = this.parseTime(myObj.videos[stak].created);
      img.className = 'videolist__img';
      img.setAttribute('src', myObj.videos[stak].poster);
      poster.appendChild(img);
      videoNum.appendChild(poster);
      videoNum.appendChild(titill);
      videoNum.appendChild(dags);
      container.appendChild(videoNum);
    }
  }
  // Setur Event Listner á öll vídjó
  openVideo() {
    const a = document.getElementsByClassName('videolist__video');
    for (let i = 0; i < a.length; i += 1) {
      a[i].addEventListener('click', function selectV() {
        window.location.href = `video.html?id= ${this.id}`;
      });
    }
  }
  // Time Overlay(ms)
  msToTime(lengd) {
    const min = Math.floor(lengd / 60000);
    const sek = ((lengd % 60000) / 1000).toFixed(0);
    const a = ':00';
    const b = ':';
    const c = '0';
    const d = '';
    return (sek === 60 ? (min + 1) + a : min + b + (sek < 10 ? c : d) + sek);
  }
  // Created fyrir síðan
  parseTime(created) {
    const now = new Date();
    const tdelta = Date.parse(now) - created;
    // const secs = Math.floor((tdelta % (1000 * 60)) / 1000);
    // const mins = Math.floor((tdelta % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor((tdelta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const days = Math.floor(tdelta / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    let timetext;
    if (years > 0) {
      timetext = `Fyrir  ${years}  ári/árum síðan`;
    } else if (months > 0) {
      timetext = `Fyrir  ${months}  mánuði/mánuðum síðan`;
    } else if (weeks > 0) {
      timetext = `Fyrir  ${weeks}  viku/vikum síðan`;
    } else if (days > 0) {
      timetext = `Fyrir  ${days}  degi/dögum síðan`;
    } else if (hours > 0) {
      timetext = `Fyrir  ${hours}  klukkstund/klukkustundum síðan}`;
    } else {
      timetext = 'Fyrir minna en klukkustund síðan';
    }
    return timetext;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const videos = new Videos();
  videos.load();
});
