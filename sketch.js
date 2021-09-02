var iss,issimg;
var spacecraft,spacecraftimg;
var background1;
var hasDocked=false;


function preload (){
  background1=loadImage("spacebg.jpg");
  issimg=loadImage("iss.png");
  spacecraftimg=loadImage("spacecraft1.png");
  spacecraftimg1=loadImage("spacecraft2.png");
  spacecraftimg2=loadImage("spacecraft3.png");
  spacecraftimg3=loadImage("spacecraft4.png");
}



function setup() {
  createCanvas(800,400);
  
 spacecraft= createSprite(285, 240);
spacecraft.addImage(spacecraftimg);
spacecraft.scale=0.2;
iss=createSprite(330,130);
iss.addImage(issimg);
iss.scale=0.6;

}

function draw() {
  background(background1);  
if (!hasDocked){
spacecraft.x=spacecraft.x+random (-1,1);
if (keyDown ("UP_ARROW")){
  spacecraft.y=spacecraft.y-2;

}
if (keyDown ("LEFT_ARROW")){
  spacecraft.x=spacecraft.x-2;
  spacecraft.addImage(spacecraftimg2);
}
if (keyDown ("RIGHT_ARROW")){
  spacecraft.x=spacecraft.x+2;
spacecraft.addImage(spacecraftimg3);
}
if (keyDown ("DOWN_ARROW")){
  spacecraft.addImage(spacecraftimg1);

}

}
if (spacecraft.y<=iss.y+70 && spacecraft.x<=iss.x-10 ){
  hasDocked=true;
  textSize(25);
  fill ("pink");
  text("docking successful",250,250);
}






  drawSprites();
}