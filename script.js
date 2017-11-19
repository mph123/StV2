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
    console.log('bu!');
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        console.log(myObj.videos[0].title);
        console.log(myObj.categories[0]);
    }
  };
    xmlhttp.open("GET", "videos.json", true);
    xmlhttp.send();
  }










  save(title, date) {
  //save local
  }


  parseDate(date, time) {
    const endtimetest = `${date.value}T${time.value}:00`;
    const endtime = new Date(endtimetest);
    return endtime;
  }


  hideForm() {
  }

  showForm() {
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
      this.container.appendChild(divs);
    }

  }

  delete() {
    }
  }



document.addEventListener('DOMContentLoaded', () => {
  const videos = new Videos();
  videos.load();
});
