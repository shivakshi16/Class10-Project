var ship,sea
var shipping,seaing

function preload(){
  seaing=loadImage("sea.png")
  shipping=loadAnimation("ship-4.png","ship-3.png","ship-2.png","ship-1.png")

}

function setup(){
    createCanvas(500,500);
    sea=createSprite(400,250)
    sea.addImage(seaing)
    sea.velocityX=-3
    sea.scale=1.2
    ship=createSprite(150,200,50,50)
    ship.scale=0.3
    ship.addAnimation("moving",shipping)
  
}

function draw() {
  background("blue");
 
  if(sea.x<0){
  sea.x=sea.width/2;
}
drawSprites();
}

