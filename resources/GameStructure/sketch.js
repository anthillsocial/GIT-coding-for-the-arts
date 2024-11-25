let myStatus = 0;
let x = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  if(myStatus==0){
    startScreen();
  }else if(myStatus==1){
    levelOne(); 
  }else if(myStatus==2){
    levelTwo(); 
  }else if(myStatus==3){
    end(); 
  }
}

function keyPressed(){
  if (key == ' '){ //this means space bar, since it is a space inside of the single quotes 
    myStatus ++; 
    x = 0;
  }  
  if(myStatus>3){
    myStatus = 0;
  }
}


function startScreen(){
  fill(100);
  textSize(100);
  textAlign(CENTER)
  text("START!!", windowWidth/2, windowHeight/2);
  text("space-bar to start", windowWidth/2, windowHeight/2+100);
  text("and control the game", windowWidth/2, windowHeight/2+200);
}

function levelOne(){
  fill(100);
  textSize(100);
  textAlign(CENTER)
  text("LEVEL ONE", windowWidth/2, windowHeight/2);
  fill(255, 0, 0);
  circle(x, 300, 30);
  x = x+10;
  x = x % windowWidth;
}

function levelTwo(){
  fill(100);
  textSize(100);
  textAlign(CENTER)
  text("LEVEL TWO", windowWidth/2, windowHeight/2);
  fill(0, 0, 255);
  circle(x, 300, 30);
  circle(x+44, 330, 30);
  circle(x+54, 360, 30);
  x = x+30;
  x = x % windowWidth;
}

function end(){
  fill(100);
  textSize(100);
  textAlign(CENTER)
  text("END!", windowWidth/2, windowHeight/2);
  text("space-bar to restart the game", windowWidth/2, windowHeight/2+100);
}

