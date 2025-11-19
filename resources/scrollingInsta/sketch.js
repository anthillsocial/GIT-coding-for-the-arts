let speed = 2;           // Scroll speed (could be set via mouse)
let frameImg;
let frameW, frameH, frameX;

let yPositions = [];     // Y position of each frame
let imageIndex = [];     // Which image (by number) each frame shows

let contentImages = [
  "cat1.png",
  "ban-cat3.png",
  "cat2.png",
  "cat4.png"
];

let contentPics = [];    // Loaded images
let nextIndex = 0;       // Next image number to use when a frame wraps


function preload() {
  // Load the frame
  frameImg = loadImage("frame.png");

  // Load all cat images
  for (let i = 0; i < contentImages.length; i++) {
    contentPics[i] = loadImage("images/" + contentImages[i]);
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight);

  // Work out frame size and centre position
  frameW = frameImg.width / 1.5;
  frameH = frameImg.height / 1.5;
  frameX = width / 2 - frameW / 2;

  // Start three frames stacked from top to bottom
  yPositions[0] = 0;
  yPositions[1] = frameH;
  yPositions[2] = frameH * 2;

  // First three images
  imageIndex[0] = 0;
  imageIndex[1] = 1;
  imageIndex[2] = 2;

  // The next image to use when a frame reappears at the top
  nextIndex = 3;
}


function draw() {
  background(100);

  // Loop through the array of frame postions
  // Create an infinte loop
  for (let i = 0; i < yPositions.length; i++) {

    // Move current frame down
    yPositions[i] = yPositions[i] + speed;

    // Check if the frame has got offscreen
    updateYposition(i); 

    // Set which image the frame should show
    let idx = imageIndex[i];

    // Draw the image
    image(contentPics[idx], frameX, yPositions[i], frameW, frameH);

    // Draw the frame on top
    image(frameImg, frameX, yPositions[i], frameW, frameH);

    // Check if this frame is in the middle and draw name if it is
    showNameIfMiddle(contentImages[idx], yPositions[i]);
  }
}


function showNameIfMiddle(imageName, y) {
  // Centre of this frame
  let centreY = y + frameH / 2;

  // Middle band of the screen (middle third)
  let middleTop = height / 3;
  let middleBottom = 2 * height / 3;

  // Check if "ban-" is inn the image filename
  let banned = false; 
  if (imageName.includes("ban-")) {
    banned = true; 
  }

  // Display a red box if
  if (centreY > middleTop && centreY < middleBottom && banned) {
    // Initial postions of box & text
    let boxX = width/2+130;
    let boxY = y+150; 
    // Red box in the middle of the screen
    fill(255, 0, 0);
    let boxW = 220;
    let boxH = 40;
    rect(boxX, boxY, boxW, boxH);
    // Draw filename in white on top
    fill(255);
    textSize(30);
    textAlign(CENTER, CENTER);
    text(imageName, boxX+100, boxY+15);
  }
}

function updateYposition(i){
// If it has moved off the bottom of the screen...
    if (yPositions[i] > height) {

      // 1. Find the highest (smallest) y value
      let topY = yPositions[0];
      for (let j = 1; j < yPositions.length; j++) {
        if (yPositions[j] < topY) {
          topY = yPositions[j];
        }
      }

      // 2. Move this frame above the highest one
      yPositions[i] = topY - frameH;

      // 3. Give this frame the next image
      imageIndex[i] = nextIndex;

      // 4. Update nextIndex and wrap if needed
      nextIndex = nextIndex + 1;
      if (nextIndex >= contentImages.length) {
        nextIndex = 0;
      }
    }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  frameX = width / 2 - frameW / 2;
}
