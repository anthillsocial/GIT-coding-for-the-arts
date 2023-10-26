// Block array 
let r = 0;
let xA = [];
let yA = []; 
let colors = [];
let blocks = 8; 
let blockW = 30; 
let blockH = 30; 
let spacer = 20;  
let speed = 2.5; 
let moveright = true; 

function setup() {
  createCanvas(500, 400); 
  // Save starting X & Y positions
  for(let i=0; i<blocks; i++){
    xA[i] = i*(blockW+spacer)+spacer; 
    yA[i] = blockH/2; 
    // Save/set the color if ODD or EVEN 
    if(i % 2 == 0) { 
      colors[i] =  [255,0,0]; 
    }else{
      colors[i] =  [0,255,0]; 
    }
  }
}

function draw(){
  background(20); 
  fill(200); 

  // Draw the blocks 
  for(let i=0; i<blocks; i++){
    fill(colors[i]);
    rect(xA[i], yA[i], blockW, blockH);
    // Determine their direction of travel
    if(moveright){
      xA[i] += speed;
    }else{
      xA[i] -= speed;
    }
  }
  
  // Check right edge 
  let rightedge = xA[blocks-1]+blockW;
  if(rightedge > width){
    console.log('MOVE LEFT'); 
    moveright = false; 
  }

  // Check left edge 
  let leftedge = xA[0];
  if(leftedge < 0){
    console.log('MOVE RIGHT'); 
    moveright = true; 
  }

}