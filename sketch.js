var ground,player,obstaclesGroup,fruitsGroup,banana,scene,survivalTime,
    obstacle,score,playerimg,obstacleimg,groundimg,sceneimg,bananaimg ;


function preload(){
  
  sceneimg=loadImage("jungle.jpg");
  
  playerimg=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  obstacleimg=loadImage("stone.png");
  //groundimg=loadImage("ground.jpg");
  
  bananaimg=loadImage("banana.png");
}


function setup() {
  createCanvas(600,300);

  scene=createSprite(0,0,600,300);
  scene.addImage(sceneimg);
  scene.scale=1.5;
  scene.x=scene.x/2;
  scene.velocityX=-2;

  
  ground=createSprite(590,180,10,5);
  ground.velocityX=-6;
  ground.x=ground.x/2;
  ground.visible=false;


  player=createSprite(200,360,20,50);
  player.addAnimation(playerimg);
  player.scale=0.1; 

  fruitsGroup=new Group();
  obstaclesGroup=new Group();
  
 score=0;

  //set text
textSize(18);
textStyle(BOLD);
  
}


function draw(){
 background(255); 
  
 

   //move the ground
   //ground.velocityX = -(6 + 3*count/100);

    //scoring
    //survivalTime = count+ Math.round(World.frameRate/60);

    //spawn the fruits
    spawnfruits();

    //spawn the obstacles
    spawnobstacles();
  
    if (scene.x < 0){
      scene.x = scene.width/2;
    }       
   
   if (ground.x < 0){
      ground.x = ground.width/2;
    }       
  
   //jump when the space key is pressed
    if(keyDown("space") && player.y >= 100){
      player.velocityY = -12 ;
      
    }
  
    //add gravity
    player.velocityY = player.velocityY + 0.9;
    
     //stop player from falling down
      player.collide(ground);
      
      /*
      survivalTime = 0;
      stroke("black");
      textSize(20);
      fill("black");
        survivalTime=Math.ceil(frameRate/30);
       survivalTime=Math.ceil(frameCount/30);
       text("Score : " + Score,100,50);*/

       if(fruitsGroup.isTouching(player)){
         fruitsGroup.destroyEach();
         score=score+1;
       }
       if(obstaclesGroup.isTouching(player)){
        player.scale=0.1;

      }
      text("Score : " + score,100,50);
         
       switch(score){

        case 10 : player.scale = 0.12;
           break;
      
        case 20 : player.scale = 0.14;
           break;
           
        case 30 : player.scale = 0.16;
          break;
          
       case 40 : player.scale = 0.18;
          break;   
      
       default:break;
      }
  
   drawSprites();
}

function spawnobstacles() {
  if(World.frameCount % 60 === 0) {
  
   //Add image of obstacle
  obstacle = createSprite(400,360,10,10);
  obstacle.addImage(obstacleimg);
  
   obstacle.velocityX = -3;
   
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.15;
    obstacle.lifetime = 134;

    obstaclesGroup.add(obstacle);
  }
}

function spawnfruits() {
  if(World.frameCount % 60 === 0) {
  
   //Add image of banana
   banana = createSprite(400,270,10,10);
  banana.addImage(bananaimg);
  banana.scale = 0.05;

   
   banana.velocityX = -6;
   
    
    //assign scale and lifetime to the stone           
    banana.scale = 0.05;
    banana.lifetime = 70;


    fruitsGroup.add(banana);
  }
}






