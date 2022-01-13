var a , b, wall , car;

function setup() {
  createCanvas(800,400);
  a= createSprite(100, 200, 50, 50); // 50/2=25
  a.shapeColor="black";

  b= createSprite(200, 200, 40, 40);// 40/2=20
  b.shapeColor="yellow";       //  25+20=45  , a.width/2+b.width/2

  wall= createSprite(200, 200, 50, 80); // 50/2=25
  wall.shapeColor="red";

  car= createSprite(400, 200, 80, 50); // 50/2=25
  car.shapeColor="orange";
}

function draw() {
  background("beige");  
b.x= mouseX;
b.y= mouseY;
console.log(a.x-b.x);

rev(car,wall);

if(isTouching(b,wall)){
  car.velocityX=-2;
}
  


  drawSprites();
}

