let size = 50;
let inCircle = false;
let x, y; 
let myFill = 255;

function setup() {
  createCanvas(500, 500); // canvas width/height
  x=width/2;
  y=height/2;
}

function draw(){
  background(100); // Make background grey

  fill(myFill);
  ellipse(x, y, size); // x, y, size
  
  let distance = dist(x, y, mouseX, mouseY); 
  if(distance <= size/2){ // change to (distance <= size) to detect mouse
    inCircle = true;
  }else{
    inCircle = false;
  }

  fill(0)
  textSize(15);
  text(int(distance), x-15, y-10, 30);
}

function mouseClicked() {
  if (inCircle) {
    myFill = [0, 255, 0];
  }else{
    myFill = 255;
  }

}