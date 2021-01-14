
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var man_image;
var ground;
var ground_options;
var maxDrops = 100;
var drops = [];
var thunder1, thunder2, thunder3,thunder4;
var umbrella;
var thunder, frame;

function preload(){
  
  thunder1 = loadImage("1.png");
  thunder2 = loadImage("2.png");
  thunder3 = loadImage("3.png"); 
  thunder4 = loadImage("4.png");
  
}

function setup(){
  var canvas = createCanvas(500,500);

  engine = Engine.create();
  world  = engine.world;

  
  umbrella = new Umbrella();

  if(frameCount%100===0){
    for(var i=0; i<maxDrops;i++){
      drops.push(new rain(random(0,500),random(340,-10),3,10));
     }
    }

}

function draw(){
  background(0);
  Engine.update(engine);

  var rand = Math.round(random(1,2,3,4));
  if(frameCount%80===0){
    frame = frameCount
   thunder = createSprite(random(10,370),random(10,30),10,10);
   thunder.scale = 0.5
   switch(rand){
     case 1 : thunder.addImage(thunder1);
	 break;
	 case 2 : thunder.addImage(thunder2);
	 break;
	 case 3 : thunder.addImage(thunder3);
	 break;
	 case 4 : thunder.addImage(thunder4);
     break;
     default : break;
   }
  }
  
 if(frame+30 === frameCount){
	 thunder.destroy()
 }

  umbrella.display();
  
  for(var i=0; i<maxDrops;i++){
    drops[i].display();
	drops[i].update()
  }
 
  
  drawSprites();
}
