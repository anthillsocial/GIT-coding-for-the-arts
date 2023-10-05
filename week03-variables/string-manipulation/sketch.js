let a = "The ";        
let b = 'number is: '   
let c = 1; // a number 

function setup(){
  createCanvas(windowWidth, windowHeight);
  let myText = a+b+c; 
	// Combine
  fill(0);
  textSize(width/20);
  textAlign(CENTER, CENTER);
  text(myText, width/2, height/2); 
}