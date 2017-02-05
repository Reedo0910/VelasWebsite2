var navTitle = {
    template: '\
      <ul id="navTitle">\
      <li><a href="index.html">Home</a></li>\
      <li><a href="peace.html">Peace</a></li>\
      <li><a href="log.html">Log</a></li>\
      <li class="nav-talk-button"><a href="http://blog.velas.xyz/">Talk</a></li>\
      </ul>'
}

function setActive(index) {
    var liList = document.getElementById('navTitle').getElementsByTagName('li');
    if (index < liList.length - 1) {
        liList[index].className = 'active';
    } 
}