let trails = [];
let margin=1000;
function setup() {
  createCanvas(windowWidth-margin, windowHeight-margin);
}

function draw() {
  background(255);

  // Display and update trails
  for (let i = trails.length - 1; i >= 0; i--) {
    let trail = trails[i];
    trail.update();
    trail.display();

    // Remove trails that are too faint
    if (trail.alpha <= 0) {
      trails.splice(i, 1);
    }
  }
  // Create a new trail and add it to the array
  trails.push(new Trail(mouseX, mouseY));

}

// Trail class
class Trail {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.alpha = 255; // Initial alpha value
  }

  // Update the trail's properties
  update() {
    this.alpha -= 1; // Fade the trail over time
  }

  // Display the trail as an ellipse
  display() {
    noStroke();
    fill(0, this.alpha);
    ellipse(this.x, this.y, 50, 50);
  }
}



