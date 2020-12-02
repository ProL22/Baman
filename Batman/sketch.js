const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var umbrella;
var l1,i1;
var engine,world;
var maxDrops=100;
var drops=[];
function preload() {
  i1=loadImage("sprite/3.jpg");
  mn=loadImage("sprite/1888657.jpg")
}
function setup() {
  createCanvas(1200,800);
   engine = Engine.create();
   world = engine.world;
  
  
  umbrella = new Umbrella(450,400)
  man=createSprite(450,600,20,30)
  man.addImage(mn);
  man.scale=0.25
  l1=createSprite(450,250,10,20);
  l1.addImage(i1);
  l1.scale=0.25
  
  for(var i=0; i<maxDrops; i++){
     drops.push(new createDrop(random(0,400),random(0,400)))
  }
}

function draw() {
  background("black");  
  Engine.run(engine);
  
  for(var j=0; j<drops.length; j++){
    drops.display();
  }

  umbrella.display();
  drawSprites();
}