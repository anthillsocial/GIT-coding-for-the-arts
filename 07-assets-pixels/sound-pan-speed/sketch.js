let amen; // amen break

function preload() {
  // Specify sound format - stick with .wav, .mp3, or .ogg)
  soundFormats("wav"); 
  amen = loadSound("assets/amen.wav");
  call = loadSound("assets/CallCentre.wav");
}

function setup() {
  createCanvas(500, 500);
  userStartAudio(); //tells the browser to prepare to play sounds (required by some browsers for security purposes)
  amen.playMode("restart"); //try out 'sustain' instead of 'restart' here
  call.playMode("restart");
  call.play();
  amen.setVolume(0.1);// between 0.0 and 1.0
  call.setVolume(2.0); // between 0.0 and 1.0
}

function draw() {
  background(0);
  
  // Set the pan of the sound 
  // - convert mouseX to a value between -1 and 1
  let pan = map(mouseX, 0, width, -1, 1); 
  amen.pan(pan);

  // Set volume 
 
  
  // Set the sample speed 
  // - convert mouseY to a value between -1 and 1
  let playbackRate = map(mouseY, 0, height, 0.2, 2);
  amen.rate(playbackRate);
  
  // Draw crosshairs
  stroke(255);
  line(mouseX, 0, mouseX, height);
  line(0, mouseY, width, mouseY);

  // Text info explaining sound characteristics
  let myText = "Playing: "+amen.isPlaying(); 
  myText += "\nPlayback Rate: " +playbackRate.toPrecision(3); 
  myText += "\nPan: " + pan.toPrecision(2); 
  noStroke();
  fill(255, 0, 0);
  text(myText, 5, height-50);
}

function mousePressed() {
  amen.stop();
  amen.play();
}
