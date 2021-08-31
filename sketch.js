const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var backgroundimg,snowimg;
var snowparticle= []
function preload(){
  backgroundimg=loadImage("snow3.jpg")
snowimg=loadImage("snow4.webp")
}

function setup() {
  createCanvas(800,400);
  engine=Engine.create(); 
  world=engine.world;
  //(400, 200, 50, 50);
//snow=createSprite(250,300,10,10);
//snow.addImage(snowimg);
}






function draw() {
  background(backgroundimg);  
  Engine.update(engine);
if(frameCount%20===0){
  snowparticle.push(new Snow(random(100,700),-50,10))
}
for(var j=0;j<snowparticle.length;j++){
  snowparticle[j].display();
}
  drawSprites();
}