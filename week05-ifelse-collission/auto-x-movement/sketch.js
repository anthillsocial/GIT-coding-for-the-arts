let size = 50;
let x = size/2;
let y = 50; 
let move = 3; 
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
    x += move;
  }else{
    x -= move;
  }

  // Detect if we hit the side
  if(x >= width-(size/2)){
    reverseX = true; 
    move = random(1,10)
  }else if(x <= 0+(size/2)){
    reverseX = false; 
  }

}