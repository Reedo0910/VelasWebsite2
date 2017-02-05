var footer = {
    template: '\
    <div id="footer">\
        <p class="footer-contact">如何联系Zeee?</p>\
        <ul class="share-group">\
            <a href="mailto:sea.sand@live.cn"><li class="fa fa-envelope fa-lg"><p>Email</p></li></a>\
            <a href="http://weibo.com/reedo"><li class="fa fa-weibo fa-lg"><p>Weibo</p></li></a>\
            <a href="https://github.com/Reedo0910"><li class="fa fa-github fa-lg"><p>Github</p></li></a>\
        </ul>\
        <div id="copy">\
            <a href="#" class="fa fa-angle-up fa-2x gototop" id="gototop"></a>\
            <p>Zeee@Velas 2017</p>\
        </div>\
    </div>'
}

function goToTop() {
    var gTT = document.getElementById('gototop');
    gTT.onclick = function () {
        var dd = document.documentElement,
            db = document.body,
            top = dd.scrollTop || db.scrollTop,
            step = Math.floor(top / 20);
        (function () {
            top -= step;
            if (top > -step) {
                dd.scrollTop == 0 ? db.scrollTop = top : dd.scrollTop = top;
                setTimeout(arguments.callee, 10);
            }
        })();
    }
}

function gttScrollOnTop() {
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    var gttBtn = document.getElementById('gototop');
    if (top <= 200) {
        gttBtn.style.opacity = 0;
        gttBtn.style.visibility = 'hidden';
    } else {
        gttBtn.style.opacity = 1;
        gttBtn.style.visibility = 'visible';
    }
}