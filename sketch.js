var fixedRect;movingRect;

function setup() {
  createCanvas(1000,800);
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
  fixedRect = createSprite(600,400,50,80);
  fixedRect.shapeColor = "green";
  movingRect.debug = true;
  fixedRect.debug = true;
}

function draw() {
  background(0);  
  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && 
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 ){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
}
  else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  }
 

  drawSprites();
}