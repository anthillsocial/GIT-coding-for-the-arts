/* AUOMATICALLY GENERATED GRID  
   1. Can you create a grid of circles? 
   2. Can you create a grid of squares and circles?
   3. Can you adjust the rows and cols? 
   4. Can you shift sWidth and sHeight variables
      into the draw functioin and dynamically change 
      them obver time?  
*/

// Initialise variables - available to every function
let width = 600;  // Width of the canvas
let height = 500; // Height of the canvas
let row = 10;     // Number of shapes in a row
let col = 10;     // Number of shapes in a col
let pad = 8;      // Padding between shapes 
let sWidth = ((width-pad)-(pad*row))/10; // Calc height of shapes
let sHeight = ((height-pad)-(pad*col))/10; // Calc height of shapes
let rgb;          // Initialise rgb array

function setup() {
    createCanvas(width, height); // canvas width/height
    rgba = [random(255), random(255), random(255), 100]; 
    rectMode(CENTER); // Rectangle coords from the center
    noStroke();
}

function draw(){
  // Create a grey background and rbg fill
  background(200); 
  
  // Loop through Y values
  for(let i=0; i<col; i++){
    let y = pad + (sHeight/2) + (sHeight*i) + (i*pad); 
    
    // Loop through X values
    for(let ii=0; ii<row; ii++){
      let x = pad + (sWidth/2) + (sWidth*ii) + (ii*pad); 
      fill(rgba); 
      rect(x, y, sWidth, sHeight);  
      //fill(rgba); 
      //ellipse(x, y, sWidth, sHeight);  
    }

  } 

}
