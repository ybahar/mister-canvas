'use strict'
console.log('online');

let canvas;

let ctx;

let currElement;


function init() {
    canvas = document.querySelector('.canvas');
    ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerheight;
}


function changeElement(val) {
    currElement = val;
}



function onCanvasClick() {

    const { offsetX, offsetY } = ev;
    switch (currElement) {
        case 'triangle':
            drawTriangle()
            break;
        case 'rect':
            drawRect(offsetX, offsetY)
            break;
        case 'text':
            drawText('test',offsetX, offsetY)
            break;
    }
    ctx.restore()
}