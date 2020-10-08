
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy, tree, ground, slingshot;
var mango1, mango2, mango3, mango4, mango5;

function preload()
{
	boyIMG = loadImage("boy.png");
	treeIMG = loadImage("tree.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//boy = new Boy(150, 605);
	boy = createSprite(150, 605, 140, 140);
		boy.addImage("boy", boyIMG);
		boy.scale = 0.08;
	//tree = new Tree(600, 450);
	tree = createSprite(600, 450, 500, 500);
		tree.addImage("tree", treeIMG);
		tree.scale = 0.5;
	ground = new Ground(400, 700);
	stone = new Stone(90, 580);
	mango1 = new Mango(600, 300);
	mango2 = new Mango(510, 400);
	mango3 = new Mango(700, 350);
	mango4 = new Mango(400, 400);
	mango5 = new Mango(750, 400);

	slingshot = new Slingshot(stone.body, {x: 110, y: 580});

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(255);
	
	detectCollision(stone,mango1);
	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);
	detectCollision(stone,mango5);

	slingshot.display();
	drawSprites();
	boy.display();
	tree.display();
	ground.display();
	stone.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	//mouseDragged();
}

function mouseDragged(){
	Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}
function mouseReleased(){
	slingshot.fly();
}
function keyPressed(){
	if (keyCode === 32){
		Body.setPosition(stone.body, {x: 90, y: 580})
		slingshot.attach(stone.body)
	}
}

function detectCollision(lstone, lmango){
	var mangoBodyPosition = lmango.body.position;
	var stoneBodyPosition = lstone.body.position;

	var distance = dist (stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
		if(distance<lmango.r+lstone.r){
			Body.setStatic(lmango.body, false);
		}
}