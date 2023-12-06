let video;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // webcam capture (at the size of the window)
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
}

function draw() { 
  background(255);

  // try experimenting with this
  let gridSize = 10;

  // the video has pixels just like an image!
  video.loadPixels();
  for (let y=0; y<video.height; y+=gridSize) {
    for (let x=0; x<video.width; x+=gridSize) {
      
      // at the current position, get the red
      // value (an approximation for brightness)
      // and use it to create the diameter
      let index = (y * video.width + x) * 4;
      let r = video.pixels[index];
      let dia = map(r, 0,255, gridSize,2);
      
      // draw a circle at the current location
      // using the diameter we calculated
      fill(0,0,255,50);
      noStroke();
      
        noStroke();
          for (let i = 0; i < 10; i ++) {

          ellipse(x+gridSize/20, y+gridSize/2, dia/3, dia);
           rotate(PI/5);
  }
    }
  }
  
}

