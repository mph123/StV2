class Videos {
  constructor() {
    this.error = document.querySelector('.error');
    this.main = document.querySelector('main');
    this.videolist = document.querySelector('.videolist');

  }

  load() {
    var xmlhttp = new XMLHttpRequest();
    var self = this;
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        const myObj = JSON.parse(this.responseText);

        console.log(myObj.videos[0].title);
        console.log(myObj.categories[0]);
        self.showData(myObj);
    }
  };

    xmlhttp.open("GET", "videos.json", true);
    xmlhttp.send();

  }

  showData(myObj){

    const title1 = myObj.videos[2].title;
    const catNum = myObj.categories.length;
    for (let i = 0; i<catNum; i+=1){
      //let fjoldi =
      let cat = myObj.categories[i].title;
      let fjoldi = myObj.categories[i].videos.length;
      console.log('fjoldi '+fjoldi);
      this.createElement(cat, fjoldi, myObj);
    }
  }




  createElement(cat, fjoldi, myObj) {
    const container = document.createElement('div');
    const header = document.createElement('h2');

    header.className = "videolist__header";
    header.textContent = cat;

    this.videolist.appendChild(header);

    container.className = "videolist__container";
    this.videolist.appendChild(container);


    for (let i = 0; i < fjoldi; i += 1) {
      const videoNum = document.createElement('div');
      videoNum.className = "videolist__video";

      const poster = document.createElement('figure');
      const titill = document.createElement('h3');
      titill.className = "heading__three";
      titill.textContent = myObj.videos[i].title;

      const dags = document.createElement('span');

      const img = document.createElement('img');
      img.setAttribute('src', myObj.videos[i].poster);

      poster.appendChild(img);

      videoNum.appendChild(poster);
      videoNum.appendChild(titill);
      videoNum.appendChild(dags);

      console.log('daddara');

      container.appendChild(videoNum);

    }




      /*
      const divs = document.createElement('div');
      divs.setAttribute('id', `${i}box`);
      divs.className = 'countdown__box';
      const span1 = document.createElement('span');
      span1.setAttribute('id', `num${i}`);
      span1.className = 'countdown__num';
      const span2 = document.createElement('span');
      span2.className = 'countdown__title';
      span2.setAttribute('id', `title${i}`);
      divs.appendChild(span1);
      divs.appendChild(span2);
      this.main.appendChild(divs);
      */

  }

  delete() {
    }

  parseDate(date, time) {
    const endtimetest = `${date.value}T${time.value}:00`;
    const endtime = new Date(endtimetest);
    return endtime;
  }


  }



document.addEventListener('DOMContentLoaded', () => {
  const videos = new Videos();
  videos.load();
});
