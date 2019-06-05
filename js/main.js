'use strict'
console.log('online');

let gCanvas;

let gCtx;

let gCurrElement = 'square';

let gPaintStatus = {
    currElement: 'square',
    isMouseDown: false,
    timeout: null,
    strokeColor : 'black'
}


function init() {
    console.log('yo');

    gCanvas = document.querySelector('.canvas');
    gCtx = gCanvas.getContext('2d');

    gCanvas.width = window.innerWidth;
    gCanvas.height = window.innerHeight;
}



function onCanvasClick(ev) {
    gPaintStatus.isMouseDown = true;

}


function onCanvasHoverMovement(ev) {
    if (gPaintStatus.isMouseDown) {
        gPaintStatus.isMouseDown = false;
        gPaintStatus.timeout = setTimeout(onCanvasClick, 100);
        gCtx.save()
        const { offsetX, offsetY } = ev;
        switch (gCurrElement) {
            case 'square':
                drawRect(offsetX, offsetY);
                break;
            case 'circle':
                drawCircle(offsetX, offsetY)
                break;
            // case 'text':
            //     drawText('test',offsetX, offsetY)
            //     break;
        }
    }
    gCtx.restore()
}


function drawCircle(x, y) {

    gCtx.beginPath();
    gCtx.arc(x, y, 50, 0, 2 * Math.PI);
    gCtx.fillStyle = 'white'
    gCtx.strokeStyle = gPaintStatus.strokeColor
    gCtx.stroke();
    gCtx.closePath(); 
}

function onCanvasRelease() {
    clearTimeout(gPaintStatus.timeout);
    gPaintStatus.isMouseDown = false;
}

function changeElement(val) {
    gPaintStatus.currElement = val;
}

function onChangeColor(color){
     gPaintStatus.strokeColor = color;
}

function changeElement(val) {
    gCurrElement = val;
}


function drawRect(x, y) {
    gCtx.beginPath()
    gCtx.rect(x, y, 75, 75)
    gCtx.fillStyle = 'white'
    // gCtx.fillRect(x, y, 75, 75)
    gCtx.strokeStyle = gPaintStatus.strokeColor;
    gCtx.stroke()
    gCtx.closePath();
}
