
let circleCount = 20; // Number of circles
let circleRadius = 10; // Radius of each circle
let maxExpansion = 100; // Maximum distance from the center
let inhaleSpeedSlider, exhaleSpeedSlider; // Slider objects
let inhaleSpeed = 0.5; // Speed of inhale motion
let exhaleSpeed = 0.5; // Speed of exhale motion
let inhale = true; // Flag to switch between inhale and exhale
let margin=1000;

function setup() {
  createCanvas(windowWidth-margin, windowHeight-margin);

  
  // Inhale slider setup
  inhaleSpeedSlider = createSlider(0.2, 1, inhaleSpeed, 0.01);
  inhaleSpeedSlider.position(20, height + 20);

  // Exhale slider setup
  exhaleSpeedSlider = createSlider(0.2, 1, exhaleSpeed, 0.01);
  exhaleSpeedSlider.position(20, height + 50);
}

function draw() {
  background(255);
  fill(255);
  stroke(0);
  strokeWeight(8);
  rect(0,0,windowWidth-margin,windowHeight-margin);
  // Calculate the position of the center
  let x = width / 2;
  let y = height / 2;


  // Draw the circles around the main circle
  for (let i = 0; i < circleCount; i++) {
    let angle = map(i, 0, circleCount, 0, TWO_PI);
    let offsetX = cos(angle) * maxExpansion;
    let offsetY = sin(angle) * maxExpansion;

    // Calculate the distance from the main circle
    let distance = dist(x, y, x + offsetX, y + offsetY);

    // Calculate the position of the smaller circle
    let targetX, targetY;

    if (inhale) {
      targetX = x + offsetX - (inhaleSpeed * distance / maxExpansion) * cos(angle);
      targetY = y + offsetY - (inhaleSpeed * distance / maxExpansion) * sin(angle);
    } else {
      targetX = x + offsetX + (exhaleSpeed * distance / maxExpansion) * cos(angle);
      targetY = y + offsetY + (exhaleSpeed * distance / maxExpansion) * sin(angle);
    }

    // Draw the smaller circle
    fill(120);
    noStroke();
    ellipse(targetX, targetY, circleRadius * 2, circleRadius * 2);
  }

  // Switch between inhale and exhale
  if (inhale && maxExpansion > 0) {
    maxExpansion -= inhaleSpeed;
  } else if (!inhale && maxExpansion < 50) {
    maxExpansion += exhaleSpeed;
  }

  // Reverse the motion when maxExpansion reaches its limits
  if (maxExpansion <= 0 || maxExpansion >= 50) {
    inhale = !inhale;
  }

  // Update inhaleSpeed and exhaleSpeed based on sliders
  inhaleSpeed = inhaleSpeedSlider.value();
  exhaleSpeed = exhaleSpeedSlider.value();

}

