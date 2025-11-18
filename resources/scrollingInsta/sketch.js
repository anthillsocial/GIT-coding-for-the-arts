let frameImg, frameW, frameH;
let Ypositions = [];
let speed = 2;
let contentArray = []; 
let contentImages = [
    "cat1.png",
    "cat2.png",
    "cat3.png",
    "cat4.png",
    "cat5.png"
];
let contentCount = 0;

function preload() {
  frameImg = loadImage("frame.png");
  for (let i = 0; i < contentImages.length; i++) {
    contentArray[i] = loadImage("images/"+contentImages[i]);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Set the size of the frame
  frameW = frameImg.width / 1.5;
  frameH = frameImg.height / 1.5;

  // Store the Y position of each image
  Ypositions = [
    0,        // first image at top
    frameH,   // second right below it
    frameH*2  // third right below that
  ];
}

function draw() {
  background(100);

  // SCROLL THE IMAGES
  for (let i = 0; i < Ypositions.length; i++) {
    let x = width / 2 - frameW / 2;
    Ypositions[i] += speed;
    // Infinite wrap: if image past bottom, move to top
    if (Ypositions[i] > height) {
      let minY = Math.min(...Ypositions); // find the smallest y value
      Ypositions[i] = minY - frameH;
      contentCount ++;
      if(contentCount == contentArray.length-1){
        contentCount = 0; 
      }
    }
    // Draw an image
    image(contentArray[contentCount], x, Ypositions[i],515, 590);
    
    // Cover with the frame
    image(frameImg, x, Ypositions[i], frameW, frameH);
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


