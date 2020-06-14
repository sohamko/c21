var bullet, wall,bulletimg
var thickness,speed,weight,damage

function preload () {

bulletimg=loadImage("bullets.png")


}
function setup() {

  createCanvas(1600,400);
  bullet=createSprite(200,200,20,20)
 // bullet.addImage(bulletimg);
  bullet.scale=1;

  thickness=random(23,83);
  wall=createSprite(1500,200,thickness,height/2);
  wall.shapeColor=(80,80,80);
  speed=random(223,321);
  weight= random(30,52)
  //bullet.debug=true;
  wall.debug=true
  bullet.shapeColor="grey"
  //car=createSprite(50, 200, 50, 50);
}

function draw() {
  background(0,0,0);  
 // bullet.addAnimation(bullet);
 // car.x=World.mouseX;
 // car.y=World.mouseY;
bullet.velocityX=speed;
wall.shapeColor="white"
 

  if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
//car.shapeColor="blue"
console.log(damage);

if(damage<4){
bullet.shapeColor=color(0,255,0);
wall.shapeColor=color(0,255,0);}

else
if(damage>4 && damage<12){
bullet.shapeColor=color(230,230,0);
wall.shapeColor=color(230,230,0);}

else
if(damage>12){
bullet.shapeColor=color(255,0,0);
wall.shapeColor=color(255,0,0)}
 
  }
 

 //console.log(car.y)
//console.log(bullet.shapeColor)

  drawSprites();
}
  

function isTouching(object1,object2){
if(  
  object2.x-object1.x<=object1.width/2 + object2.width/2
&&object1.x-object2.x<=object1.width/2 + object2.width/2
&&object1.y-object2.y<=object1.height/2 + object2.height/2
&&object2.y-object1.y<=object1.height/2 + object2.height/2


)
      {return true}

else  {return false}

};

function collide(object1,object2){
if( object2.x-object1.x<=object1.width/2+object2.width/2
&&object1.y-object2.y<=object1.height/2+object2.height/2
&&object2.y-object1.y<=object1.height/2+object2.height/2
&&object1.x-object2.x<=object1.width/2+object2.width/2)


 { return true 
  object1.velocityX=0}

else {return false}

}

function hasCollided(bullet,wall)
{
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x
  if(bulletRightEdge>=wallLeftEdge)
  
  { return true}

  else {return false}



  }











