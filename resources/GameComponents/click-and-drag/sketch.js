// Click and Drag an object

let shape1;
let shape2;

function setup() {
  createCanvas(640, 360);
  shape1 = new Draggable(100, 100, 50, 50);
  shape2 = new Draggable(150, 100, 50, 50);
}

function draw() {
  background(255);
  shape1.over();
  shape1.update();
  shape1.show();
  shape2.over();
  shape2.update();
  shape2.show();

}

function mousePressed() {
  shape1.pressed();
  shape2.pressed();
}

function mouseReleased() {
  shape1.released();
  shape2.released();
}