// Rotate / push / translate / pop
let r = 0;

function setup() {
  createCanvas(500, 500); 
  angleMode(DEGREES);
}

function draw(){
  fill(255, 0, 0, 1)
  
  push();   
    translate(100, 100);       // Set where 0,0 starts
    fill(150);
    rotate(r+=10);
    rect(0, 0, 20, 20); 
    ellipse(50, 10, 30, 30);
  pop(); 

  push();
    rectMode(CENTER); // CORNER 
    translate(mouseX, mouseY); // Set where 0,0 starts
    fill(255, 255, 255, 20)
    rotate(r+=1);
    rect(0, 0, 52, 52);
  pop(); 
  
  ellipse(width/2, height/2, 50, 50);
}