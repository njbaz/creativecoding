let video;
let margin = 1000;
function setup() {
  createCanvas(windowWidth-margin, windowHeight-margin);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
}

function draw() { 
  background(255);

  let gridSize = 10;

video.loadPixels();
  for (let y=0; y<video.height; y+=gridSize) {
    for (let x=0; x<video.width; x+=gridSize) {
      
      let index = (y * video.width + x) * 4;
      let r = video.pixels[index];
      let dia = map(r, 0,255, gridSize,2);
      

      fill(0,0,255,50);
      noStroke();
          for (let i = 0; i < 10; i ++) {

          ellipse(x+gridSize/20, y+gridSize/2, dia/3, dia);
           rotate(PI/5);
  }
    }
  }
  
}

