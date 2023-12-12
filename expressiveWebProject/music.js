let sounds = []; // Array to store the loaded sounds
let currentSoundIndex = 0; // Index of the currently playing sound
let isPlaying = false; // Flag to track whether music is currently playing
let margin = 1000;

function preload() {
  // Load your audio files
  //source: Music I Use: https://www.bensound.com/free-music-for-videos License code: DJKK65BVTZYLHR41
  sounds[0] = loadSound('musicAssets/relaxing.mp3');
  //source: Music by: bensound.com License code: CCP0D2VYYAZNVRQL
  sounds[1] = loadSound('musicAssets/betterdays.mp3');
  //souce: Music by https://www.bensound.com License code: 57IA5XIYA8SG4OMD
  sounds[2] = loadSound('musicAssets/november.mp3');
  //source: Music by: https://www.bensound.com License code: O6A1AAR1FO4VT3SE
  sounds[3] = loadSound('musicAssets/tomorrow.mp3')
}

function setup() {
  createCanvas(windowWidth-margin, windowHeight-margin);
  // frameRate(5);
  // Create buttons for each sound
  for (let i = 0; i < sounds.length; i++) {
    createButton('Option ' + (i + 1)).mousePressed(() => toggleSound(i));
  }
  
  // Create a button to stop the music
  createButton('Stop').mousePressed(stopMusic);

  amplitude = new p5.Amplitude();
}

function draw() {
  background(255);

  if (isPlaying) {
    // Get the amplitude (volume) of the currently playing sound
    textAlign(CENTER);
    let level = amplitude.getLevel();
    let size = map(level, 0, 1, 0, 500);
    stroke(0);
    // fill(size,0,255);
    for (let x = 0; x < width; x=x+200) {
      fill(size,0,255);
      noStroke();
       ellipse(x, height/2, 150, size*2);
    }

  }
  


  }


function toggleSound(index) {
  // Stop the currently playing sound
  stopMusic();
  
  // Update the current sound index
  currentSoundIndex = index;
  
  // Play the newly selected sound
  sounds[currentSoundIndex].play();
  
  // Set the flag to indicate that music is playing
  isPlaying = true;
}

function stopMusic() {
  // Stop the currently playing sound
  sounds[currentSoundIndex].stop();
  
  // Reset the flag to indicate that music is not playing
  isPlaying = false;
}

