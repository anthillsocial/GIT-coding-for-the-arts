/* 
Playing with mouse events: 
See https://p5js.org/reference/#/p5/mouseClicked 

TRY
Can you:
  - Use different shapes to an ellipse? 
  - Add new if/else statements to the draw function? 
  - Introduce stroke width and color? 
*/

let select = 0; // Color of the shape
let size = 30; // Size of the shape
let rgba = [20, 20, 20, 20]; 

function setup() {
  noStroke(); 
  createCanvas(800, 800);
}

function draw() {
  fill(rgba);
  ellipse(mouseX, mouseY, size, size);
  if(select!=2){
    size = random(10, 200);
  }
}

function mouseClicked() {
  rgba[select] = random(0,255); // Set r, g, or b 
  rgba[3] = random(5,50); // Set alpha (transparency) 
  select++; // Increment select by 1
  console.log('select: '+select); 
  if(select >= rgba.length){ // if select is greater or equal to...
    console.log('reset select'); 
    select = 0; 
  }
  return false; // mouseClicked expects this
}
