
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var engine,world
var boy,ground,tree,stone
var mang1,mang2,mang3,mang4,mang5,mang6
var sling
function preload(){
boyImag=loadImage("boy.png")
treeImage=loadImage("tree.png")
	
}

function setup() {
	createCanvas(1200, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);

	mang1=new Mang(900,400,30)
	mang2=new Mang(800,500,40)
	mang3=new Mang(850,400,30)
	mang4=new Mang(780,350,30)
	mang5=new Mang(900,400,40)
	mang6=new Mang(890,450,30)
	stone=new Stone(200,640,50)
	sling=new SlingShot(stone.body,{x:250,y:540})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground.display()
 
  

  image(boyImag,200,470,200,300)
  image (treeImage,600,250,500,455)

  mang1.display()
  mang2.display()
  mang3.display()
  mang4.display()
  mang5.display()
  mang6.display()
  stone.display()
  sling.display()

  detectollision(stone,mang1)
  detectollision(stone,mang2)
  detectollision(stone,mang3)
  detectollision(stone,mang4)
  detectollision(stone,mang5)
  detectollision(stone,mang6)
}

function mouseDragged(){
	
		Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
	}

	
	
	function mouseReleased(){
		sling.fly();
	
		
	}
	
	// function keyPressed(){
	// 	if(keyCode === 32){
		 
	// 	}
	// }
function detectollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if (distance<=lmango.r+lstone.r){
Matter.Body.setStatic(lmango.body,false)
}
}
