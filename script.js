class Videos {
  constructor() {
    this.error = document.querySelector('.error');
    this.main = document.querySelector('main');
    this.new = document.querySelector('.new');
    this.edu = document.querySelector('.edu');
    this.ent = document.querySelector('.ent');
    console.log(this.main);
  }

  load() {
    var xmlhttp = new XMLHttpRequest();
    var self = this;
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        const myObj = JSON.parse(this.responseText);
        const catNum = myObj.categories.length;
        console.log('fjöldi cat '+catNum);
        console.log(myObj.videos[0].title);
        console.log(myObj.categories[0]);
        self.showData(myObj);
    }
  };

    xmlhttp.open("GET", "videos.json", true);
    xmlhttp.send();

  }

  showData(myObj){
    console.log('you');

    this.createElement();
  }

  parseDate(date, time) {
    const endtimetest = `${date.value}T${time.value}:00`;
    const endtime = new Date(endtimetest);
    return endtime;
  }



  createElement() {
    for (let i = 0; i < 4; i += 1) {
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
    }

  }

  delete() {
    }
  }



document.addEventListener('DOMContentLoaded', () => {
  const videos = new Videos();
  videos.load();
});
