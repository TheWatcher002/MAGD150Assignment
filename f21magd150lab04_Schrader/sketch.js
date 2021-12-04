i=0;
y=250;
function setup() {
  createCanvas(500, 500);
  
  while (i<5){
    text(i, i*10, height/2);
    i++;
  }
  
}

function draw() {
  background(120,120,255);

         
  push();
  fill('#EBB55B');
  ellipse(250,260,150,150);
  pop(); 
  
  if (mouseIsPressed) {
    push();
    fill('#EB604C');
    ellipse(250,260,138,138)
    pop();
  } else {
    push();
    fill('#F00413');
    ellipse(250,260,138,138);
    pop(); 
  }

  if (keyIsPressed) {
    push();
    fill('#EBE6A3');
    ellipse(250,260,125,125);
    pop(); 
  } else {
    push();
    fill('#EDECEA');
    ellipse(250,260,125,125);
    pop(); 
  }
  
  if(i==0){
    print("flying pepperoni");
  } else {
    print("pepperoni is gone");
  }
  
  push();
  fill(255,0,0);
  ellipse(240,y,40,40);
  y--;
  pop();
  
  push();
  stroke(0);
  strokeWeight(5);
  ellipse(mouseX,mouseY,5,5);
  pop();
}