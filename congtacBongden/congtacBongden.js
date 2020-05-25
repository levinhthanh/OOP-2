function ElectricLamp(status){
    this.status = status;
    this.turnOn = function(){
        this.status = 'on';
    }
    this.turnOff = function(){
        this.status = 'off';
    }
}
function SwitchButton(status,lampObj){
    this.status = status;
    this.lamp = lampObj;
    this.connectToLamp = function(){
        lampObj.status = this.status;
    }
    this.switchOn = function(){
        this.status = 'on';
    }
    this.switchOff = function(){
        this.status = 'off';
    }
}

let lamp1 = new ElectricLamp('off');
let swit1 = new SwitchButton('off', lamp1);

function show(){
    
    if(swit1.status === 'on') swit1.status = 'off';
    else swit1.status = 'on';
     swit1.connectToLamp();
     if(swit1.status === 'on') {
        document.getElementById('switch').src = "switch-on.png";
        document.getElementById('lamp').src = "lamp-on.png"
     }
     else {
        document.getElementById('switch').src =  "switch-off.png";
         document.getElementById('lamp').src = "lamp-off.png"
     }
}