let vid;
let playing = false;
let speed = 1.0; 

function preload() {
  vid = createVideo("test.mov");
}

function setup() { 
  createCanvas(windowWidth, windowHeight);
  vid.loop();
  vid.hide(); 
} 

function draw() { 
  background(220);
  speed = map(mouseX, 0, width, 0.5, 20.0)
  vid.speed(speed);
  image(vid, 0, 0, width, height)
}

function mouseClicked() {
  if(playing){
    vid.pause();
  }else{
    vid.play();
  }
  playing = !playing;
}