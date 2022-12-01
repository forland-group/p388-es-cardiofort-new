function isInternetExplorer() {
    return window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
}
if (isInternetExplorer() === false) {
    if ($(window).width() > 767) {
        new WOW().init();
    }
}

function progressView(){
    let diagramBox = document.querySelectorAll('.b-circle');
    diagramBox.forEach((box) => {
        let deg = (360 * box.dataset.percent / 100) + 90;
    if(box.dataset.percent >= 50){
        box.classList.add('over_50');
    }else{
        box.classList.remove('over_50');
    }
    box.querySelector('.piece.right').style.transform = 'rotate('+deg+'deg)';
});
}
progressView();
$(document).ready(function() {
    var _num = $('.count-num').text();
    _num = 97;
    var int = setInterval(function() {
        if (_num > 0) {
            _num--;
            $('.count-num').text(_num);
        } else {
            clearInterval(int);
        }
    }, 4000);
});