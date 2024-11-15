


let startY = 300; 
let blocks = 0; 
let blockX = [];
let blockY = [];
let blockSpeed = [];

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  createBlock();
}

function createBlock(){
  blockX[blocks] = random(20, width-20);
  blockY[blocks] = startY;
  blockSpeed[blocks] = random(0.5, 2.5);
  blocks++; 
  setTimeout(createBlock, 3000);
}

function draw() {
  background(150);
  fill(255);

  // Animate the blocks 
  for (let i = 0; i < blocks; i++) {
    rect(blockX[i], blockY[i], 20);
    blockY[i] = blockY[i]-blockSpeed[i]; 
    if(blockY[i] < -40){
      blockY[i] = startY; 
      blockX[i] = random(20, width-20);
    }
  }

  line(0, startY, width, startY)

}