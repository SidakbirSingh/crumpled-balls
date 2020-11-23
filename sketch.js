
 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;

 var paper,ground,D1,D2,D3;

function preload(){
	
}

function setup() {
	 createCanvas(800, 700);
  
	
	 engine = Engine.create();
	 world = engine.world;

	 paper = new Paper(100, 600, 20);

     ground = new Ground(400, 680, 800, 20);
  
	 D1 = new Dustbin(553, 620, 20, 100);
     D2 = new Dustbin(635, 660, 150, 20);
     D3 = new Dustbin(713, 620, 20, 100);


     Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  paper.display();

  ground.display();

  D1.display();
  D2.display();
  D3.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW)  {
	   Matter.Body.applyForce(paper.body, paper.body.position, 
		   {x:60, y: -60})
	}

  }


