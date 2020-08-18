const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies= Matter.Bodies;
var paper1;
var dustbin;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	paper1= new Paper (760,120,150, PI/7);
	dustbin=new dustbin(1200,650)
	
	Engine.run(engine);
}



function draw() {
	rectMode(CENTER);
	background(0);
	
	paper1.display();
    dustbin.display();

	keyPressed()

	drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.postion,{x:85,y:85});
	}
}
