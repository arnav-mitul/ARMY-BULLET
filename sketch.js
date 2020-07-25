
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var man1,man2,man3,man4;
var Stone,stoneim;
var tree,treeim,gr;
var string;
var man1im,man2im,man3im,man4im;

function preload()
{
//man1im=loadImage("mango.png");
//man2im=loadImage("mango.png");
//man3im=loadImage("mango.png");	
//man4im=loadImage("mango.png");
treeim=loadImage("tree.png");
//stoneim=loadImage("stone.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	tree = new stone(600,600,10,10)
	tree.addImage("io",treeim);

//	man1 = new Man (600,600,10,10) 
//	man1.addImage(man1im)

//	man2 = new Man (607,560,10,10) 
//	man2.addImage(man2im)

//	man2 = new Man (590,610,10,10) 
//	man2.addImage(man2im)

//	man3 = new Man (600,580,10,10) 
//	man3.addImage(man3im)

//	man4 = new Man (580,600,10,10) 
//	man4.addImage(man4im)


	Engine.run(engine);
}


function draw() {
  Enagine.update(engine);
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 tree.display();
}



