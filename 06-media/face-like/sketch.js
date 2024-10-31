/*Interacting with captured data: 
- Face tracking library: https://github.com/auduno/clmtrackr
- p5js + clmtracker.js: https://gist.github.com/lmccart/2273a047874939ad8ad1
See:  https://aesthetic-programming.net/pages/4-data-capture.html
*/
let ctracker;
let capture;
const d = new Date();

function setup() {
  createCanvas(640, 480);
  //web cam capture
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();
  //setup face tracker
  ctracker = new clm.tracker();
  ctracker.init(pModel);
  ctracker.start(capture.elt);
}

function draw() {
  //draw the captured video on a screen with the image filter
  image(capture, 0,0, 640, 480);
  filter(INVERT);

  let positions = ctracker.getCurrentPosition();

  // Check the availability of web cam tracking
  if (positions.length) {
    /*loop through all major points of a face
    (see: https://www.auduno.com/clmtrackr/docs/reference.html)*/
    for (let i = 0; i < positions.length; i++) {
       //noStroke();
       fill(255, 255, 255, 180);//color with alpha value
       text(i, positions[i][0], positions[i][1])
    }

    // point 60 = mouth / 62 = nose
    let mouthX = positions[60][0]-20;
    let mouthY = positions[60][1]-5;

    // Create a like button 
    fill(76,105,186); 
    rect(mouthX, mouthY, 40, 25, 4,4,4,4);
    fill(255); 
    text('like', mouthX+9, mouthY+16);

    drawLeftEye(positions); 
  }
  
}

function drawLeftEye(positions){
  let i = 23; 
  fill(0,0,0,100); 
  beginShape();
    i = 23;vertex(positions[i][0], positions[i][1]);
    i = 63;vertex(positions[i][0], positions[i][1]);
    i = 24;vertex(positions[i][0], positions[i][1]);
    i = 64;vertex(positions[i][0], positions[i][1]);
    i = 25;vertex(positions[i][0], positions[i][1]);
    i = 65;vertex(positions[i][0], positions[i][1]);
    i = 26;vertex(positions[i][0], positions[i][1]);
    i = 66;vertex(positions[i][0], positions[i][1]);
  endShape(CLOSE);
}

function keyPressed() {
  console.log(key)
  //saveCanvas('face-'+d.getTime(), 'png');
}