
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rect1, rect2, rect3, rect;
var ground, paper, paperObject;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.
	rect1 = new Dustbin(680,542,20,80);
	rect2 = new Dustbin(610,592,160,20);
	rect3 = new Dustbin(540,542,20,80);
	
	paper = new Paper(200,450,50)
	
	
	//Create a Ground
	ground = createSprite(400, 610, 900, 15);
	ground.shapeColor = "yellow";
	
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  rect1.display();
  rect2.display();
  rect3.display();
  paper.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_Arrow) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.positions,{x:85,y:85});
	}
}

