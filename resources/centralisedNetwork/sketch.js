// Network explosion with a base speed and random per-node speed multipliers

let centerX, centerY;
let nodes = [];
let exploded = false;
let numNodes = 160;

let baseSpeed = 0.38; // <<< overall explosion speed

function setup() {
  createCanvas(windowWidth, windowHeight);
  centerX = width / 2;
  centerY = height / 2;
}

function draw() {
  background(10);

  // Instructions
  fill(200);
  noStroke();
  textAlign(CENTER);
  textSize(16);
  if (!exploded) {
    text("power the network", width / 2, 40);
  } else {
    text("exploded", width / 2, 40);
  }

  // If not exploded, stop here
  if (!exploded) return;

  // Draw arms + nodes
  stroke(150);
  strokeWeight(1.5);
  fill(200, 200, 200);

  for (let n of nodes) {

    // Each node animates at "baseSpeed * randomMultiplier"
    if (n.t < 1) {
      n.t += baseSpeed * n.speedFactor;
    }
    n.t = constrain(n.t, 0, 1);

    // Blend from centre to target
    let x = lerp(centerX, n.targetX, n.t);
    let y = lerp(centerY, n.targetY, n.t);

    // Draw line + dot
    line(centerX, centerY, x, y);
    ellipse(x, y, 5, 5);
  }

    // Central point
  fill(255);
  ellipse(centerX, centerY, 16, 16);
}

function mousePressed() {
  if (!exploded) {
    exploded = true;

    // Generate nodes with random targets and randomised speeds
    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        targetX: random(60, width - 60),
        targetY: random(80, height - 40),
        t: 0,                     // animation position
        speedFactor: random(0.5, 2) // multiplier of baseSpeed
      });
    }
  }else{
    exploded = false;
    nodes = [];
    numNodes = random(600);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  centerX = width / 2;
  centerY = height / 2;
}
