/*
  Josef Albers: Interaction of Colour
  
  This could be simplified by using the 'width' and 'height' environment variables 
  to automatically scale the image to the size of the canvas
*/

function setup() {
  createCanvas(600, 600);
  noStroke();

  background(255);

  //Base squares
  //top left
  fill(224, 103, 138);
  rect(0, 0, 300, 300);

  //top right
  fill(201, 75, 122);
  rect(300, 0, 300, 300);

  //bottom left
  fill(240, 130, 139);
  rect(0, 300, 300, 300);

  //bottom right
  fill(233, 163, 179);
  rect(300, 300, 300, 300);

  
  //Inner squares
  //Note the draw order here
  //We are drawing these 'after' the base squares, and so they appear 'on top'
  
  //top left
  fill(0, 160, 218);
  rect(150, 150, 150, 150);

  //top right
  fill(0, 122, 173);
  rect(300, 150, 150, 150);

  //bottom left
  fill(63, 181, 209);
  rect(150, 300, 150, 150);

  //bottom right
  fill(68, 193, 213);
  rect(300, 300, 150, 150);
}
