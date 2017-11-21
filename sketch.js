var mic,
    myImg,
    myFont;

function preload() {
  
  myFont = loadFont('assets/SanFranciscoDisplay-Bold.otf');
  myImg = loadImage('assets/cacca.jpg');
  
}

function setup() {
  createCanvas(500,500);
  
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(255);
  
  image(myImg, width/2, height/2-25, 250, 250);
  imageMode(CENTER);
  
  var vol = mic.getLevel();
  
  fill(255);
  ellipse(250, 300, 100, vol*100);
  ellipse(250, 300, 100, 5);
  noStroke();
  
  fill(30);
  textFont(myFont);
  textSize(32);
  text("Not only Apple can Animoji", 60, 420);
  
  fill(150);
  textFont(myFont);
  textSize(16);
  text("Say something!", 200, 450);
}