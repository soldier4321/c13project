var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImage;
var carrot,carrotImage;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple1.png");
  carrotImage = loadImage("carrot.png");
}


function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX
  spawnapple()
  spawncarrot()
  drawSprites();
}
function spawnapple(){
  
  if(frameCount%60==0){
  apple=createSprite(200,-5,40,10);
  apple.addImage(appleImage);
  apple.scale=0.090
  apple.x=Math.round(random(1,200))
  apple.velocityY=+4;
 }
 }
 function spawncarrot(){
  
  if(frameCount%100==0){
 carrot=createSprite(200,-5,40,10);
  carrot.addImage(carrotImage);
  carrot.scale=0.090
  carrot.x=Math.round(random(1,400))
  carrot.velocityY=+4;
 }
 }