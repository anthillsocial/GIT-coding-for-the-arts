// p5.js maze path follower
// A shape moves through a list of coordinates (waypoints).
// Movement speed is controlled by moveSpeed.
// All moves are horizontal or vertical.

let path = [
  // Edit these to change the maze path (in order)
  { x: 50,  y: 50  },
  { x: 350, y: 50  },
  { x: 350, y: 200 },
  { x: 100, y: 200 },
  { x: 100, y: 350 },
  { x: 400, y: 350 },
  { x: 400, y: 100 }
];

let moverX, moverY;     // current position of the shape
let currentIndex = 0;   // which waypoint we are moving *towards*
let moveSpeed = 2;      // pixels per frame – change this to speed up / slow down

function setup() {
  createCanvas(500, 500);
  // Start at the first coordinate
  moverX = path[0].x;
  moverY = path[0].y;
}

function draw() {
  background(20);

  // Draw the path as a simple "maze line"
  stroke(80, 150, 255);
  strokeWeight(4);
  noFill();
  beginShape();
  for (let i = 0; i < path.length; i++) {
    vertex(path[i].x, path[i].y);
  }
  endShape();

  // Draw waypoints
  noStroke();
  fill(255, 200, 0);
  for (let i = 0; i < path.length; i++) {
    circle(path[i].x, path[i].y, 8);
  }

  // Move along the path
  moveAlongPath();

  // Draw the moving shape
  fill(0, 255, 150);
  stroke(0);
  strokeWeight(2);
  rectMode(CENTER);
  rect(moverX, moverY, 20, 20);
}

function moveAlongPath() {
  // If we've reached the final point, stop (or you could loop)
  if (currentIndex >= path.length - 1) {
    return;
  }

  let target = path[currentIndex + 1];

  // Horizontal / vertical movement only
  let dx = target.x - moverX;
  let dy = target.y - moverY;

  // Move horizontally if needed
  if (abs(dx) > 0) {
    let stepX = constrain(abs(dx), 0, moveSpeed) * Math.sign(dx);
    moverX += stepX;
  }
  // Otherwise move vertically
  else if (abs(dy) > 0) {
    let stepY = constrain(abs(dy), 0, moveSpeed) * Math.sign(dy);
    moverY += stepY;
  }

  // If we've arrived at the target (exactly), go to the next point
  if (moverX === target.x && moverY === target.y) {
    currentIndex++;
  }
}
