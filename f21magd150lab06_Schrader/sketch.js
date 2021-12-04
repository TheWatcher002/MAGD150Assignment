var r= 0.0;
var s;
var growth;

function setup() {
  createCanvas(400, 400);
  frameRate(60);
  s=1.0;
  growth=0.01
}

function draw() {
  background(220);
  Tpiece(); 
  
  //Static blocks at the bottom of the screen.
  Lpiece();
  Lpiece2();
  Spiece();
  Ipiece(); 
  TpieceHighlight();
}

function Tpiece(){
  push();
  translate(125,175);    
  rotate(r)
  fill('#A200FA');
  rectMode(CENTER);
  rect(0,0,50,50);
  rect(-50,0,50,50);
  rect(50,0,50,50);
  rect(0,50,50,50);
  pop();
} //This function is the rotatable shape on screen.
function mouseClicked(){
  r+=-PI/2
} //When the mouse is clicked the Tpiece above rotates 90 degrees.

//This function highlights a Tpiece area.
function TpieceHighlight(){
  push();
  strokeWeight(2.5);
  fill(200);
  translate(125,325);
  scale(s);
  rectMode(CENTER);
  rect(0,-50,50,50);
  rect(-50,0,50,50);
  rect(0,0,50,50);
  rect(0,50,50,50);
  pop();
  
  s= s+growth;
    if (s>1||s<0.5){
      growth *=-1
    }
}

//All of these functions place static shapes on the screen.
function Lpiece(){
  push();
  fill('#FAA401');
  rect(0,350,50,50);
  rect(0,300,50,50);
  rect(0,250,50,50);
  rect(50,350,50,50);
  pop();
}
function Lpiece2(){
  push();
  fill('#FAA401')
  rect(250,350,50,50);
  rect(200,350,50,50);
  rect(150,350,50,50);
  rect(250,300,50,50);
  pop();
}
function Spiece(){
  push();
  fill(0,255,0);
  rect(150,300,50,50);
  rect(200,300,50,50);
  rect(200,250,50,50);
  rect(250,250,50,50);
  pop();
}
function Ipiece(){
  push();
  fill('#00F7FA')
  rect(300,350,50,50);
  rect(300,300,50,50);
  rect(300,250,50,50);
  rect(300,200,50,50);
  pop();
}