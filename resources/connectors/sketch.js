let speed = 15;
let size = 20;
let clickPosition; 
let connectors = [
  {x1:0, y1:0, x2:400, y2:400},
  {x1:0, y1:0, x2:0, y2:0},
  {x1:0, y1:0, x2:0, y2:0}
]

// Top connector
//let x1, y1, x1s, y1s;

// Bottom connector
//let x2, y2, x2s, y2s;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER); 
  // Set start positions
  //resetPostions2();
  mouseClicked();
}

function resetPostions2(){
  // Set the position of the top connector
  console.log(connectors[0])
  connectors[0].x1 = mouseX; 
  connectors[0].y1 = mouseY; 
  connectors[0].x2 = random(0, windowWidth); 
  connectors[0].y2 = -40;
  // Bottom connector
  //connectors[1].x1 = connectors[0].x1; 
  //connectors[1].y1 = windowHeight+10;
  //connectors[1].x2 = connectors[0].x1;
  //connectors[1].y2s = windowHeight;
}

function draw() {
  background(0);
  drawline(0);
  animateLine(1);
}

function drawline(key){
  stroke(255);
  strokeWeight(4);
  line(connectors[key].x1, connectors[key].y1, connectors[key].x2, connectors[key].y2) 
  circle(connectors[key].x2, connectors[key].y2, size);
} 

// Anunate the end of the line to the clickPosition
function animateLine(key){
  //Create a vector of the distance between two points
  let movingX = connectors[key].x2; 
  let movingY = connectors[key].y2; 
  let targetX = clickPosition[0];
  let targetY = clickPosition[1];
  let m = createVector(movingX-targetX, movingY-targetY);
  m.normalize(); // Create a constant rate
  // Calculate the speed of movement
  movingX -= m.x*speed;   // Set the speed of the moving point
  movingY -= m.y*speed;   // Set the speed of the moving point
  // Save the new x/y position
  connectors[key].x2 = movingX;
  connectors[key].x2 = movingY;
  console.log('X:'+movingX, 'Y:'+movingY, 'targetX:'+targetX, 'targetY:'+targetY);
  // Draw the line
  stroke(255);
  strokeWeight(4);
  line(connectors[key].x1, connectors[key].y1, connectors[key].x2, connectors[key].y2) 
  rect(connectors[key].x2, connectors[key].y2, size);
}

// Set a point for the other object to move towards
function mouseClicked() {
  clickPosition = [width/2, height/2];
  connectors[0].x1 = random(width); 
  connectors[0].y1 = 0;
  connectors[0].x2 = mouseX;
  connectors[0].y2 = mouseY; 
}


function drawCOnnectors(){
  // First connector
  line(x1, y1, x1s, y1s) 
  rect(x1, y1, size);

  // Animated connectors
  Object.keys(connectors).forEach(key => {

    // Auto connector
    line(connectors[key].x1, connectors[key].y1, connectors[key].x2, connectors[key].y2); 
    circle(connectors[key].x2, connectors[key].y2, size);

    // Stop moving if the lines are connected
    let myDistance = dist(connectors[0].x2, connectors[0].y2, connectors[key].x2, connectors[key].y2); 
    if(myDistance < size){
      console.log('CONNECTED');
    
    }else{
      //Create a vector of the distance between two points
      let m = createVector(connectors[0].x2-connectors[key].x1, connectors[0].y2-connectors[key].y1);
      m.normalize(); // Create a constant rate
      connectors[key].x2 -= m.x*speed;   // Set the speed
      connectors[key].y2 -= m.y*speed;   // Set the speed
    }
  });
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




function draw2() {
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

