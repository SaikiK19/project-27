
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango1,mango2,mango3,mango4,mango5,mango6;
var stone,slingshot;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(400,680,800,20);
	mango1 = new Mango(700,200,50);
	mango2 = new Mango(600,190,50);
	mango3 = new Mango(620,250,50);
	mango4 = new Mango(720,300,50);
	mango5 = new Mango(700,100,50);
	mango6 = new Mango(550,100,50);
	stone = new Stone(200,500,40);
	slingshot = new Slingshot(stone.body,{x:200,y:400});
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stone.display();
  slingshot.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);


  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:200,y:400})
		//slingshot.attach(stone.body)
		slingshot = new Slingshot(stone.body,{x:200,y:400});
	}
}
function detectCollisionh(stone,mango){
	mangoBodyPosition = mango.body.position
	stoneBodyPosition = stone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=mango.r+stone.r)
	{
		Matter.Body.setStatic(mango.body,false);
	}
}