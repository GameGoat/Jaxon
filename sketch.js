var jaxon
var road

function preload(){
  //pre-load images
  roadImg.loadImages("path.png");
  jaxonImg.loadImages("Runner-1.png,Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  
  //create sprites here
  jaxon = createSprite(200,200,20,20);
  road = createSprite(200,200);
  road.addImage(roadImg);
  road.velocityY = 4;
  road.scale = 1.2;
  jaxon = createSprite(200,200,20,20)
  jaxon.addImage(jaxonImg)
  jaxon.velocityY = 2
  invisibleRoad = createSprite(400,0,20,20)
  invisibleRoad.visible = false
  invisibleRoad = createSprite(-400,0,20,20)
  invisibleRoad.visible = false
}

function draw() {
  background(0);
  if (road.y > 400){
    road.y = height/2;
     jaxon.collide(invisibleRoad)       
    mouseX = jaxon

    }  
  }

drawSprites()