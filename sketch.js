var bgImg;
var cat
function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png")
    catimg1=loadAnimation("images/cat1.png");
    mouseimg1=loadAnimation("images/mouse1.png");
    catimg2=loadAnimation("images/cat2.png","images/cat3.png");
    catimg3=loadAnimation("images/cat4.png");
    mouseimg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseimg3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(800,600);
    tom.addAnimation("tomSleeping",catimg1);
    tom.scale=0.1
    jerry=createSprite(200,600);
    jerry.addAnimation("jerryStanding",mouseimg1);
    jerry.scale=0.15
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
      tom.velocityX=0;
        tom.addAnimation("lastimg",catimg3);
        tom.changeAnimation("lastimg");
        tom.x=300
        tom.scale=0.2
        jerry.addAnimation("jerrylastimg",jerryimg3)
        jerry.scale=0.15
        jerry.changeAnimation("jerrylastimg")
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
    tom.velocityX=-5
    tom.addAnimation("tomRunning",catimg2);
    tom.changeAnimation("tomRunning")
    jerry.addAnimation("mouseTeasing",mouseimg2);
    jerry.changeAnimation("mouseTeasing");
    jerry.frameDelay=25;
  }
}
