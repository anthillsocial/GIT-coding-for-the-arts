let baddies = 4; 
let baddiesX = [];
let baddiesY = [];
let baddiesSpeed = [];

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  for(let i=0; i<baddies;i++){
    baddiesX[i] = random(20, width-20);
    baddiesY[i] = 0;
    baddiesSpeed[i] = random(0.5, 2.5);
  }
  console.log(baddiesSpeed)
}

function draw() {
  background(150);
  fill(255);

  // Animate the baddies 
  for (let i = 0; i < baddies; i++) {
    rect(baddiesX[i], baddiesY[i], 20);
    baddiesY[i] = baddiesY[i]+baddiesSpeed[i]; 
    if(baddiesY[i] > height){
      baddiesY[i] = 0; 
      baddiesX[i] = random(20, width-20);
    }
  }

}