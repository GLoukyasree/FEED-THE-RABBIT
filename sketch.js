var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
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

  //create apples
  createApples();

  drawSprites();
  
}
//function to create apples
function creareApples(){
//code
if(frameCount % 80 == 0){

  apples=createSprite(random(50,350),40,10,10);
  //add image to apple sprite
  apples.addImage(appleImg);
  //give the velocity so that the apples move downwards
  apples.velocityY=2;
  //set scale to the apple
  apple.scale=0.05;
}
}

