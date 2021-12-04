 var rectX, rectY;
var circleX, circleY;
var rectSize = 25;
var circleSize = 25;
var baseColor;
var rectHighlight, circleHighlight;
var currentColor;
var rectOver = false;
var circleOver = false;
var pink = '#EB13AF';
var off = '#857A7A';
let s = 'Off';
let c = 'On' ;

var x,y;
var xspeed;

function setup() {
  createCanvas(400, 400);
  rectColor = color(220);
  rectHighlight = color(155);
  circleColor = color(220);
  circleHighlight = color(155);
  baseColor = color('#857A7A');
  currentColor = baseColor;
  circleX = 250;
  circleY = 314;
  rectX = 150;
  rectY = 300;
  
  x=100;
  y=200;
  xspeed = 3;
}

function draw() {
  update(mouseX, mouseY);
  background(102,100,250);
  
  push();
  strokeWeight(5);
  fill(255);
  rect(50, 50, 300, 300, 40); //body
  pop();
  
  push();
  strokeWeight(5);
  fill(currentColor);
  rect(75, 75, 250, 200, 40); //screen
  pop();
  
  if (rectOver) {
    fill(rectHighlight);
  } else {
    fill(rectColor);
  }
  stroke(55);
  rect(rectX, rectY, rectSize, rectSize);
  
  if (circleOver) {
    fill(circleHighlight);
  } else {
    fill(circleColor);
  }
  stroke(55);
  ellipse(circleX, circleY, circleSize, circleSize);
  
  push();
  fill(0);
  text(s,155,308,25);
  pop();
  
  push();
  fill(0);
  text(c,242,310,25);
  pop();
  
  push();
  noStroke();
  fill('#857A7A')
  ellipse(x,y,50,50);
  x+=xspeed
  pop();
  
  if(x-25<=75 || x+25>325){
    xspeed *= -1;
  }
}

function update( x,  y) {
  if ( overCircle(circleX, circleY, circleSize) ) {
    circleOver = true;
    rectOver = false;
  } else if ( overRect(rectX, rectY, rectSize, rectSize) ) {
    rectOver = true;
    circleOver = false;
  } else {
    circleOver = rectOver = false;
  }
}

function mousePressed() {
  if (circleOver) {
    currentColor = pink;
  }
  if (rectOver) {
    currentColor = off;
  }
}

function overRect( x,  y,  width,  height)  {
  if (mouseX >= x && mouseX <= x+width && 
      mouseY >= y && mouseY <= y+height) {
    return true;
  } else {
    return false;
  }
}

function overCircle( x,  y,  diameter) {
  var disX = x - mouseX;
  var disY = y - mouseY;
  if (sqrt(sq(disX) + sq(disY)) < diameter/2 ) {
    return true;
  } else {
    return false;
  }
}