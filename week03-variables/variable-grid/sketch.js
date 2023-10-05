/* DISPLAYS A FLASHING GRID OF SQUARES 
   1. Can you make a each row a different color or shape? 
   2. Can you construct the whole grid? 
*/

// Initialise variables - available to every function
let mySize = 10; // Size of the squares 
let myPad = 10;    // Padding size 

function setup() {
    createCanvas(500, 500); // canvas width/height
    rectMode(CENTER); // Rectangle coords from the center
}

function draw(){
  // Create a grey background
  background(200); 

  // Set a random fill color 
  let r = random(255);
  let g = random(255);
  let b = random(255);  
  fill(r, g, b); 

  // Setup first value of y
  let y = mySize+myPad;

  // Generate 1st row of squares 
  rect(20, y, mySize); 
  rect(70, y, mySize); 
  rect(120, y, mySize); 
  rect(170, y, mySize); 
  rect(220, y, mySize); 
  rect(270, y, mySize); 
  rect(320, y, mySize); 
  rect(370, y, mySize); 
  rect(420, y, mySize); 
  rect(470, y, mySize); 

  // Generate 2nd row of squares 
  y = y+mySize+myPad;
  rect(20, y, mySize); 
  rect(70, y, mySize); 
  rect(120, y, mySize); 
  rect(170, y, mySize); 
  rect(220, y, mySize); 
  rect(270, y, mySize); 
  rect(320, y, mySize); 
  rect(370, y, mySize); 
  rect(420, y, mySize); 
  rect(470, y, mySize); 

  // Generate 3rd row of squares etc. 
  y = y+mySize+myPad;
  rect(20, y, mySize); 
  rect(70, y, mySize); 
  rect(120, y, mySize); 
  rect(170, y, mySize); 
  rect(220, y, mySize); 
  rect(270, y, mySize); 
  rect(320, y, mySize); 
  rect(370, y, mySize); 
  rect(420, y, mySize); 
  rect(470, y, mySize); 

  // Generate 3rd row of squares etc. 
  y = y+mySize+myPad;
  rect(20, y, mySize); 
  rect(70, y, mySize); 
  rect(120, y, mySize); 
  rect(170, y, mySize); 
  rect(220, y, mySize); 
  rect(270, y, mySize); 
  rect(320, y, mySize); 
  rect(370, y, mySize); 
  rect(420, y, mySize); 
  rect(470, y, mySize); 

  // Add some text
  let myText = "Y="+y; 
  fill(0);
  textSize(width/20);
  textAlign(CENTER, CENTER);
  text(myText,width/2, width/2);
}