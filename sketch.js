
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	testBall = new Paper(200, 200, 30); 

	wall1 = new dustbin(400,50,100,PI/2); 
	wall2 = new dustbin(475, 50, 100, -PI/9);
	wall3 = new dustbin2(500,400,1000,30);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  testBall.display(); 
  wall1.display(); 
  wall2.display(); 
  wall3.display(); 
  drawSprites();
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(testBall.body,testBall.body.position,{x:85,y:-85});
	}

}



