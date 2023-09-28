/* * * * * * * * * * * * * * * * * * * * * * * *
          MA1805 Grey Squares
 * * * * * * * * * * * * * * * * * * * * * * * */


//setup is run once when the webpage is first loaded
function setup() {
  createCanvas(500, 500); //this is a 500 pixel by 500 pixel square canvas
  
  //turn off outlines
  noStroke();
  
    //set the background colour to 255 (white)
  background(255);
  
  //set fill color to black
  fill(0);
  //draw a 100-pixel square in the top left of the canvas
  rect(0, 0, 100, 100);
  
  //fill is dark grey
  fill(64);
  //another square 100 pixels in from the top left
  rect(100, 100, 100, 100);
  
  //fill is medium grey
  fill(128)
  //again, this time 200 pixels in on the x and y axes
  rect(200, 200, 100, 100);
  
  //fill is light grey
  fill(196);
  //draw a 200-pixel square, 300 pixels in on the x and y axes
  rect(300, 300, 200, 200);
  
}
