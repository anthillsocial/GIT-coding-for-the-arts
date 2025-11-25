// Simple personality-test sketch with fade-in questions
// and an "artistic" face portrait made of dots.

let questions = [
  {
    text: "You wake up on a free day. What do you do first?",
    options: [
      { label: "Check your phone", trait: "focus", delta: -1 },
      { label: "Plan your day", trait: "focus", delta: 1 },
      { label: "Go back to sleep", trait: "energy", delta: -1 }
    ]
  },
  {
    text: "At a party, you tend to...",
    options: [
      { label: "Talk to everyone", trait: "social", delta: 2 },
      { label: "Stick with close friends", trait: "social", delta: 0 },
      { label: "Watch from the corner", trait: "social", delta: -2 }
    ]
  },
  {
    text: "You’re starting a new project. You feel...",
    options: [
      { label: "Excited and energised", trait: "energy", delta: 2 },
      { label: "Calm and steady", trait: "focus", delta: 1 },
      { label: "Overwhelmed", trait: "energy", delta: -1 }
    ]
  },
  {
    text: "Someone suggests a spontaneous trip.",
    options: [
      { label: "Say yes immediately", trait: "energy", delta: 1 },
      { label: "Ask for details first", trait: "focus", delta: 1 },
      { label: "Probably say no", trait: "social", delta: -1 }
    ]
  }
];

// Trait scores for building the personality "portrait"
let traits = {
  energy: 0,
  social: 0,
  focus: 0
};

let currentQuestion = 0;
let fadeAlpha = 0;
let fadeSpeed = 6;

let questionStartTime = 0;
let autoDelay = 2000; // ms until auto-select if no click
let answeredThisQuestion = false;
let finished = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("sans-serif");
  textSize(18);
  startQuestion(0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function startQuestion(index) {
  currentQuestion = index;
  fadeAlpha = 0;
  answeredThisQuestion = false;
  questionStartTime = millis();
}

function draw() {
  background(15);

  // Divide canvas: left = questions, right = portrait
  let dividerX = width * 0.55;
  stroke(80);
  line(dividerX, 0, dividerX, height);

  drawPortrait(dividerX);

  if (!finished) {
    drawQuestionArea(dividerX);
    handleAutoSelect();
  } else {
    drawFinishedMessage(dividerX);
  }
}

// Draw the current question & its options on the left, with fade-in
function drawQuestionArea(dividerX) {
  let margin = 40;
  let x = margin;
  let y = margin;

  let q = questions[currentQuestion];

  // Increase alpha until fully visible
  fadeAlpha = min(255, fadeAlpha + fadeSpeed);

  // Question text
  noStroke();
  fill(255, fadeAlpha);
  textAlign(LEFT, TOP);
  textSize(22);
  text(q.text, x, y, dividerX - margin * 2, height * 0.4);

  // Options
  textSize(16);
  let optionY = y + 120;
  let optionHeight = 40;
  let gap = 15;

  for (let i = 0; i < q.options.length; i++) {
    let opt = q.options[i];

    let boxX = x;
    let boxY = optionY + i * (optionHeight + gap);
    let boxW = dividerX - margin * 2;
    let boxH = optionHeight;

    // Box
    stroke(200, fadeAlpha);
    noFill();
    rect(boxX, boxY, boxW, boxH, 6);

    // Text
    noStroke();
    fill(230, fadeAlpha);
    textAlign(LEFT, CENTER);
    text(opt.label, boxX + 10, boxY + boxH / 2);
  }
}

// Auto-select an option after autoDelay ms if no answer
function handleAutoSelect() {
  if (answeredThisQuestion) return;

  let elapsed = millis() - questionStartTime;
  if (elapsed > autoDelay) {
    autoChoose();
  }
}

// Randomly pick an option
function autoChoose() {
  let q = questions[currentQuestion];
  let index = floor(random(q.options.length));
  selectOption(q.options[index]);
}

// Handle mouse clicks on options
function mousePressed() {
  if (finished) return;
  if (answeredThisQuestion) return;

  let dividerX = width * 0.55;
  let margin = 40;
  let x = margin;
  let q = questions[currentQuestion];

  let optionY = margin + 120;
  let optionHeight = 40;
  let gap = 15;
  let boxW = dividerX - margin * 2;
  let boxH = optionHeight;

  for (let i = 0; i < q.options.length; i++) {
    let boxX = x;
    let boxY = optionY + i * (optionHeight + gap);

    if (
      mouseX >= boxX &&
      mouseX <= boxX + boxW &&
      mouseY >= boxY &&
      mouseY <= boxY + boxH
    ) {
      selectOption(q.options[i]);
      break;
    }
  }
}

// Apply the option's effect to traits and move on
function selectOption(option) {
  answeredThisQuestion = true;

  // Update trait score
  if (traits.hasOwnProperty(option.trait)) {
    traits[option.trait] += option.delta;
  }

  // Move to next question or finish
  if (currentQuestion < questions.length - 1) {
    startQuestion(currentQuestion + 1);
  } else {
    finished = true;
  }
}

// --- Artistic "face" portrait made of dots ---
function drawPortrait(startX) {
  let margin = 40;

  // Background panel
  noStroke();
  fill(20);
  rect(startX, 0, width - startX, height);

  let panelW = width - startX - margin * 2;
  let panelH = height - margin * 2;

  let cx = startX + margin + panelW / 2;
  let cy = margin + panelH / 2;
  let headR = min(panelW, panelH) * 0.35;

  // Normalised trait values (0..1)
  let normEnergy = constrain(map(traits.energy, -6, 6, 0, 1), 0, 1);
  let normSocial = constrain(map(traits.social, -6, 6, 0, 1), 0, 1);
  let normFocus  = constrain(map(traits.focus,  -6, 6, 0, 1), 0, 1);

  // Title
  fill(255);
  textAlign(CENTER, TOP);
  textSize(20);
  text("Personality Face", cx, margin);

  // Keep dots stable from frame to frame
  randomSeed(42);

  // Head outline
  noFill();
  stroke(220);
  strokeWeight(2);
  // Slightly taller than wide
  ellipse(cx, cy, headR * 2, headR * 2.3);

  // Eyes (just simple circles, size linked to focus)
  let eyeOffsetX = headR * 0.4;
  let eyeOffsetY = headR * -0.2;
  let eyeR = lerp(headR * 0.08, headR * 0.16, normFocus);

  fill(240);
  noStroke();
  ellipse(cx - eyeOffsetX, cy + eyeOffsetY, eyeR, eyeR);
  ellipse(cx + eyeOffsetX, cy + eyeOffsetY, eyeR, eyeR);

  // Pupils: more focused = more centred
  let pupilOffset = lerp(eyeR * 0.3, eyeR * 0.1, normFocus);
  fill(20);
  ellipse(cx - eyeOffsetX + pupilOffset, cy + eyeOffsetY, eyeR * 0.3, eyeR * 0.3);
  ellipse(cx + eyeOffsetX - pupilOffset, cy + eyeOffsetY, eyeR * 0.3, eyeR * 0.3);

  // Nose (simple line)
  stroke(180);
  strokeWeight(2);
  line(cx, cy - headR * 0.1, cx, cy + headR * 0.2);

  // Mouth: curvature linked to social
  let mouthY = cy + headR * 0.5;
  let mouthWidth = headR * 0.9;
  let smile = map(normSocial, 0, 1, -headR * 0.2, headR * 0.25); // frown to smile

  noFill();
  stroke(220);
  strokeWeight(2);
  beginShape();
  for (let t = -1; t <= 1; t += 0.1) {
    let x = cx + t * mouthWidth * 0.5;
    let y = mouthY + smile * (1 - t * t); // simple curve
    vertex(x, y);
  }
  endShape();

  // --- Dots: encode metrics ---

  // 1) Forehead dots = focus
  let nForehead = 10 + int(normFocus * 40);
  noStroke();
  fill(120, 180, 255, 180); // bluish
  for (let i = 0; i < nForehead; i++) {
    let fx = random(cx - headR * 0.35, cx + headR * 0.35);
    let fy = random(cy - headR * 0.9, cy - headR * 0.2);

    // Roughly keep inside head ellipse
    let ex = (fx - cx) / headR;
    let ey = (fy - cy) / (headR * 1.15);
    if (ex * ex + ey * ey <= 1) {
      let r = lerp(3, 7, normFocus);
      circle(fx, fy, r);
    }
  }

  // 2) Cheek dots = energy
  let nCheek = 15 + int(normEnergy * 60);
  fill(255, 120, 140, 180); // reddish
  for (let i = 0; i < nCheek; i++) {
    let side = random() < 0.5 ? -1 : 1; // left or right cheek
    let baseX = cx + side * headR * 0.4;
    let baseY = cy + headR * 0.2;
    let offsetX = random(-headR * 0.15, headR * 0.15);
    let offsetY = random(-headR * 0.15, headR * 0.15);
    let px = baseX + offsetX;
    let py = baseY + offsetY;

    let r = lerp(2, 10, normEnergy);
    circle(px, py, r);
  }

  // 3) Halo dots = social
  let nHalo = 10 + int(normSocial * 70);
  fill(255, 230, 120, 150); // yellowish
  noStroke();
  for (let i = 0; i < nHalo; i++) {
    let angle = random(TWO_PI);
    let radius = headR * 1.2 + random(headR * 0.1, headR * 0.3);
    let hx = cx + cos(angle) * radius;
    let hy = cy + sin(angle) * radius;
    let r = lerp(2, 8, normSocial);
    circle(hx, hy, r);
  }

  // Small legend at bottom-right of panel
  textAlign(LEFT, BOTTOM);
  textSize(12);
  fill(200);
  let legendX = startX + margin;
  let legendY = height - margin * 0.7;
  text(
    "energy: " + traits.energy +
    "   social: " + traits.social +
    "   focus: " + traits.focus,
    legendX,
    legendY
  );
}

function drawFinishedMessage(dividerX) {
  let margin = 40;
  let x = margin;
  let y = height - margin * 2;

  fill(255);
  textAlign(LEFT, TOP);
  textSize(18);
  text("Test complete. This is your current personality face.", x, y);
}
