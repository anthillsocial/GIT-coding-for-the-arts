//setup is run once when the webpage is first loaded
function setup() {
  //create the canvas and specify width & height
  createCanvas(600, 600);

  //turn off outline
  noStroke();
  
  //set background colour to 245 (grey)
  background(245);

}

function draw() {
  //fill(r, g, b)
  //fill can take three numerical parameters between 0 and 255
  //one for red, another for green, and a final one for blue
  //a value of 0 means complete absence of this colour from the mix, and 255 is the maximum

  //red is at maximum
  fill(255, 0, 0);
  ellipse(100, 300, 100, 100);

  fill(196, 0, 64);
  ellipse(200, 300, 100, 100);

  fill(128, 0, 128);
  ellipse(300, 300, 100, 100);

  fill(64, 0, 196);
  ellipse(400, 300, 100, 100);

  //blue is at maximum
  fill(0, 0, 255);
  ellipse(500, 300, 100, 100);
}

