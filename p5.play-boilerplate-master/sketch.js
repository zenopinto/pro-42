var issImg,spacecraft1Image,spacecraft2Image,spacecraft3Image,spacecraft4Image,bg,iss,spacecraft;



function preload(){
  issImg = loadImage("/img/iss.png")
  spacecraft1Image = loadImage("/img/spacecraft1.png")
  spacecraft2Image = loadImage("/img/spacecraft2.png")
  spacecraft3Image = loadImage("/img/spacecraft3.png")
  spacecraft4Image = loadImage("/img/spacecraft4.png")
  bg = loadImage("/img/spacebg.jpg")
}



function setup() {
  createCanvas(800,400);
  hasDocked = false;
  iss = createSprite(500,100,0,0);
  iss.addImage("iss",issImg);
  iss.scale = 0.5;
  spacecraft = createSprite(500,300,0,0);
  spacecraft.addImage("normal",spacecraft1Image);
  spacecraft.scale = 0.2;
}



function draw() {
  background(bg);  
  if(!hasDocked) {
    spacecraft.x += random(1,-1);
    if(keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y -2;
    }
      
    if(keyDown("LEFT_ARROW")){
        spacecraft.addImage(spacecraft3Image);
      spacecraft.x = spacecraft.x - 1;
    }
      
    if(keyDown("RIGHT_ARROW")){
        spacecraft.addImage(spacecraft4Image);
      spacecraft.x = spacecraft.x + 1;
    }
      
    if(keyDown("DOWN_ARROW")){
        spacecraft.addImage(spacecraft2Image);
    }
  }
  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("blue")
    text("Docking Successful!", 200, 300);
  }
  drawSprites();

}