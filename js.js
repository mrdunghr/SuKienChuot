let imgbong = null;
imgbong = document.getElementById('img');
function init(){
    imgbong = document.getElementById('img');
    imgbong.style.position = 'relative';
    imgbong.style.left = '0px';
}
function moveRight(){
    imgbong.style.left = parseInt(imgbong.style.left) + 10 + 'px';
}
window.onload = init;