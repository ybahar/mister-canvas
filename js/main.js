'use strict'
console.log('online');

// Yarin: each mouse move event has timestap attribute in it. we can use it for deciding speed
let gCanvas;

let gCtx;

// let gStartTime;
// let gPrevTime;

let gShapeSize;

let gPrevPos = {
    x: null,
    y: null
};

let gPaintStatus = {
    currElement: 'square',
    isMouseDown: false,
    timeout: null,
    strokeColor: 'black',
    shapeDelay: 30
}



function init() {
    console.log('Ready for painting');

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
        gPaintStatus.timeout = setTimeout(onCanvasClick, gPaintStatus.shapeDelay);
        gCtx.save()
        const { offsetX, offsetY } = ev;
        if (gPrevPos.x) {
            var diff = Math.abs(((gPrevPos.x - offsetX) + (gPrevPos.y - offsetY)) * 20)
            gShapeSize = (diff / 15);
        }
        
        switch (gPaintStatus.currElement) {
            case 'square':
                drawRect(offsetX, offsetY);
                gPrevPos.x = offsetX
                gPrevPos.y = offsetY
                break;
            case 'circle':
                drawCircle(offsetX, offsetY)
                gPrevPos.x = offsetX
                gPrevPos.y = offsetY
                break;
        }
    }
    gCtx.restore()
}


function drawCircle(x, y) {

    gCtx.beginPath();
    gCtx.arc(x, y, gShapeSize, 0, 2 * Math.PI);
    gCtx.fillStyle = 'white'
    gCtx.strokeStyle = gPaintStatus.strokeColor
    gCtx.stroke();
    gCtx.closePath();
}

function onCanvasRelease() {
    clearTimeout(gPaintStatus.timeout);
    gPaintStatus.isMouseDown = false;
}

function onDelayChange(val) {
    gPaintStatus.shapeDelay = val
    document.querySelector('.delay-show').innerText = val;
}

function changeElement(val) {
    gPaintStatus.currElement = val;
}

function onChangeColor(color) {
    gPaintStatus.strokeColor = color;
}

function changeElement(val) {
    gPaintStatus.currElement = val;
}


function drawRect(x, y) {
    gCtx.beginPath()
    gCtx.rect(x, y, gShapeSize, gShapeSize)
    gCtx.fillStyle = 'white'
    gCtx.strokeStyle = gPaintStatus.strokeColor;
    gCtx.stroke()
    gCtx.closePath();
}

function mouseUpControls() {
    if (gPaintStatus.isMouseDown || gPaintStatus.timeout) onCanvasRelease();
}

// if(gStartTime) {
//     gPrevTime = Date.now();
// } else {
//     gStartTime = Date.now();
// } 


// if (gPrevPos.x) {
//     var diff = Math.abs((gPrevPos.x - offsetX) + (gPrevPos.y - offsetY))

// }
// console.log( diff / (gPrevTime - gStartTime));