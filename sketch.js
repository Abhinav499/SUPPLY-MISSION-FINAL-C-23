var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var line2,line2;
var line3,line4,line5;
var blo1,blo2,blo3;


function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(1400, 620);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 90, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale = 0.2;

	helicopterSprite=createSprite(-120, 60, 10,10);
	helicopterSprite.addImage(helicopterIMG);
  helicopterSprite.scale=0.6;
  

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 50 , 5 , {restitution:0.65, isStatic:true});
	World.add(world, packageBody);

	ground = createSprite(width/2,530,width,10);
	//ground.shapeColor = "green";
	ground = Bodies.rectangle(width/2, 530, width, 10 , {isStatic:true} );
  World.add(world, ground);

  line1 = createSprite(550,50,10,150);
  line2 = createSprite(850,50,10,150);
  line3 = createSprite(550,470,10,150);
  line4 = createSprite(850,470,10,150);
  line5 = createSprite(width/2,530,width,10);


  blo1 = createSprite(250,600,590,220);
  blo2 = createSprite(1150,600,590,220);
  blo3 = createSprite(700,595,320,120);

  blo1.shapeColor = "blue";
  blo2.shapeColor = "blue";
  blo3.shapeColor = "blue";

	Engine.run(engine);
	console.log(packageSprite);
  
}


function draw() 
{

  Engine.update(engine);
  rectMode(CENTER);
  background(0);
 
  
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
  rect(ground.position.x,ground.position.y,width,10);
  helicopterSprite.velocityX = 5;
  packageSprite.visible = false;
  ground.visible = false;

  
 
  if( helicopterSprite.x >= 653 && helicopterSprite.x <= 947)
  {
    line1.shapeColor = "green";
    line2.shapeColor = "green";
    line3.shapeColor = "green";
    line4.shapeColor = "green";
    line5.shapeColor = "green";


    if(packageSprite.y <= 300)
    {
    textSize(50);
    fill("green");
    text("DROP!",623,250);
    }
  }
  if(helicopterSprite.x <= 652 && helicopterSprite.x >= 326)
  {
    line1.shapeColor = "yellow"
    line2.shapeColor = "yellow";
    line3.shapeColor = "yellow";
    line4.shapeColor = "yellow";
    line5.shapeColor = "yellow";


    if(packageSprite.y <= 100)
    {
    textSize(50);
    fill("yellow");
    text("NO DROPPING",50,310);
    text("ALLOWED HERE",900,310);
    text("READY!",623,250);
    }
  }
  if(helicopterSprite.x <=325)
  {
    line1.shapeColor = "red";
    line2.shapeColor = "red";
    line3.shapeColor = "red";
    line4.shapeColor = "red";
    line5.shapeColor = "red";

  


    if(packageSprite.y <= 100)
    {
    textSize(50);
    fill("red");
    text("NO DROPPING",50,310);
    text("ALLOWED HERE",900,310);
    text("WAIT!",623,250);
    }
  }
  if(helicopterSprite.x >=948 && helicopterSprite.x <=1073)
  {
    line1.shapeColor = "yellow"
    line2.shapeColor = "yellow";
    line3.shapeColor = "yellow";
    line4.shapeColor = "yellow";
    line5.shapeColor = "yellow";


    if(packageSprite.y <= 100)
    {
    textSize(50);
    fill("yellow");
    text("NO DROPPING",50,310);
    text("ALLOWED HERE",900,310);
    text("READY!",623,250);
    }
  }
  if(helicopterSprite.x >= 1074)
  {
    line1.shapeColor = "red";
    line2.shapeColor = "red";
    line3.shapeColor = "red";
    line4.shapeColor = "red";
    line5.shapeColor = "red";


    if(packageSprite.y <= 100)
    {
    textSize(50);
    fill("red");
    text("NO DROPPING",50,310);
    text("ALLOWED HERE",900,310);
    text("WAIT!",623,250);
    }
  }
  if (keyCode === DOWN_ARROW && helicopterSprite.x >= 653 && helicopterSprite.x <= 947)
  {
   Matter.Body.setStatic(packageBody,false);
   }
   if(packageSprite.y >= 91)
   {
    packageSprite.visible = true;
   }
   if(packageSprite.y >= 470 )
   {
     textSize(100);
     fill("blue");
     text("MISSION ACCOMPLISHED !",100,300);
     text("THANK YOU PILOT",350,380);
     line1.shapeColor = "green";
     line2.shapeColor = "green";
     line3.shapeColor = "green";
     line4.shapeColor = "green";
     line5.shapeColor = "green";
     textSize(50)
     text("PACKAGE IS SAFE -> ",40,50);
     text("IN MILITARY BOAT -> ",870,50);
     text("-> AND WILL REACH -> ",0,100);
     text("->MILITARY BUNKER->",870,100);
     text("->ASAP",1000,150);
     
   } 
   
  drawSprites();

}






