//元素固定
function autoFixed(element, eTop) {
    const T1 = 350;
    const T2 = 50;
    let top = document.documentElement.scrollTop || document.body.scrollTop;
    let fE = document.getElementById(element);
    let ll = document.getElementById('updatelog-list').firstChild.scrollHeight;
    if (top <= T1) {
        fE.style.position = 'absolute';
        fE.style.top = eTop + 'px';
    } else {
        fE.style.position = 'fixed';
        fE.style.top = eTop + T2 + 'px';
    }
}

//定位动画
function scrollAnimate(obj, dis) {
    clearInterval(obj.timer);
    let view = document.documentElement.scrollTop || document.body.scrollTop;
    let diff;
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

//改变项目符号
function changeListType() {
    var oList = document.getElementsByTagName('ol');
    var Num = 0;
    for (var i = 0; i < oList.length; i++) {
        Num = oList[i].getElementsByTagName('li').length;
        if (Num == 1) {
            oList[i].style.listStyleType = 'circle';
        }
    }
}