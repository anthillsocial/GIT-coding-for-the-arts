let speed = 2;   // Sets the speed of the scroll
let frameImg, frameW, frameH, frameX;
let Ypositions = [];

let contentArray = [];
let contentImages = [
    "cat1.png",
    "cat2.png",
    "ban-cat3.png",
    "cat4.png"
];
let contentIndex = 0;     // Tracks which image comes next
let whichContent = [];    // Which image belongs to each scrolling frame

// Preload all the images
function preload() {
  // Load the frame
  frameImg = loadImage("frame.png");

  // Load the images
  for (let i = 0; i < contentImages.length; i++) {
    contentArray[i] = loadImage("images/" + contentImages[i]);
  }
}


function setup() {
  // Make the canvas full screen width
  createCanvas(windowWidth, windowHeight);

  // Define the size and X position of the frame
  frameW = frameImg.width/1.5;
  frameH = frameImg.height/1.5;
  windowResized(); // 

  // Set initial vertical positions (3 frames filling the screen)
  Ypositions = [0, frameH, frameH * 2];

  // Assign first 3 images
  for (let i = 0; i < Ypositions.length; i++) {
    whichContent[i] = contentArray[i];
  }

  // Next image to use
  contentIndex = Ypositions.length;
}


function draw() {
  background(100);

  // Loop through the array of Y values
  for (let i = 0; i < Ypositions.length; i++) {

    // Move images downward (speed could be varies by mouse)
    Ypositions[i] += speed;

    // check if a frame scrolls off-screen:
    if (Ypositions[i] > height) {
      let topY = Math.min(...Ypositions); // Find the top-most image
      Ypositions[i] = topY - frameH;      // Move frame to the top
      whichContent[i] = contentArray[contentIndex]; // Assign next image

      // Update which image to display
      contentIndex++;
      if (contentIndex >= contentArray.length) {
        contentIndex = 0;
      }
    }

    // Draw image + frame
    image(whichContent[i], frameX, Ypositions[i], 515, 590);
    image(frameImg, frameX, Ypositions[i], frameW, frameH);

    // Check if an image is in the middle of the screen
    inMiddle(Ypositions[i] );
  }
}

// Check if the image is in the middle of the screen
function inMiddle(y){
  let middleTop = height / 3;
  let middleBottom = 2 * height / 3;
  // Check the *vertical center* of the frame
  let imageCenterY = y + frameH / 2;
  if (imageCenterY > middleTop && imageCenterY < middleBottom) {
    // Draw a rectangle
    fill(255,0,0);
    rect(width/2, y+200, 100, 100);
  }
}

// Resize the canvas when the window is moved
function windowResized() {
  // Ensure the scroll keeps in the center when the
  // window is resized
  resizeCanvas(windowWidth, windowHeight);
  frameX = width/2 - frameW/2;
}
