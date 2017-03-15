var navTitle = {
    template: '\
    <nav id="nav" onload="itemExpand(1)">\
      <div id="logo">\
      <a href="index.html">Velas</a>\
      </div>\
      <ul id="navTitle">\
      <li id="home_nav"><a href="index.html">Home</a></li>\
      <li id="collection_nav" onclick="itemExpand(0)"><a>Collections <i class="fa fa-angle-down fa-lg"></i></a>\
      </li>\
      <li id="log_nav"><a href="log.html">Log</a></li>\
      <li class="nav-talk-button" id="talk_nav"><a href="http://blog.velas.xyz/">Talk</a></li>\
      </ul>\
      <ul class="sub-navbar" id="subNavbar-Collection">\
        <li><a href="music.html">Music</a></li>\
        <li><a href="tasty.html">Tasty</a></li>\
        <li><a href="movie.html">Movie</a></li>\
      </ul>\
    </nav>'
}

var NT = {
    bgc: 'rgba(255, 255, 255, 0)',
    h: 50,
    type: '',
    index: -1
};

function setActive(index) {
    var liList = document.getElementById('navTitle').getElementsByTagName('li');
    if (index < liList.length - 1) {
        liList[index].className = 'active';
    }
}

function setType(type) {
    type == '' ? type = 'default' : '';
    NT.type = type;
}

function navScrollOnTop() {
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    var navBar = document.getElementById('nav');
    if (top <= 50) {
        navBar.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        navBar.style.boxShadow = 'none';
        navBar.style.paddingTop = '20px';
        navBar.style.height = '50px';
    } else if (top > 50 && top <= 650) {
        if (NT.type == 'light') {
            navBar.style.backgroundColor = 'rgba(200, 200, 200, 0.4)';
        } else if (NT.type == 'dark') {
            navBar.style.backgroundColor = 'rgba(66, 66, 66, 0.4)';
        } else {
            navBar.style.backgroundColor = 'rgba(150, 150, 150, 0.5)';
        }
        navBar.style.boxShadow = '#444 0 0 10px';
        navBar.style.paddingTop = '12px';
        navBar.style.height = '40px';
    } else {
        navBar.style.backgroundColor = 'rgba(150, 150, 150, 0.5)';
        navBar.style.boxShadow = '#444 0 0 10px';
        navBar.style.paddingTop = '12px';
        navBar.style.height = '40px';
    }
    NT.bgc = navBar.style.backgroundColor;
    NT.h = parseInt(navBar.style.height.replace(/[^0-9]/g, ''));
}

function itemExpand(subMenuNum) {
    var navBar = document.getElementById('nav');
    var subNavBar = document.getElementsByClassName('sub-navbar')[subMenuNum];
    navBar.style.height = NT.h + 50 + 'px';
    NT.type == 'dark' ? navBar.style.backgroundColor = 'rgba(100, 100, 100, 0.85)' : navBar.style.backgroundColor = 'rgba(230, 230, 230, 0.85)';
    subNavBar.addEventListener('mouseleave', function () {
        navBar.style.height = NT.h + 'px';
        navBar.style.backgroundColor = NT.bgc;
    }, false);
}