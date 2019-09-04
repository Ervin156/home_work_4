var up = document.querySelector('#up');
var down = document.querySelector('#down');
var right = document.querySelector('#right');
var left = document.querySelector('#left');
var square = document.querySelector('#floating-square');

var posX = square.getBoundingClientRect().top;
var posY = square.getBoundingClientRect().left;

console.log(square.getBoundingClientRect().left);

up.onclick = function () {
    pos = posX;

    t = setInterval(function () {

        if (pos <= 0) {
            clearInterval(t);
            posX = pos;
        } else {
            --pos;
            square.style.top = pos + 'px';
        }
    }, 1)
}
down.onclick = function () {
    pos = posX;

    t = setInterval(function () {

        if (pos >= 550) {
            clearInterval(t);
            posX = pos;
        } else {
            ++pos;
            square.style.top = pos + 'px';
        }
    }, 1)
}

right.onclick = function () {

    pos = posY;

    t = setInterval(function () {

        if (pos >= 1000) {
            clearInterval(t);
            posY = pos;
        } else {
            pos++;
            square.style.left = pos + 'px';
        }
    }, 1)
}
left.onclick = function () {
    pos = posY;

    t = setInterval(function () {

        if (pos <= 0) {
            clearInterval(t);
            posY = pos;
        } else {
            --pos;
            square.style.left = pos + 'px';
        }
    }, 1)

}

