/**
 * Created by nhatnk on 4/26/17.
 */




function Hero(image, top, left, size, speed) {
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed = speed;
  this.getHeroElement = function () {
    return '<img width="' + this.size + '"' +
      ' height="' + this.size + '"' +
      ' src="' + this.image + '"' +
      ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
  }
}

var hero = new Hero('eevee-game.png', 20, 30, 200, 20);

function start() {
  
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 200)
}


document.addEventListener('keydown', keyDown)
start();
function keyDown(e) {
  
  switch (e.key) {
    case "ArrowRight":
      moveRight();
      break;
    case "ArrowLeft":
      moveLeft();
      break;
    case "ArrowUp":
      moveUp();
      break;
    case "ArrowDown":
      moveDown();
      break;
    case " ":
      increSpeed();
      break;
  }
}
function moveRight() {
  hero.left += hero.speed;
}

function moveLeft() {
  hero.left -= hero.speed;
}
function moveUp() {
  hero.top -= hero.speed;
}
function moveDown() {
  hero.top += hero.speed;
}
function increSpeed() {
  hero.speed += 20;
}
