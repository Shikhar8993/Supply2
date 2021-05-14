var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(550,80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(550, 200, 10,10);

	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	
	packageBody = Bodies.circle(550 , 200 , 5 ,{restitution:0.3 ,isStatic:true});
	World.add(world, packageBody);


	box1 = new Box(545,615,10,80);
    box2 = new Box(455,615,10,80);
	box3 = new Box(500,655,100,10);
    
	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  packageSprite.x= helicopterSprite.x 
 
  if (packageSprite.y>600) {
    helicopterSprite.velocityX=0
	helicopterSprite.velocityY=0
   }
 
 
  box1.display();
  box2.display();
  box3.display();

  drawSprites();
 
}

function keyPressed(){
 
	if (keyCode === DOWN_ARROW) {
		packageBody = Bodies.circle(550 , 200 , 5 ,{restitution:0.3 ,isStatic:false});
	    World.add(world, packageBody);
	

	   Engine.run(engine);
		 
	   }
	if (keyCode === LEFT_ARROW) {
		   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
		   helicopterSprite.velocityX=-5;
		   
	}
		   
   if (keyCode === RIGHT_ARROW) {
		   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
		   helicopterSprite.velocityX=5;
		   
		 }
		
		}




