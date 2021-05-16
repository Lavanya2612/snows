var baground, santa
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var snow=[]


function preload(){
  backgroundimg = loadImage('snow2.jpg')
  santaimg= loadImage('santa.png')
  
  }


function setup() {
  createCanvas(800,500);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  //createSprite(400, 200, 50, 50);

// baground = createSprite(400,250)
//baground.addImage(backgroundimg)
//baground.scale=0.8




}



function draw() {
  background( backgroundimg);  
  Engine.update(engine)


  if(frameCount%60===0){
    snow.push(new Snow())
  }

  for (var j = 0; j < snow.length; j++) {
    snow[j].display();   
  }

  drawSprites();
 

}