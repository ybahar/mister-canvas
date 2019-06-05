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

function onCanvasHoverMovement(){
    console.log('movement');
}
function onCanvasRelease(){
    console.log('up');
}

function changeElement(val) {
    gPaintStatus.currElement = val;
}



function onCanvasClick(ev) {
    if(gPaintStatus.isMouseDown) 


    console.log(ev);
    
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
    gCtx.restore()
}


function drawRect(x, y) {

    gCtx.rect(x, y, 150, 150)
    gCtx.fillStyle = 'orange'
    gCtx.fillRect(x, y, 150, 150)
    gCtx.stroke()
    gCtx.fill()
}
