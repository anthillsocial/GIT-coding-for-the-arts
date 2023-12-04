function setup() {
  frameRate(60)
  createCanvas(400, 400);
  gameState = 0;
  score = 0;
  isPlaying = false
  defaultTimer = 5
  lastObsSpawn = null
  playerX = null
  playerY = null
  initPlayerX = 60
  initPlayerY = 300
  DEBUG = false
  obSpeed = 0.1;
  isJumping = false
  doubleJumped = true
  maxJumpDistance = 120 
  jumpStrength = 20  
  gravityStrength = 8
  obstacles = []
  level = 1
  timeUntilSpawn = null
  gravity = -9.8
  playerVelocity = 0
  playerAcceleration = 0
  playerSize = 30
  obstacleSize = 30
  playerHalfSize = playerSize/2
  obstacleHalfSize = obstacleSize/2
  gameStarted = 0
  isDead = false
  highScores = []
}

















function draw() {
  background(255);
  switch(gameState){
    case 1: playGame()
      break
    case 2: gameOver()
      break  
    default: initGame()
  }
}

function initGame(){
  keyCode = 0
  level = 1 
  timeUntilSpawn = int(random(1, 5 - level))*1000
  countdownTimer = defaultTimer
  score = 0
  isDead = false
  obstacles = []
  playerX = initPlayerX
  playerY = initPlayerY
  fill(0)
  textSize(36)
  textStyle(BOLDITALIC);
  textAlign(CENTER,CENTER)
  text('THE JUMPING GAME!\nPress Space to Start!', 200, 200)
  textSize(15)
  text("SPACE to jump over the obstacles...\nAnd press again for a double jump",200,270)
  if(DEBUG || keyIsDown(32)){
    isPlaying = true; 
    gameState++
  }
}

function playGame(){
    if(int(millis()) - gameStarted > 10000) {
      level++
      gameStarted = int(millis())
    }
    drawHUD()
    drawPlayer()
    spawnObstacles()
    drawObstacles()

    if(isDead){
      fill(255,0,0)
      textAlign(CENTER)
      textSize(48)
      textStyle(BOLDITALIC);
      text("GAME OVER!",200,200)
      
      if(keyIsDown(32)){
        gameState++
      }
      
    }
    if (detectCollision()) {
      isDead = true
    }
}


function drawHUD(){  
  if(!isDead){
    fill(0)
    textSize(26)
    textStyle(BOLD)
    textAlign(LEFT,TOP)
    text('SCORE: '+ score, 0, 0)
  }
  rectMode(CORNER)
  fill(0)
  rect(0,initPlayerY+15, width, 100)
}

function drawPlayer(){
  rectMode(CENTER)
  strokeWeight(3)
  if(isDead){
    fill(255,0,0)
  }else{
    fill(255)
  }
  dt = deltaTime / 100
  if(isJumping) {      
    playerY -= playerVelocity * dt;
    playerVelocity += gravity * dt;
    if(playerY >= initPlayerY) {
      playerY = initPlayerY
      playerVelocity = 0
      isJumping = false
      doubleJumped = true
    }
  
  }
  
  rect(playerX,playerY,playerSize)
}


function detectCollision() {
  topOfObstacle = initPlayerY - obstacleHalfSize
  bottomOfPlayer = playerY + playerHalfSize
  playerRightSide = playerX + playerHalfSize
  playerLeftSide = playerX - playerHalfSize
  

  for(i=0; i < obstacles.length; i++) {
    obstacleLeftSide = obstacles[i].x - obstacleHalfSize
    obstacleRightSide = obstacles[i].x + obstacleHalfSize  

    if(obstacleLeftSide <= playerRightSide && obstacleRightSide >= playerLeftSide) {    
      if(bottomOfPlayer >= topOfObstacle){
          return true
        }
    }
    else {
      if(obstacleRightSide < playerLeftSide && obstacles[i].scored == false) {
        score++
        obstacles[i].scored = true
      }
      
      if(obstacleLeftSide >= playerRightSide) 
        return false;
    }
  }  
}


function drawObstacles() {
  if (isDead){
    return
  }
  dt = deltaTime /100
  for(i=0; i< obstacles.length; i++)
  {
    rectMode(CENTER)
    strokeWeight(3)
    fill(255,0,0)
    rect(obstacles[i].x,initPlayerY,obstacleSize)
    obstacles[i].x -= (15 * dt) + obstacles[i].speed   // wants to get faster as the game goes on
  }
  
  if (obstacles.length && obstacles[0].x < 0) {
    obstacles.splice(0,1)
  }
}

function spawnObstacles(){  
  if (isDead){
    return
  }
  if(int(millis()-lastObsSpawn) >= timeUntilSpawn){
    if(obstacles.length < 8){
      obstacles.push({x:410, scored:false, speed: int(random(max(1,level-1),min(level*2, 20)))})
      if(level < 5){
        timeUntilSpawn = random(1, max(0.1 , 2))*(1000) 
      }else if (level < 8){
         timeUntilSpawn = random(1, max(0.1 , 2))*(800) 
      } else if (level < 12) {
          timeUntilSpawn = random(1, max(0.1 , 2))*(720)   
      } else {
          timeUntilSpawn = random(1, max(0.1 , 2))*(500-(level*2)) 
      }
      lastObsSpawn = millis()
    }
  }  
}

function gameOver(){
  isPlaying = false
  fill(0)
  textAlign(LEFT,TOP)
  textStyle(BOLD)
  textAlign(CENTER, CENTER)
  textSize(32)
  text("Your Score: " + score,200, 100)
  textSize(24)
  text("CLICK TO RESTART", 200, 200)
}

function keyPressed() {
  if (!isDead && gameState === 1 && keyCode === 32) {
    if(isJumping && !doubleJumped) {
      playerVelocity = 30
      doubleJumped = true
    }
    if (!isJumping) {
      playerVelocity = 40
      isJumping = true;
    }
  }
}



function mouseClicked(){
  if(gameState === 2){
    gameState = 0
  }
}



