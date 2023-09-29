/*
  Josef Albers: Interaction of Colour
  
  This could be simplified by using the 'width' and 'height' environment variables 
  to automatically scale the image to the size of the canvas
*/

function setup() {
  createCanvas(600, 600);
  noStroke();

  background(255);

}

function draw(){

  stroke(20, 200, 200);  // r, g, b 
  strokeWeight(10);      // Width of stroke
  fill(200, 20, 200);    // r, g, b
  rect(350, 100, 100) 

  stroke(33); 
  fill(63, 181, 209);
  rect(100, 100, 200, 200, 20, 20, 5, 5)
}
