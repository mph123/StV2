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
      let idArr = myObj.categories[i].videos;
      console.log(idArr);
      console.log('fjoldi '+fjoldi);
      this.createElement(cat, fjoldi, myObj, idArr);

    }
  }




  createElement(cat, fjoldi, myObj, idArr) {

    const container = document.createElement('div');
    const header = document.createElement('h2');

    header.className = "videolist__header";
    header.textContent = cat;

    this.videolist.appendChild(header);

    container.className = "videolist__container";
    this.videolist.appendChild(container);


    for (let i = 0; i < fjoldi; i += 1) {

      const stak = idArr[i]-1; //raðar vídjóum eftir ID inn í categories
      console.log('stak: '+stak);

      const videoNum = document.createElement('div');
      videoNum.className = "videolist__video";
      videoNum.setAttribute('id', stak+1); //setur id Á hvert video div.

      const poster = document.createElement('figure');
      const titill = document.createElement('h3');
      titill.className = "heading__three";
      titill.textContent = myObj.videos[stak].title;

      const dags = document.createElement('span');
      const img = document.createElement('img');
      img.setAttribute('src', myObj.videos[stak].poster);

      poster.appendChild(img);

      videoNum.appendChild(poster);
      videoNum.appendChild(titill);
      videoNum.appendChild(dags);

      console.log('daddara');

      container.appendChild(videoNum);
    }

  }

  openVideo(){
    
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
