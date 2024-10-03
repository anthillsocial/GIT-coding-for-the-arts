/*
  (ALMOST) EVERY SHAPE
  
  This sketch includes all the 2D 'primitive' shapes built into p5.js (i.e Processing).
  Note how the coordinates for each shape are interpreted: 
  rectangles and squares by default 
  are drawn from the top-left corner, 
  while ellipses and circles are drawn from the centre.
  To change this behaviour, you can use:
  
    ellipseMode(CORNER)
    ellipseMode(CENTER)
    rectMode(CORNER)
    rectMode(CENTER)
    
  You can also draw more complicated shapes with functions such as 
  
    beginShape()
    vertex()
    curveVertex()
    endShape()
  
  Look up the p5js reference for more information: https://p5js.org/reference/
*/

function setup() {
  createCanvas(700, 700);

  //white background
  background(255);

  //turn off default black outline on shapes
  noStroke();

  //red rectangle
  fill(255, 0, 0);
  rect(125, 100, 50, 100);

  //green quadrilateral
  fill(0, 255, 0);
  quad(300, 100, 400, 125, 400, 200, 300, 175);

  //blue square
  fill(0, 0, 255);
  square(500, 100, 100);

  //yellow oval
  fill(255, 255, 0);
  ellipse(150, 350, 100, 50);

  //cyan circle
  fill(0, 255, 255);
  circle(350, 350, 100);

  //magenta arc--note the use of PI values to set the angles of the arc
  fill(255, 0, 255);
  arc(550, 350, 100, 100, HALF_PI, TWO_PI);

  //Purple triangle
  fill(205, 155, 255);
  triangle(100, 500, 100, 600, 200, 550); //three pairs of coordinates, one for each corner of the triangle

  //orange line
  stroke(255, 205, 155);
  line(300, 500, 400, 600);

  //black dot--note use of strokeweight to change the size of the point
  strokeWeight(3);
  stroke(0);
  point(550, 550);
}
