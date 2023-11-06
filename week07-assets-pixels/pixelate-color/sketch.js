let img;
let pixelation = 10;

function preload() {
  img = loadImage("thispersondoesnotexist.jpg"); 
  //https://thispersondoesnotexist.com/
}

function setup() {
  createCanvas(300, 300);
  pixelDensity(1);
}

function draw(){
  image(img, 0, 0, width, height);
  //pixelation_level = map(mouseX, 0, width, 0, 100); 
  loadPixels();
  noStroke();
  for (let x = 0; x < width; x += pixelation) {
    for (let y = 0; y < height; y += pixelation) {
      let i = (x + y * width) * 4;
      let r = pixels[i + 0];
      let g = pixels[i + 1];
      let b = pixels[i + 2];
      let a = pixels[i + 3];
      fill(r, g, b, a);
      square(x, y, pixelation);
    }
  }
}