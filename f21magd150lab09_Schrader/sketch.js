let reverb, mySound,capture,button;

function preload() {
  mySound = loadSound('tension.wav');
}

function setup() {
  createCanvas(400,400);
  reverb = new p5.Reverb();
  mySound.disconnect();
  reverb.process(mySound,2,25);//This adds some reverb onto the mySound file.
  capture = createCapture(VIDEO);
  capture.size(100,100)
  //capture.hide();
  
  button = createButton('Play Sound');
  button.mousePressed(playSound);
}

function draw(){
  
  push();//This is the background frame.
  noStroke();
  fill('#25445E');
  rect(0,0,400,400);
  pop();
  
  push();//This is the blueish mirror.
  noStroke();
  fill('#3E97A8');
  rect(75,50,250,300);
  pop();
  
  push();//This is the figure in the background.
  noStroke();
  fill(25);
  ellipse(300,225,75,75);
  ellipse(300,340,100,125)
  pop();
  
  push();//This is the main figure in the mirror.
  noStroke();
  fill(220);
  ellipse(200,180,125,125);
  ellipse(200,375,200,250);
  pop();
  

  
  push();//This is a screen that sections off the figure in the mirror.
  noStroke();
  fill('#25445E');
  rect(0,0,75,400);
  rect(325,0,75,400);
  rect(0,350,400,50);
  pop();  
  
  push();//This is the transparent figure.
  noStroke();
  fill(128,128,128,75);
  ellipse(100,220,200,200);
  ellipse(100,500,275,325);
  pop();
  
  noStroke();
  fill(125,125,125,50);
  rect(0,0,400,400);
  
  image(capture,300,0,100,100);
}

function playSound(){
  mySound.play();
} //When the mouse button is pressed, it plays mySound.