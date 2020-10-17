
var wall, thickness;
var bullet,speed, weight;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(400,1500);
  thickness = random(30,52);

  bullet = createSprite(50,200,50,10);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "pink";

}

function draw() {
  background(0,0,0);  


if (hasCollided(bullet,wall)) {

    bullet.velocityX = 0;
var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
console.log(damage);

if (damage < 10) {

bullet.shapeColor = "green";

}

if (damage > 10) {

  bullet.shapeColor = "red";
  
  }
    

}

console.log(speed);
console.log(weight);
console.log(thickness);

  drawSprites();
}


function hasCollided(oneBullet, oneWall) {

  bulletRightEdge = oneBullet.x + oneBullet.width;
  wallLeftEdge = oneWall.x;

  if (bulletRightEdge >= wallLeftEdge) {

      return true;

  }
  return false;

}