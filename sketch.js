
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var boyIMG, boySprite, mangoSprite,mangoIMG,stoneSprite,stoneIMG,treeSprite,treeIMG;

var ground

function preload()
{
	boyIMG=loadImage("Plucking mangoes/boy.png")
	
	treeIMG=loadImage("Plucking mangoes/tree.png")
	
}

function setup() {
	createCanvas(1300,600);
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//Create a Ground
	ground = Bodies.rectangle(width/2, height-35, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	 //tree=new Tree(1050,300,450,600)
	 // mango 
	 MangoObject1=new Mango(1100,100,30)
	 MangoObject2=new Mango(1170,130,30)
	 MangoObject3=new Mango(1010,140,30)
	 MangoObject4=new Mango(1000,230,30)
	 MangoObject5=new Mango(900,160,40)
	 
	 //stone
	 stoneObject=new Stone(235,420,30)
	 
	 //rope
	 rope=new ROPE(stoneObject.body,{x:235,y:420})
	  
	 
	 /*var render = Render.create({ element: document.body, engine: engine, 
		options:
		 { width: 1300, height: 600, wireframes: false } });*/
	  Engine.run(engine); 
	  //Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  image(boyIMG,200,340,400,400)
  image(treeIMG,830,0,450,600)
  drawSprites();
  //tree.display()
  MangoObject1.display()
  MangoObject2.display()
  MangoObject3.display()
  MangoObject4.display()
  MangoObject5.display()
  stoneObject.display()
  detectollision(stoneObject,MangoObject1)
	detectollision(stoneObject,MangoObject2)
	detectollision(stoneObject,MangoObject3)
	detectollision(stoneObject,MangoObject4)
	detectollision(stoneObject,MangoObject5)
}


	function detectollision(lstone,lmango)
	{ 
		  mangoBodyPosition=lmango.body.position;
		   stoneBodyPosition=lstone.body.position
			var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

			 if(distance<=lmango.r+lstone.r){
			
				 Matter.Body.setStatic(lmango.body,false);
				 } }
	
	


function keyPressed() {
	if (keyCode === 32){
		Matter.Body.setPosition(stoneObject.body,{x:235,y:420})
		rope.attach(stoneObject.body);
	}
}
function mouseDragged(){
	Matter.Body.setPosition(stoneObject.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	rope.fly()
}	






