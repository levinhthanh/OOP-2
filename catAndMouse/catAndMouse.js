
var context = document.getElementById("myCanvas").getContext("2d");
let mouImg = document.getElementById('mouse');
let catImg = document.getElementById('cat');

context.drawImage(mouImg, 600, 130, 80, 80);
context.drawImage(catImg, 100, 100, 120, 120);




class Rat {
    constructor(name, weight, speed, status, posX) {
        this.posX = posX;
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.status = status;
    }
    sound() {
        return "chít chít";
    }
}
class Cat {
    constructor(name, weight, speedMax, posX) {
        this.posX = posX;
        this.name = name;
        this.weight = weight;
        this.speedMax = speedMax;
    }
    catchMouse(mouseObj) {
        if (mouseObj.posX - this.posX < 120) return true;
        else return false;
    }
    get sound() {
        return "meow meow";
    }
    eat(mouseObj) {
        if (mouseObj.status === 'alive') this.weight += mouseObj.weight;
    }
}

let jerry = new Rat('Jerry', 20, 3, 'alive',600);
let tom = new Cat('Tom', 200, 10, 100);
let checkCaught = false;
let chit;
function batChuot() {
    setInterval(function () {
       checkCaught= tom.catchMouse(jerry);
        if(checkCaught===false){
        context.clearRect(0,0,1200,400);
        context.drawImage(mouImg, jerry.posX, 130, 80, 80);
        context.drawImage(catImg, tom.posX, 100, 120, 120);
        jerry.posX += jerry.speed;
        tom.posX += tom.speedMax;       
    } else {
        context.clearRect(0,0,1200,400);
        context.drawImage(mouImg, jerry.posX, 130, 80, 80);
        context.drawImage(catImg, tom.posX, 100, 120, 120);
        chit = jerry.sound();
        alert('Jerry kêu: ' +chit);
        alert('Khối lượng Tom trước khi ăn: '+ tom.weight);
        tom.eat(jerry);
        alert('Khối lượng Tom sau khi ăn: '+ tom.weight);
    }
    }, 100)
}
