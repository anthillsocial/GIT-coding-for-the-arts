/* 
Pixilating images with P5

Evolved from Andrew Sink's pixelation example. See: 
https://www.youtube.com/watch?v=KfLqRuFjK5g

Inspired by the 'Brightness Mirror' by Dan Shiffman: 
http://learningprocessing.com/examples/chp16/example-16-08-BrightnessMirror
*/ 

let img; // A variable to store the image in
let startx = 0 // starting x coordinate
let starty = 0 // starting y coordinate

function preload() {
  img = loadImage('survey.jpg'); // preloads cat picture!
}

function setup() {
  // creates a canvas as big as the browser area
  createCanvas(500, 667); 
  // Prepare the loaded image
  img.loadPixels(); // loads image
  img.resize(500, 0); // resizes image to fit canvas
  img.updatePixels(); // updates image
  // Border or no border
  //noStroke(); // disables element stroke
}

function draw() {
  clear();
  background(0);
  image(img, 20, 20);


  let size = floor(map(mouseX, 0, width, 7, 40)); // maps mouseX value to element size

  // Loop through all the pixels in the image
  for (let starty=0; starty<img.height; starty++) { // Rows first
    for (let startx=0; startx<img.width; startx++) {
      let index = (startx+starty*img.width)*4;

      // Convert colour image to greyscale
      let r = img.pixels[index+0];
      let g = img.pixels[index+1];
      let b = img.pixels[index+2];
      let bright = ((0.3*r)+(0.59*g)+(0.11*b)) // calc grayscale
      fill(bright) // fills element with adjusted grayscale

      // Draw a shape as a pixel 
      //rect(startx, starty, size, size);
      strokeWeight(2)
      stroke(bright);
      if(bright > 100){
        line(startx, starty, startx+10, starty+10);
      }else{
        line(startx, starty, startx+5, starty+5);
      }
      
      //triangle(startx, starty, startx + (size / 2), starty + size, startx + size, starty) // upside down triangle
      //triangle(startx, starty, startx, starty + size, startx + size, starty)

      startx = startx+size -1 // set new startx value
    }
    starty = starty+size-1 // set new starty value
  }
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('pixilated', 'png');
  }
}
