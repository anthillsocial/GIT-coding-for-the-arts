let size = 50;
let x = size/2;
let y = 50; 
let moveX = 3; 
let moveY = 3; 
let reverseX = false; 

// Can you use this variable to make the 
// ellipse go up or down? 
let reverseY = false; 

function setup(){
	createCanvas(500, 500);
	background(255);
  noStroke();
}

function draw(){
  background(255); 

	fill(100);
	ellipse(x, y, size);

  // Determine if we should add or subtract
  // to add or subtract from the x position
  if(reverseX == false){
    x += moveX;
  }else{
    x -= moveX;
  }

  // Detect if we hit the side
  if(x >= width-(size/2)){
    reverseX = true; 
    moveX = random(0,10); 
  }else if(x <= 0+(size/2)){
    reverseX = false; 
    moveX = random(0,10); 
  }

    // Determine if we should add or subtract
  // to add or subtract from the x position
  if(reverseY == false){
    y += moveY;
  }else{
    y -= moveY;
  }

  // Detect if we hit the side
  if(y >= height-(size/2)){
    reverseY = true; 
    moveY = random(0,10); 
  }else if(y <= 0+(size/2)){
    reverseY = false; 
    moveY = random(0,10); 
  }

}