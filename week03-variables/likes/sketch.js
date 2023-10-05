let img;
let images = 0; 

function preload() {
  img = loadImage('like.png');  
}

function setup(){
	createCanvas(500, 500); 
}

function draw(){
  // Randomly position image
	let x = random(width); 
	let y = random(height); 
  img.resize(50, 50);
	image(img, x, y);

  // Add white boc for text
  fill(255); 
  rect(-2, height/2, width+4, 30); 
  
  // Add text 
  fill(100);
  stroke(100);
  textSize(width/20);
  textAlign(CENTER, CENTER);
  text("likes: "+images++, width/2, (height/2+17)); 
}