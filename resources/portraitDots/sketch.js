// =============================
// Portrait from coordinates
// =============================
let portraitCoords = [
  { x: 120, y: 80 },
  { x: 130, y: 82 },
  { x: 140, y: 85 },
  { x: 150, y: 90 },
  { x: 160, y: 95 },
  { x: 170, y: 100 },
  { x: 180, y: 105 },
  { x: 190, y: 110 },
  { x: 200, y: 115 },
  // ... add as many as you need
];

let tinyImg;       // the small image used as a "dot"
let imgSize = 10;  // size to draw each tiny image (width & height)

function preload() {
  // Load your tiny image here.
  //tinyImg = loadImage("dot.png");
}

function setup() {
  // Adjust canvas size to fit your portrait
  createCanvas(400, 400);
  background(255);
  noLoop(); // we only need to draw once
}

function draw() {
  background(0); // clear background (white)
  // You can tweak offsetX / offsetY to move the portrait on the canvas
  let offsetX = 50;
  let offsetY = 50;

  // Draw one tiny image for each coordinate
  for (let i = 0; i < portraitCoords.length; i++) {
    let pt = portraitCoords[i];
    let x = pt.x+offsetX;
    let y = pt.y+offsetY;
    //image(tinyImg, pt.x + offsetX, pt.y + offsetY, imgSize, imgSize);
    circle(x, y, 30); 
  }
}
