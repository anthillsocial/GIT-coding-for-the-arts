let myFill = 255;
let w = 100;
let h = 50;
let x = 200; 
let y = 200; 
let count = 0; 

function setup() {
  createCanvas(500, 500); // canvas width/height
  rectMode(CORNER); 
}

function draw(){
  background(100); // Make background grey

  fill(myFill);
  rect(x, y, w, h); // x, y, size

  if(mouseX > x && mouseX < x+w && mouseY > y && mouseY < y + h){
    myFill = [255, 0, 0];
    count++;
  }else{
    myFill = 255;
  }

  fill(0)
  textSize(20);
  text(count, x+20, y+30);

}