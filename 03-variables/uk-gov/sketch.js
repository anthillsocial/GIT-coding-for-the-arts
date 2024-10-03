let i = 0;

// Text obtained from  UK Government website 
const housingText = "Need for new housing arises when population growth leads to new households forming, but other factors also have an effect. There’s a backlog of need among people currently living in unsuitable accommodation, and affordability pressures can prevent people accessing the housing they need.According to one estimate commissioned by the National Housing Federation (NHF) and Crisis from Heriot-Watt University, around 340,000 new homes need to be supplied in England each year, of which 145,000 should be affordable.";
const textArray = housingText.split(" "); // Convert the text into an an array (list) of words. 


function setup(){
	createCanvas(500, 500); 
  frameRate(10); // set the speed of the sketch 
}

function draw(){
  let x = random(width)
  let y = random(height);

  if (i < textArray.length) { // is i less-than the number of words in the text
    fill(0);
    stroke(100);
    console.log(i);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(textArray[i], x, y); 
    i++;
  }else{
    i=0; // reset the counter
    background(255); // clear the background 
  }

}