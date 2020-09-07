
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var man,img;

var cloudImage;

var background1, background2, background3

function preload()
{
	img = loadImage("skydiving-removebg-preview.png")
	cloudImage = loadImage("sky.jpg")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  background1 = createSprite(400,350,800,700);
	background1.addImage(cloudImage);
	
  background2 = createSprite(400,800,800,700);
	background2.addImage(cloudImage);

  background3 = createSprite(400,1250,800,700);
	background3.addImage(cloudImage);

  man = createSprite(400,350,20,50);
  man.addImage(img);
  man.scale = 0.3;


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  if(man.y>950){
	man.y = 500
}

  man.velocityY = 11
  camera.position.y = man.y+150

  if(keyCode === RIGHT_ARROW){
	  man.velocityX = 7
  }
  if(keyCode === LEFT_ARROW){
	man.velocityX = -7
}

  if(man.x>800||man.x<0){
	  man.x = 400
	  man.velocityX = 0
	  
  }

  
  
  drawSprites();
 
}



