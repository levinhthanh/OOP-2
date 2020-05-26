let context = document.getElementById('myCanvas').getContext('2d');
let remoteImg = document.getElementById('remote');
let tiviImg1 = document.getElementById('chan1');
let tiviImg2 = document.getElementById('chan2');
let tiviImg3 = document.getElementById('chan3');
let waveImg = document.getElementById('wave');





class Remote {
    constructor(code) {
        this.code = code;
    }
    controlChannel(tiviObj, newChannel) {
        if(tiviObj.status === 'on'){
        tiviObj.nowChannel = newChannel;
    }
    }
    controlVolume(tiviObj,value) {
        if(tiviObj.status === 'on'){
        tiviObj.nowVolume += value;
        }
    }
}
class Tivi {
    constructor(nowChannel,nowVolume,status) {
        this.nowChannel = nowChannel;
        this.nowVolume = nowVolume;
        this.status = status;
    }
    changeChannel(newChannel) {
        if(this.status === 'on'){
        this.nowChannel = newChannel;
    }
    }
    changeVolume(value) {
        if(this.status === 'on'){
        this.nowVolume += value;
        }
    }
}

let tivi1 = new Tivi('1',10,'off');
let remote1 = new Remote('r2020');
let remoteInp='';
let tiviInp='';

tivi1.status = 'on';

function remoteCC(){
    remoteInp = document.getElementById('input1').value;
    remote1.controlChannel(tivi1,remoteInp);
    drawChannel();
}
function tiviCC(){
    tiviInp = document.getElementById('input2').value;
    tivi1.changeChannel(tiviInp);
    drawChannel();
}

function drawChannel(){
    if(tivi1.nowChannel === '1'){
        context.drawImage(tiviImg1, 700, 50, 400, 300)
    }
    if(tivi1.nowChannel === '2'){
        context.drawImage(tiviImg2, 700, 50, 400, 300)
    }
    if(tivi1.nowChannel === '3'){
        context.drawImage(tiviImg3, 700, 50, 400, 300)
    }
}

window.onload = function () {
    context.drawImage(remoteImg, 70, 50, 100, 200);
    if(tivi1.nowChannel === '1'){
        context.drawImage(tiviImg1, 700, 50, 400, 300)
    }
    if(tivi1.nowChannel === '2'){
        context.drawImage(tiviImg2, 700, 50, 400, 300)
    }
    if(tivi1.nowChannel === '3'){
        context.drawImage(tiviImg3, 700, 50, 400, 300)
    }
    
    
    setInterval(function () {
        context.clearRect(350, 100, 100, 100);
    }, 900)
    setInterval(function () {
        context.drawImage(waveImg, 350, 100, 100, 100);
    }, 1000)
}



document.getElementById('volumeRe').innerHTML = tivi1.nowVolume;
document.getElementById('volumeTivi').innerHTML = tivi1.nowVolume;
function addVolRe(){
       remote1.controlVolume(tivi1,1);
       document.getElementById('volumeRe').innerHTML = tivi1.nowVolume;
       document.getElementById('volumeTivi').innerHTML = tivi1.nowVolume;
}
function subVolRe(){
    remote1.controlVolume(tivi1,-1);
    document.getElementById('volumeRe').innerHTML = tivi1.nowVolume;
    document.getElementById('volumeTivi').innerHTML = tivi1.nowVolume;
}


function addVolTivi(){
       tivi1.changeVolume(1);
       document.getElementById('volumeRe').innerHTML = tivi1.nowVolume;
       document.getElementById('volumeTivi').innerHTML = tivi1.nowVolume;
}
function subVolTivi(){
    tivi1.changeVolume(-1);
    document.getElementById('volumeRe').innerHTML = tivi1.nowVolume;
    document.getElementById('volumeTivi').innerHTML = tivi1.nowVolume;
}
