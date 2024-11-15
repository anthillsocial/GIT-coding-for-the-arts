let rectY = [0, 40, 80, 120, 160, 200, 240, 280, 320, 360];
let speed = 3; 
let carX;  

function setup() {
  createCanvas(400, 400);
  carX = width/2; 
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background(150);
  
  // Animate the road markings 
  for (let i = 0; i < rectY.length; i++) {
    let x = width/2; 
    fill(255);
    rect(x, rectY[i], 5, 20);
    rectY[i] = (rectY[i]+speed) % width; // Wrap movement with modulus 
  }

    
  rect(carX, height-50, 35, 60);

}