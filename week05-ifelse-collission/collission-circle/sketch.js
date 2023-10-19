let size = 50;
let myFill = 255;
let x, y; 

function setup() {
  createCanvas(500, 500); // canvas width/height
  x=width/2;
  y=height/2;
}

function draw(){
  background(100); // Make background grey

  fill(myFill);
  ellipse(x, y, size); // x, y, size
  
  fill(150)
  ellipse(mouseX, mouseY, size); // x, y, size
  
  let distance = dist(x, y, mouseX, mouseY); 
  if(distance <= size){ // change to (distance <= size) to detect mouse
    myFill = [255, 0, 0];
  }else{
    myFill = 255;
  }

  fill(0)
  textSize(15);
  text(int(distance), x-15, y-10, 30);
}