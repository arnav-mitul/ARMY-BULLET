var bullet1,bullet2,bullet3,bullet4,wall;
var speed,speed2,speed3,speed4;
var deformation1,deformation2,deformation3,deformation4;
var thickness;

function setup() {
  createCanvas(1600, 400);
  speed=random(3,8);
  speed2=random(5,48);
  speed3=random(2,6);
  speed4=random(1,9);
  wall=createSprite(1500,200,random(20,60),400);
  bullet1=createSprite(100,100,50,20);
  bullet2=createSprite(100,200,50,20);
  bullet3=createSprite(100,300,50,20);
  bullet4=createSprite(100,400,50,20);
  bullet1.velocityX=speed;
  bullet2.velocityX=speed2;
  bullet3.velocityX=speed3;
  bullet4.velocityX=speed4;
 deformation1=0.5*random(2,3)*bullet1.velocityX*bullet1.velocityX/random(20,60),random(20,60),random(20,60);
 deformation2=0.5*random(1,7)*bullet2.velocityX*bullet2.velocityX/random(20,60),random(20,60),random(20,60);
 deformation3=0.5*random(1,3)*bullet3.velocityX*bullet3.velocityX/random(20,60),random(20,60),random(20,60);
 deformation4=0.5*random(20,56)*bullet4.velocityX*bullet4.velocityX/random(20,60),random(20,60),random(20,60);
}

function draw(){
background("black")
wall.visible=true;


if(collide(bullet1,wall)){
//bullet1.velocityX=0
if(deformation1>10){
  bullet1.shapeColor="red";
  text("THE BULLET IS SUPER EFFECTIVE",100,100);
}
if(deformation1<10){
  bullet1.shapeColor="green";
  text("THE BULLET IS NOT EFFECTIVE",100,100);
}
wall.visible=true
}

if(collide(bullet2,wall)){
  //bullet2.velocityX=0
  if(deformation2>10){
    bullet2.shapeColor="red";
    text("THE BULET IS SUPER EFFECTIVE",100,200);
  }
  if(deformation2<10){
    bullet2.shapeColor="green";
    text("THE BULLET IS NOT EFFECTIVE",100,200);
  }

  wall.visible=true;
  }

  if(collide(bullet3,wall)){
    //car3.velocityX=0
    if(deformation3>10){
      bullet3.shapeColor="red";
      text("THE BULLET IS SUPER EFFECTIVE",100,300);
    }
    if(deformation3<10){
      bullet3.shapeColor="green";
      text("THE BULLET IS NOT EFFECTIVE",100,300);
    }
    
    wall.visible=true;
    }

    if(collide(bullet4,wall)){
      //car4.velocityX=0
      if(deformation4>10){
        bullet4.shapeColor="red";
        text("THE BULLET IS EFFECTIVE",100,400)
      }
      if(deformation4<10){
        bullet4.shapeColor="green";
        text("THE BULLET IS NOY EFFECTIVE",100,370);
      }
      
      wall.visible=true;
      }



  drawSprites();
}



 










