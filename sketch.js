
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof1;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new roof(300, 20, 620, 50);
	
	bobObject1 = new Bob(100, 450, 100);
	bobObject2 = new Bob(200, 450, 100);
	bobObject3 = new Bob(300, 450, 100);
	bobObject4 = new Bob(400, 450, 100);
	bobObject5 = new Bob(500, 450, 100);
	rope1 = new Rope(bobObject1.body, roof1.body, -200, 5);
	rope2 = new Rope(bobObject2.body, roof1.body, -100, 5);
	rope3 = new Rope(bobObject3.body, roof1.body, 0, 5);
	rope4 = new Rope(bobObject4.body, roof1.body, 100, 5);
	rope5 = new Rope(bobObject5.body, roof1.body, 200, 5);
	
	Engine.run(engine);
  
}


function draw() {
 	rectMode(CENTER);
  	background(0);
  
	roof1.display();
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();


  	drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Body.applyForce(bobObject1.body, bobObject1.body.position, {x: 120, y: 0});
	}
}



