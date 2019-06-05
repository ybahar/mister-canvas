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
    shapeDelay: 30,
    isPsych: false,
    isRainbow: false
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

        gPrevPos.x = offsetX
        gPrevPos.y = offsetY
        switch (gPaintStatus.currElement) {
            case 'square':
                drawRect(offsetX, offsetY);
                break;
            case 'circle':
                drawCircle(offsetX, offsetY)
                break;
        }
    }
    gCtx.restore()
}


function drawCircle(x, y) {
    if (!gPaintStatus.isPsych) {
        gCtx.beginPath();
    }
    gCtx.arc(x, y, gShapeSize, 0, 2 * Math.PI);
    gCtx.fillStyle = 'white'
    gCtx.strokeStyle = (gPaintStatus.isRainbow || gPaintStatus.isPsych) ? getRandomColor() : gPaintStatus.strokeColor
    gCtx.stroke();
    if (!gPaintStatus.isPsych) {
        gCtx.closePath();
    }
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
    gPaintStatus.isRainbow = gPaintStatus.isPsych = false;
}

function changeElement(val) {
    gPaintStatus.currElement = val;
}


function drawRect(x, y) {
    if (!gPaintStatus.isPsych) {
        gCtx.beginPath();
    }
    gCtx.rect(x, y, gShapeSize, gShapeSize)
    gCtx.fillStyle = 'white'
    gCtx.strokeStyle = (gPaintStatus.isRainbow || gPaintStatus.isPsych) ? getRandomColor() : gPaintStatus.strokeColor;
    gCtx.stroke()
    if (!gPaintStatus.isPsych) {
        gCtx.closePath();
    }
}

function mouseUpControls() {
    if (gPaintStatus.isMouseDown || gPaintStatus.timeout) onCanvasRelease();
}

function toggleRainbowMode() {
    gPaintStatus.isRainbow = !gPaintStatus.isRainbow;
}
function togglePsychMode() {
    gPaintStatus.isPsych = !gPaintStatus.isPsych;
}
function changeBgc(color){
   document.body.style.backgroundColor = color;
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