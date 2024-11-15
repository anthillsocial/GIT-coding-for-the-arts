let lines
let linesY = []; 
let scrollSpeed = 0.8; // Speed of scroll
let lineHeight = 15;   // Space between lines 

function preload() {
  // Loads the text file as an array of lines
  lines = loadStrings('data.csv');
}

function setup() {
  createCanvas(400, 400);
  setupText()
}

function draw() {
  background(150);
  fill(200, 0, 0); 
  textScroll(); 
}

// Scroll the text
function textScroll(){
  push(); // Save colours/tranforms from the main draw
  fill(0); 
  for (let i = 0; i < lines.length; i++) {
    text(lines[i], 100, linesY[i]); // text, x, y
    linesY[i] -= scrollSpeed; 
  }
  // Check of the last line has disappeared off the top
  if(linesY[lines.length-1] <= 0){
    setupText(); 
  }
  pop(); // Back to original colours/transforms
}

// Generate the starting Y positions
function setupText(){
  // Pint the lines array to the console
  console.log(lines); 
  // Loop through each line of text
  for (let i = 0; i < lines.length; i++) {
    // Define a starting position for a line 
    linesY[i] = i*lineHeight+height; 
  }
}