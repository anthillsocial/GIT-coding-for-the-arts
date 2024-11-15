let arrayY = [10, 10, 10, 10, 10];  
let arrayX = [10, 40, 80, 120, 160]; 
let arrayCol = [];
let arraySpeed = [];

function setup() {
  createCanvas(500, 500); 
  background(0); 
  // Generates initial values for objects
  for(let i=0; i<arrayY.length; i++){
    arrayY[i] = random(0, height);
    arrayCol[i] = random(0, 255);
    arraySpeed[i] = random(0.1, 1.7);
  }
}

function draw(){
  fill(255);

  for(let i=0; i<arrayY.length; i++){
    fill(arrayCol[i]);
    ellipse(arrayX[i], arrayY[i], 20);
    arrayY[i] = arrayY[i]+arraySpeed[i]; 
    if(arrayY[i] > height){
      arrayY[i] = 0; 
      arrayX[i] = random(10, width); 
    }
  }

}