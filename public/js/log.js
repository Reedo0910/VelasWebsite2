function autoFixed(element, eTop) {
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    var fE = document.getElementById(element);
    var fEClass = fE.className;
    if (top <= 350) {
        fE.style.position = 'absolute';
        fE.style.top = eTop + 'px';
    } else {
        fE.style.position = 'fixed';
        fE.style.top = eTop + 50 + 'px';
    }
}
