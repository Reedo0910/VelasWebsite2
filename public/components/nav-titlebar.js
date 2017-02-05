var navTitle = {
    template: '\
    <nav id="nav">\
      <div id="logo">\
      <a href="index.html">Velas</a>\
      </div>\
      <ul id="navTitle">\
      <li><a href="index.html">Home</a></li>\
      <li><a href="peace.html">Peace</a></li>\
      <li><a href="log.html">Log</a></li>\
      <li class="nav-talk-button"><a href="http://blog.velas.xyz/">Talk</a></li>\
      </ul>\
      </nav>'
}

function setActive(index) {
    var liList = document.getElementById('navTitle').getElementsByTagName('li');
    if (index < liList.length - 1) {
        liList[index].className = 'active';
    }
}

function scrollOnTop() {
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    var navBar = document.getElementById('nav');
    if (top <= 50) {
        navBar.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        navBar.style.boxShadow = 'none';
        navBar.style.paddingTop = '20px';
    } else {
        navBar.style.backgroundColor = 'rgba(92, 107, 192, 0.59)';
        navBar.style.boxShadow = '#444 0 0 10px';
        navBar.style.paddingTop = '10px';
    }
}