/* DISPLAYS A FLASHING GRID OF SQUARES 
   1. Can you make a each row a different color or shape? 
   2. Can you construct the whole grid? 
*/

// Initialise variables - available to every function
let mySize = 10; // A Number - specifies size of the squares 
let myPad = 10;  // A Number - Padding size 


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

  // For loop to create y values
  let y = myPad+mySize; // The starting y coordinate 
  let canvasHeight = height; // 'height' is the height of the canvas
  for(y; y<canvasHeight; y=y+mySize+myPad+myPad){ // Begin loop use y +=
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
    rotate(millis() / 5000);
  } // End of loop 

  // Add some text
  push(); 
    let myText = "Y="+y; 
    fill(0);
    textSize(width/20);
    textAlign(CENTER, CENTER);
  
    text(myText,width/2, width/2);
  pop(); 
}