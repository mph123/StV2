class Videos {
  constructor() {
    this.error = document.querySelector('.error');
    this.main = document.querySelector('main');
    this.new = document.querySelector('.new');
    this.edu = document.querySelector('.edu');
    this.ent = document.querySelector('.ent');
    console.log(this.main);
  }

  load(){
    console.log('eru til bíómyndir?');
    //var myData = JSON.parse(videos);



    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'videos.json', true);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {

      // .open will NOT return a value but simply returns undefined in async mode so use a callback

      callback(xobj.responseText);

      }
    }
    xobj.send(null);


    // Call to function with anonymous callback
    loadJSON(function(response) {
    // Do Something with the response e.g.
    var jsonresponse;
    jsonresponse = JSON.parse(response);

    // Assuming json data is wrapped in square brackets as Drew suggests
    console.log(jsonresponse[1].title);

    }


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
    document.querySelector('#title0').textContent = 'Dagar';
    document.querySelector('#title1').textContent = 'Klukkustundir';
    document.querySelector('#title2').textContent = 'Mínútur';
    document.querySelector('#title3').textContent = 'Sekúntur';
  }

  delete() {
    }
  }



document.addEventListener('DOMContentLoaded', () => {
  const videos = new Videos();
  videos.load();
});
