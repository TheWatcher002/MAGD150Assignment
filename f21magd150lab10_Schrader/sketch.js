let dumpster,cam;
let delta = 0.01;

function preload(){
  dumpster = loadModel('dumpster.obj', true);
}

function setup() {
  createCanvas(400, 400,WEBGL);
  cam = createCamera();
  cam.pan(-0.5);
}

function draw() {
  background(50);
  cam.pan(delta);
  if (frameCount % 120 === 0){
    delta *= -1;
  }
  
  ambientLight(100);
  
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  pointLight(200, 200, 200, locX, locY, 50);
  
  push();//This is the model of the dumpster.
  translate(0,-125);
  scale(0.75);
  rotateY(-0.5);
  rotateX(-0.6);
  specularMaterial(200);
  shininess(50);
  model(dumpster);
  pop();
  
  push();//This is the buildings on the left and right.
  translate(-100,0);
  rotateY(2.25);
  rotateX(-0.5);
  specularMaterial(200);
  shininess(50);
  box(100,100,300);
  pop();
  push();
  translate(125,100);
  rotateY(-0.75);
  rotateX(0.75);
  specularMaterial(200);
  shininess(50);
  box(100,100,300);
  pop();
}