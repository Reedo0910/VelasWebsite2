// 元素固定
function autoFixed(element, eTop) {
    var T1 = 350;
    var T2 = 50;
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    var fE = document.getElementById(element);
    var ll = document.getElementById('updatelog-list').firstChild.scrollHeight;
    if (top <= T1) {
        fE.style.position = 'absolute';
        fE.style.top = eTop + 'px';
    } else {
        fE.style.position = 'fixed';
        fE.style.top = eTop + T2 + 'px';
    }
}

// 定位动画
function scrollAnimate(obj, dis) {
    clearInterval(obj.timer);
    var view = document.documentElement.scrollTop || document.body.scrollTop;
    var diff;
    if (view - dis != 0) {
        obj.timer = setInterval(function () {
            diff = (dis - view) / 10;
            diff = diff > 0 ? Math.ceil(diff) : Math.floor(diff);
            if (view == dis) {
                clearInterval(obj.timer);
            } else {
                view += diff;
                window.scrollTo(0, view);
            }
        }, 10);
    }
}

// 自动导航
function autoNavigation() {
    var noteList = document.querySelectorAll('.notecard');
    var headerHeight = document.querySelector('header').offsetHeight;
    var view = document.documentElement.scrollTop || document.body.scrollTop;
    var index = -1;
    for (var i = 0; i < noteList.length; i++) {
        if (view >= (noteList[i].offsetTop + headerHeight - 100)) {
            index = i;
        }
    }
    return index;
}

// 获取样式
function getStyle(obj, attr) {
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, false)[attr];
}

// 列表动画
function listAction(obj, tarValue) {
    clearInterval(obj.timer);
    if (tarValue == 'auto') {
        tarValue = obj.scrollHeight;
    }
    obj.timer = setInterval(function() {
        var cur = parseInt(getStyle(obj, 'height')); //获取实时高度
        var speed = (tarValue - cur) / 10;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if (tarValue == cur) {
            clearInterval(obj.timer);
            obj.timer = null;
        } else {
            obj.style.height = cur + speed + 'px';
        }
    }, 10);
}