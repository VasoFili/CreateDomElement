  'use strict';

  function DomElement(selector, height, width, bg, fontSize) {
     this.selector = selector;
     this.height = height;
     this.width = width;
     this.bg = bg;
     this.fontSize = fontSize;
  }

  DomElement.prototype.createElement = function () {
     let selectorMarker = this.selector.charAt(0);
     let selectorText = this.selector.substring(1);
     if (selectorMarker === '.') {
        const li = document.createElement('li');
        li.classList.add(selectorText);
        li.innerHTML = '<span>' + 'This is class' + '</span>'
        li.style.height = this.height;
        li.style.width = this.width;
        li.style.backgroundColor = this.bg;
        li.style.fontSize = this.fontSize;
        document.body.append(li)
     } else if (selectorMarker === '#') {
        const li = document.createElement('li');
        li.id = selectorText;
        li.innerHTML = '<span>' + 'This is id' + '</span>'
        li.style.height = this.height;
        li.style.width = this.width;
        li.style.backgroundColor = this.bg;
        li.style.fontSize = this.fontSize;
        document.body.append(li)
     } else {
        alert('Ну ты и шляпа))')
     }
  }

  let myDomElement = new DomElement('#block', '100px', '1000px', 'green', '32px');

  myDomElement.createElement();