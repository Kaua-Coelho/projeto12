var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage of the path
  //loadAnimation of the boy
 pathImg = loadImage("path.png")
 
 boyImg = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  
  createCanvas(400,400)
  
 //create sprite for the path 
 //add image for the path
 //Make the track a moving background by giving velocity Y.
 path=createSprite(200,200,40,20);
 path.addImage(pathImg)
 path.scale=1.2;


  //create a boy sprite
  //add animation for the boy
  boy=createSprite(200,300,20,20);
  boy.addAnimation("boyImg",boyImg)
  boy.scale=0.08;

  
  // create left Boundary
  leftBoundary=createSprite(0,0,100,800);
  //set visibility as false for left boundary
  leftBoundary.visible=false
  //create right Boundary
  rightBoundary=createSprite(410,0,100,800);
  //set visibility as false for left boundary
  rightBoundary.visible=false
  }

function draw() {
  background(0);
  
  
  path.velocityY = 4;

  
  // boy moving on Xaxis with mouse
  boy.x = World.mouseX
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // collide the boy with the left and right invisible boundaries.
  boy.bounce(rightBoundary)
  boy.bounce(leftBoundary)
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
