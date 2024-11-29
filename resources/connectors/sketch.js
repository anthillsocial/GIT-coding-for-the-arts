let speed = 15;
let size = 20;

// Top connector
let x1, y1, x1s, y1s;

// Bottom connector
let x2, y2, x2s, y2s;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER); 
  // Set start positions
  resetPostions()
}

function resetPostions(){
  // Top connector
  x1 = mouseX; 
  y1 = mouseY;
  x1s = random(0, windowWidth); 
  y1s = -40;
  // Bottom connector
  x2 = x1; 
  y2 = windowHeight+10;
  x2s =  x1; 
  y2s = windowHeight;
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
 
  // First connector
  line(x1, y1, x1s, y1s) 
  rect(x1, y1, size);
  
  // Auto connector
  line(x2, y2, x2s, y2s) 
  circle(x2, y2, size);

  // Stop moving if the lines are connected
  let myDistance = dist(x1, y1, x2, y2); 
  if(myDistance < size){
    console.log('CONNECTED');
    
  }else{
    //Create a vector of the distance between two points
    let m = createVector(x2-x1, y2-y1);
    m.normalize(); // Create a constant rate
    x2 -= m.x*speed;   // Set the speed
    y2 -= m.y*speed;   // Set the speed
  }

}

// Set a point for the other object to move towards
function mouseClicked() {
  resetPostions();
}