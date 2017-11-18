'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Videos = function () {
  function Videos() {
    _classCallCheck(this, Videos);

    this.error = document.querySelector('.error');
    this.main = document.querySelector('main');
    this.new = document.querySelector('.new');
    this.edu = document.querySelector('.edu');
    this.ent = document.querySelector('.ent');
    console.log(this.main);
  }

  _createClass(Videos, [{
    key: 'load',
    value: function load() {
      console.log('load CHECK JSON');
    }
  }, {
    key: 'save',
    value: function save(title, date) {
      //save local
    }
  }, {
    key: 'parseDate',
    value: function parseDate(date, time) {
      var endtimetest = date.value + 'T' + time.value + ':00';
      var endtime = new Date(endtimetest);
      return endtime;
    }
  }, {
    key: 'hideForm',
    value: function hideForm() {}
  }, {
    key: 'showForm',
    value: function showForm() {}
  }, {
    key: 'createElement',
    value: function createElement() {
      for (var i = 0; i < 4; i += 1) {
        var divs = document.createElement('div');
        divs.setAttribute('id', i + 'box');
        divs.className = 'countdown__box';
        var span1 = document.createElement('span');
        span1.setAttribute('id', 'num' + i);
        span1.className = 'countdown__num';
        var span2 = document.createElement('span');
        span2.className = 'countdown__title';
        span2.setAttribute('id', 'title' + i);
        divs.appendChild(span1);
        divs.appendChild(span2);
        this.container.appendChild(divs);
      }
      document.querySelector('#title0').textContent = 'Dagar';
      document.querySelector('#title1').textContent = 'Klukkustundir';
      document.querySelector('#title2').textContent = 'Mínútur';
      document.querySelector('#title3').textContent = 'Sekúntur';
    }
  }, {
    key: 'delete',
    value: function _delete() {}
  }]);

  return Videos;
}();

document.addEventListener('DOMContentLoaded', function () {
  var videos = new Videos();
  videos.load();
});

//# sourceMappingURL=script-compiled.js.map