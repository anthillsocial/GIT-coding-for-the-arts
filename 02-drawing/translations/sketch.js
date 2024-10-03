/*
  TRANSFORMS: 
  Up to now, we've been positioning shapes by typing numbers 
  into the arguments for various shapes.
  You can also use transform functions such as 
  'rotate' and 'translate' to position shapes around
  the canvas. Sometimes it makes more sense to use 
  these functions, but it does introduce some
  complications. Note the use of
  
  push()
  pop()
  
  What happens if you comment out these functions? 
  
  Also note the transform order: 
  
  translate()
  rotate()
  
  What happens if you switch the order?
  
*/

function setup() {
  createCanvas(600, 600);
  background(255);
  stroke(0);
}

function draw(){
  
  line(0, height / 2, width, height / 2);
  line(width / 2, 0, width / 2, height);

  /*
  Normally, each shape drawn after transform functions is affected--this is not always desirable, as it complicates positioning and especially rotating objects
  Use push() and pop() so that any transform functions only effect the geometric functions in-between
*/
  push();
  rectMode(CENTER);
  translate(150, 150);
  fill(255, 0, 0);
  rect(0, 0, 100, 100);
  pop(); //this function resets the transform so that anything drawn after it will be back to normal

  /*
  Normally, you will want to use rotate() AFTER translate(). The rotate() function rotates the x- and y-axis, rather than the shape itself.
  Therefore, by rotating first, you change the axis you are performing the translation on.
  
*/
  push();
  rectMode(CENTER);
  translate(450, 150);
  rotate(radians(22));
  fill(0, 0, 255);
  rect(0, 0, 100, 100);
  pop();

  push();
  rectMode(CENTER);
  translate(150, 450);
  rotate(radians(45));
  fill(0, 255, 255);
  rect(0, 0, 100, 100);
  pop();

  push();
  rectMode(CENTER);
  translate(450, 450);
  rotate(radians(67));
  fill(255, 255, 0);
  rect(0, 0, 100, 100);
  pop();
}

