function setup() {
  forest = loadSound('forest.mp3');
  createCanvas(720, 200);
  background(255, 0, 0);
}

function mousePressed() {
  if (forest.isPlaying()) {
    // .isPlaying() returns a boolean
    forest.stop();
    background(255, 0, 0);
  } else {
    forest.play();
    background(0, 255, 0);
  }
}