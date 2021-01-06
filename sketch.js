
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dustbin1,dustbin2,dustbin3;
function preload()
{
	
}

function setup() {
	createCanvas(800,300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	ground = new Ground(700,288,1500,10)
	paperball = new paperball(50,100,30,20)
	circle(30, 30, 20);
	dustbin1 = new Dustbin(689,278,100,10)
	dustbin2 = new Dustbin(642,258,10,50)
	dustbin3 = new Dustbin(740,258,10,50)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 
  background(0);
  
  drawSprites();
 
 ground.display();
 paperball.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
 
}


function keyPressed() {
	if(keyCode === 32){

Matter.Body.applyForce(paperball.body,paperball.body.position,{x:5,y:-45});

	}
}

