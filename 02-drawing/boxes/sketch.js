//setup is run once when the webpage is first loaded
function setup() {
  createCanvas(640, 480); // 500x500 pixel canvas
  background(230);        // Light grey background 
  //noStroke();             // no outlines on shapes 
}

// Runs on an infinite loop (around 60fps)
function draw(){
    // Black | rectangle 100px wide, 100px high | 0px from left | 0px from top 
    fill(0); // Define the fill color
    rect(0, 0, 100, 100); // x & y coordinates | width & height 
         
    // Dark grey | rect h=100 w=100px | 50px from left | 60px from top   
    fill(64);
    rect(50, 50, 100, 100);
    
    // Mid grey | 100x100px rect | x=50px  | y=60px  
    fill(128)
    rect(100, 100, 100, 100);
    
    // Light grey | 100x100 px rect | 50px  | 60px from top 
    fill(196);
    rect(150, 150, 200, 200);

    // Light grey | 100x100 px rect | 50px  | 60px from top 
    fill(220);
    rect(300, 300, 400, 400);

}
  