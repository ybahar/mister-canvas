'use strict'
console.log('online');

let gCanvas;

let gCtx;

let gCurrElement = 'square';

let gPaintStatus = {
    currElement: 'square',
    isMouseDown: false,

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

let timer ;
function onCanvasHoverMovement(ev) {
    if (gPaintStatus.isMouseDown) {
        console.log('tras');
        gPaintStatus.isMouseDown=false;
       timer = setTimeout(onCanvasClick,100);
        gCtx.save()
        const { offsetX, offsetY } = ev;
        switch (gCurrElement) {
            case 'square':
                drawRect(offsetX, offsetY);
                break;
            case 'circly':
                drawCircle(offsetX, offsetY)
                break;
            // case 'text':
            //     drawText('test',offsetX, offsetY)
            //     break;
        }
    }
    gCtx.restore()
}

function drawCircle() {
    
}
function onCanvasRelease() {
    clearTimeout(timer);
    gPaintStatus.isMouseDown = false; 
}

function changeElement(val) {
    gPaintStatus.currElement = val;
}



function changeElement(val) {
    gCurrElement = val;
}


function drawRect(x, y) {

    gCtx.rect(x, y, 75, 75)
    gCtx.fillStyle = 'white'
    gCtx.fillRect(x, y, 75, 75)
    gCtx.strokeStyle = getRandomColor();
    gCtx.stroke()
}
