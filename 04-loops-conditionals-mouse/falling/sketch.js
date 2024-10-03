let rectY = [0, 15, 30];
let speed = 3; 

function setup() {
  createCanvas(400, 400);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background(50);
  fill(255);

  for (let i = 0; i < rectY.length; i++) {
    let x = (i+1)*100; 
    rect(x, rectY[i], 50, 25);
    rectY[i] = (rectY[i]+speed) % width; // Wrap movement with modulus 
  }

}