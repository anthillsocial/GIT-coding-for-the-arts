// IMPORTANT NOTE: "GO LIVE" FROM VSC MUST BE ACTIVE FOR THIS GAME TO WORK ON INDEX

// Function for generating rectangles

let bullets = []
let enemies = []
let score = 0
var bg;

function rectangle(x, y, w, h){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  
  this.draw = function(){
    push();
   fill(0, 255, 0); 
    rect(this.x, this.y, this.w, this.h)
    pop();
  }
}

let jumpPressed = false;

// The player object
let p = {
  x: 100,
  y: 100,
  w: 30, 
  h: 30,
  vx: 0,
  vy: 0,
  anticipate: "FLOOR",
  onGround: false,
  colliding: false,
  jump: false,
  draw: function() {
    rect(this.x, this.y, this.w, this.h)
  },

  // Arrow key functions
  update: function() {
    if(!this.onGround) {
      this.vy += 0.3;
      if(keyIsDown(LEFT_ARROW)){
        this.vx -= 0.3
      }
      if(keyIsDown(RIGHT_ARROW)){
        this.vx += 0.3
      }
      this.vx *= 0.95
    } else {
      this.vy = 0;
      
      if(keyIsDown(LEFT_ARROW)){
        this.vx -= 1.2
      }
      if(keyIsDown(RIGHT_ARROW)){
        this.vx += 1.2
      }
      
      if(keyIsDown(UP_ARROW) && jumpPressed) this.jump = true;
      if(this.jump){
        this.vy = -10;
        this.jump = false;
        this.onGround = false;
      }
      this.vx *= 0.8
    }
    this.y += this.vy;
    this.x += this.vx;
  }

}

// Enable background image
function preload() {
  bg = loadImage("gamebackground.jpg");
}

function setup() {
  createCanvas(910, 910);
  // All platforms/surfaces in this game
  rect2 = new rectangle(10, height-800, 700, 20) // beginning platform
  rect3 = new rectangle(120, height-700, 800, 20) // second platform
  rect4 = new rectangle(10, height-600, 700, 20) // third platform
  rect5 = new rectangle(120, height-500, 800, 20) // fourth platform

  rect6 = new rectangle(10, height-400, 700, 20) // fifth platform
  rect7 = new rectangle(120, height-300, 800, 20) // sixth platform
  rect8 = new rectangle(10, height-200, 700, 20) // seventh platform
  rect9 = new rectangle(120, height-100, 680, 20) // eighth platform
  rect10 = new rectangle(10, height-20, 1000, 20) // ninth platform
  rect11 = new rectangle(800, height-780, 20, 700) // right wall 2

  rect12 = new rectangle(10, height-920, 1000, 20) // ceiling
  rect13 = new rectangle(0.5, height-950, 20, 950) // left wall
  rect14 = new rectangle(800, height-900, 200, 700) // right wall
  rect15 = new rectangle(870, height-120, 100, 200) // ending
  rects = [rect2, rect3, rect4, rect5, rect6, rect7, rect8, rect9, rect10, rect11, rect12, rect13, rect14, rect15] // to present platforms in index
  
  // The "origin" code below enables the screen to move with player
  // origin = {
  //   x: width/2,
  //   y: height/2
  // }

  center = {
    x: width/2,
    y: height/2
  }
  dx = center.x - p.x;
  dy = center.y - p.y;

    // spawn enemies
  for (let i = 0; i < 0.1; i++ ){
    let enemy = {
      x: random(0, width/2),
      y: random(-800, 0)    
    }

    
    enemies.push(enemy)
  }
}

function draw() {
  background(0, 0, 255);
  imageMode(CENTER);
  image(bg, width/2, height/2, width, height);
  
  //Make game visible / centered on player
  dx = center.x - p.x;
  dy = center.y - p.y;
  
  //If removed, background does not move with player
  if(abs(dx) > 100){
    center.x -= dx - 100 * dx / abs(dx)
  }
  
  if(abs(dy) > 100){
    center.y -= dy - 100 * dy / abs(dy)
  }
  
  translate(origin.x - center.x, origin.y - center.y)
  
  p.colliding = false;
  
  for(let i = 0; i < rects.length; i++){
    let r = rects[i];
    let top = new rectangle(r.x, r.y - 10, r.w, 10)
    let btm = new rectangle(r.x, r.y + r.h, r.w, 10)
    let lt = new rectangle(r.x - 10, r.y, 10, r.h)
    let rt = new rectangle(r.x + r.w, r.y, 10, r.h)
    
    // Draw colliders
    // top.draw()
    // btm.draw()
    // lt.draw()
    // rt.draw()

    // Additional Criteria or Smoother Gameplay
    if(rectCollision(lt, p) && p.vx > 0 && p.y + p.h - 10 > top.y + top.h){
      p.anticipate = "LEFT"
    }
    if(rectCollision(rt, p) && p.vx < 0 && p.y + p.h - 10 > top.y + top.h){
      p.anticipate = "RIGHT"
    }
    if(rectCollision(btm, p)) {0
      p.anticipate = "CEILING"
    }
    if(rectCollision(top, p) && p.y + p.h-5 < top.y + top.h && p.vy > 0){
      p.anticipate = "FLOOR"
    } 
    
    if(rectCollision(lt, p)){
      p.anticipate = "LEFT"
    }
    if(rectCollision(rt, p)){
      p.anticipate = "RIGHT"
    }
    if(rectCollision(btm, p)) {
      p.anticipate = "CEILING"
    }
    if(rectCollision(top, p)){
      p.anticipate = "FLOOR"
    } 
    
    if(rectCollision(p, r)){
      if(p.anticipate == "FLOOR"){
        p.vy = 0;
        p.y = r.y - p.h 
        p.onGround = true;
        p.colliding = true;
      }
      if(p.anticipate == "CEILING"){
        if(p.vy < 0) {
          p.vy = 0;
          p.y = r.y + r.h
        } 
        p.colliding = true;
      }
      if(p.anticipate == "RIGHT"){
        p.vx = 0;
        p.x = r.x + r.w
        p.colliding = true;
      }
      if(p.anticipate == "LEFT"){
        p.vx = 0;
        p.x = r.x - p.w
        p.colliding = true;
      }
    }
  }
  
  if(!p.colliding) p.onGround = false
  
  p.update()
  p.draw()
  for(let i = 0; i < rects.length; i++){
    rects[i].draw()
  }
  jumpPressed = false;

  circle(mouseX, height - 20, 45)
  
  //update and draw bullets
  for (let bullet of bullets){
    bullet.y -= 10 // speed
    circle(bullet.x, bullet.y, 60) // size
  }

  // update and draw enemies
  for (let enemy of enemies){
    enemy.y += 5 // speed of falling
    rect(enemy.x, enemy.y, 20) // size of enemies
    
    // Ending screens
    /*
Enables active participation from BOTH the shooter and platformer; if the shooter lets one enemy hit the ground or if the player gets hit by an enemy, they will lose.
    */
    if(enemy.y > height){
      text("YOU LOST", 400, 390, width/10, height/10) // text position
      noLoop()
    }
    if(enemy.y > p.y && enemy.x > p.x && enemy.x < p.x+p.w && enemy.y < p.y + p.h){
      text("YOU LOST", 400, 390, width/10, height/10) // text position
      noLoop()
    }

   /*
   When the platformer player reaches the top of the higher platform on the bottom floor, the game will still be over, but this time, they will win.
   */

    if(rect15.y > p.y && rect15.x > p.x && rect15.x < p.x+p.w && rect15.y < p.y + p.h){
      text("YOU WIN!", 400, 390, width/10, height/10) // text position
      noLoop()
    }
    console.log(p.w)
  }
  
  // deal with collisions
  for(let enemy of enemies){
    for (let bullet of bullets){
      if (dist(enemy.x, enemy.y, bullet.x, bullet.y) < 10){
        enemies.splice(enemies.indexOf(enemy), 1) // to get rid of one enemy at some index
        bullets.splice(bullets.indexOf(bullet), 1)
   let newEnemy = {
      x: random(0, width),
      y: random(-100, 0)    
    }
    enemies.push(newEnemy)
    score += 1

    // Enemies STOP falling when recognized that they are not being shot at.
        }
      }
    }

    text(score, 25, 30)
    textSize(42) // size of text on screen (lose screen, win screen, score)
  }

function mousePressed(){
  // allows bullets to fire whenever the mouse is clicked
  let bullet = {

    x: mouseX,
    y: height - 90 // point where bullets erupt from circle
  }
  bullets.push(bullet)
}

function keyPressed(){
  if(keyCode == 38){
    jumpPressed = true;
    if(p.onGround) p.jump = true;
  }
}

function rectCollision(r1, r2){
  if (
    r1.x < r2.x + r2.w &&
    r1.x + r1.w > r2.x &&
    r1.y < r2.y + r2.h &&
    r1.h + r1.y > r2.y
  ) {
    return true
  } else {
    // No collision
    return false
  }
}
