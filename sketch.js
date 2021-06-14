var playerTank; 
var playerTankUp_Image,playerTankLeft_Image,playerTankRight_Image,playerTankDown_Image;

var player2Tank;
var player2TankUp_Image,player2TankLeft_Image,player3TankRight_Image,playe4TankDown_Image;

var shooter;

var shooter_ImageUp,shooter_ImageLeft,shooter_ImageRight,shooter_ImageDown;

var player2Shooter;

var player2Shooter_ImageUp,player2Shooter_ImageLeft,player2enemyShooter_ImageRight,player2enemyShooter_ImageDown;

var shooter_GroupUp,shooterGroupLeft,shooterGroupRight,shooterGroupDown;

var player2Shooter_GroupUp,player2ShooterGroupLeft,player2ShooterGroupRight,player2ShooterGroupDown;


var solid_Brick1;
var solidBrick_Image;

var break_Brick1;
var breakBrick_Image;

var diamond,diamond_Image;

var shoot_Sound;
var hit_Sound;

var enemyTankRightLeft1,enemyTankLeftRight1,enemyTankRightLeft2;

var enemyTankRight_Image,enemyTankLeft_Image;

function preload(){

  
  playerTankUp_Image = loadImage("playerTankUp.png");
  playerTankLeft_Image = loadImage("playerTankLeft.png");
  playerTankRight_Image = loadImage("playerTankRight.png");
  playerTankDown_Image = loadImage("playerTankDown.png");

  player2TankUp_Image = loadImage("player2TankUp.png");
  player2TankLeft_Image = loadImage("player2TankLeft.png");
  player2TankRight_Image = loadImage("player2TankRight.png");
  player2TankDown_Image = loadImage("player2TankDown.png");

  solidBrick_Image = loadImage("solid_Brick.jpg");
  breakBrick_Image = loadImage("break_Brick.jpg");
  
  diamond_Image = loadImage("diamond_Image.png");

  shooter_ImageUp = loadImage("bullet.png");
  shooter_ImageLeft = loadImage("bullet.png");
  shooter_ImageRight = loadImage("bullet.png");
  shooter_ImageDown = loadImage("bullet.png");

  player2Shooter_ImageUp = loadImage("player2Bullet.png");
  player2Shooter_ImageLeft = loadImage("player2Bullet.png");
  player2Shooter_ImageRight = loadImage("player2Bullet.png");
  player2Shooter_ImageDown = loadImage("player2Bullet.png");

  enemyTankRight1 = loadImage("enemyTankRight.png");
  enemyTankLeft1 = loadImage("enemyTankLeft.png");

  shoot_Sound = loadSound("shoot_Sound.mp3");
  hit_Sound = loadSound("hit_Sound.mp3");
  die_Sound = loadSound("die_Sound.mp3");

  enemyTankRight_Image = loadImage("enemyTankRight.png");
  enemyTankLeft_Image = loadImage("enemyTankLeft.png");

  enemyTankRight2_Image = loadImage("enemyTankRight2.png");
  enemyTankLeft2_Image = loadImage("enemyTankLeft2.png");

}

function setup(){
  createCanvas(750,850);

  leftEdge = createSprite(2,423,8,850);
  leftEdge.visible = false;

  rightEdge = createSprite(745,425,8,850);
  rightEdge.visible = false;

  topEdge = createSprite(370,5,750,8);
  topEdge.visible = false;

  bottomEdge = createSprite(375,858,750,8);
  bottomEdge.visible = false;




  enemyTankRightLeft1 = createSprite(50,355);

  enemyTankRightLeft1.addImage("enemytankright",enemyTankRight_Image);
  enemyTankRightLeft1.addImage("enemytankleft",enemyTankLeft_Image);

  enemyTankRightLeft1.scale = 0.8;
  enemyTankRightLeft1.velocityX = +2.5;

  invisibleLeftWall1= createSprite(5,375,10,55);
  invisibleLeftWall1.visible = false;

  invisibleRightWall1 = createSprite(295,375,10,55);
  invisibleRightWall1.visible = false;



  enemyTankLeftRight1 = createSprite(700,500);

  enemyTankLeftRight1.addImage("enemytankleft2",enemyTankLeft2_Image);
  enemyTankLeftRight1.addImage("enemytankright2",enemyTankRight2_Image);

  enemyTankLeftRight1.scale = 0.8;
  enemyTankLeftRight1.velocityX = -3;

  invisibleLeftWall2= createSprite(435,500,10,55);
  invisibleLeftWall2.visible = false;

  invisibleRightWall2 = createSprite(750,500,10,55);
  invisibleRightWall2.visible = false;

  enemyTankRightLeft2 = createSprite(125,815);

  enemyTankRightLeft2.addImage("enemytankright",enemyTankRight_Image);
  enemyTankRightLeft2.addImage("enemytankleft",enemyTankLeft_Image);

  enemyTankRightLeft2.scale = 0.8;
  enemyTankRightLeft2.velocityX = +1.8;

  invisibleRightWall3 = createSprite(285,815,10,55);
  invisibleRightWall3.visible = false;

  invisibleLeftWall3 = createSprite(2,815,10,55);
  invisibleLeftWall3.visible = false;




  diamond = createSprite(375,805);
  diamond.addImage("diamond",diamond_Image);
  diamond.scale = 0.5;

  
  break_Brick1 = createSprite(70,750);
  break_Brick1.addImage("breakbrick",breakBrick_Image);
  break_Brick1.scale = 0.9;

  break_Brick2 = createSprite(70,705);
  break_Brick2.addImage("breakbrick",breakBrick_Image);
  break_Brick2.scale = 0.9;

  break_Brick3 = createSprite(70,660);
  break_Brick3.addImage("breakbrick",breakBrick_Image);
  break_Brick3.scale = 0.9;

  break_Brick4 = createSprite(70,615);
  break_Brick4.addImage("breakbrick",breakBrick_Image);
  break_Brick4.scale = 0.9;

  break_Brick5 = createSprite(70,570);
  break_Brick5.addImage("breakbrick",breakBrick_Image);
  break_Brick5.scale = 0.9;

  break_Brick6 = createSprite(170,750);
  break_Brick6.addImage("breakbrick",breakBrick_Image);
  break_Brick6.scale = 0.9;

  break_Brick7 = createSprite(170,705);
  break_Brick7.addImage("breakbrick",breakBrick_Image);
  break_Brick7.scale = 0.9;

  break_Brick8 = createSprite(170,660);
  break_Brick8.addImage("breakbrick",breakBrick_Image);
  break_Brick8.scale = 0.9;

  break_Brick9 = createSprite(170,615);
  break_Brick9.addImage("breakbrick",breakBrick_Image);
  break_Brick9.scale = 0.9;

  break_Brick10 = createSprite(170,570);
  break_Brick10.addImage("breakbrick",breakBrick_Image);
  break_Brick10.scale = 0.9;

  break_Brick11 = createSprite(320,630);
  break_Brick11.addImage("breakbrick",breakBrick_Image);
  break_Brick11.scale = 0.9;

  break_Brick12 = createSprite(320,590);
  break_Brick12.addImage("breakbrick",breakBrick_Image);
  break_Brick12.scale = 0.9;
  
  break_Brick13 = createSprite(320,550);
  break_Brick13.addImage("breakbrick",breakBrick_Image);
  break_Brick13.scale = 0.9;

  break_Brick14 = createSprite(320,510);
  break_Brick14.addImage("breakbrick",breakBrick_Image);
  break_Brick14.scale = 0.9;
  
  solid_Brick1 = createSprite(365,550);
  solid_Brick1.addImage("solidbrick",solidBrick_Image);
  solid_Brick1.scale = 1;

  break_Brick15 = createSprite(410,590);
  break_Brick15.addImage("breakbrick",breakBrick_Image);
  break_Brick15.scale = 0.9;
  
  break_Brick16 = createSprite(410,550);
  break_Brick16.addImage("breakbrick",breakBrick_Image);
  break_Brick16.scale = 0.9;

  break_Brick17 = createSprite(410,510);
  break_Brick17.addImage("breakbrick",breakBrick_Image);
  break_Brick17.scale = 0.9;
  
  break_Brick18 = createSprite(410,550);
  break_Brick18.addImage("breakbrick",breakBrick_Image);
  break_Brick18.scale = 0.9;

  break_Brick19 = createSprite(410,590);
  break_Brick19.addImage("breakbrick",breakBrick_Image);
  break_Brick19.scale = 0.9;
  
  break_Brick20 = createSprite(410,630);
  break_Brick20.addImage("breakbrick",breakBrick_Image);
  break_Brick20.scale = 0.9;

  break_Brick21 = createSprite(565,750);
  break_Brick21.addImage("breakbrick",breakBrick_Image);
  break_Brick21.scale = 0.9;

  break_Brick22 = createSprite(565,705);
  break_Brick22.addImage("breakbrick",breakBrick_Image);
  break_Brick22.scale = 0.9;

  break_Brick23 = createSprite(565,660);
  break_Brick23.addImage("breakbrick",breakBrick_Image);
  break_Brick23.scale = 0.9;

  break_Brick24 = createSprite(565,615);
  break_Brick24.addImage("breakbrick",breakBrick_Image);
  break_Brick24.scale = 0.9;

  break_Brick25 = createSprite(565,570);
  break_Brick25.addImage("breakbrick",breakBrick_Image);
  break_Brick25.scale = 0.9;

  break_Brick26 = createSprite(665,750);
  break_Brick26.addImage("breakbrick",breakBrick_Image);
  break_Brick26.scale = 0.9;

  break_Brick27 = createSprite(665,705);
  break_Brick27.addImage("breakbrick",breakBrick_Image);
  break_Brick27.scale = 0.9;

  break_Brick28 = createSprite(665,660);
  break_Brick28.addImage("breakbrick",breakBrick_Image);
  break_Brick28.scale = 0.9;

  break_Brick29 = createSprite(665,615);
  break_Brick29.addImage("breakbrick",breakBrick_Image);
  break_Brick29.scale = 0.9;

  break_Brick30 = createSprite(665,570);
  break_Brick30.addImage("breakbrick",breakBrick_Image);
  break_Brick30.scale = 0.9;

  break_Brick31 = createSprite(70,100);
  break_Brick31.addImage("breakbrick",breakBrick_Image);
  break_Brick31.scale = 0.9;

  break_Brick32 = createSprite(70,145);
  break_Brick32.addImage("breakbrick",breakBrick_Image);
  break_Brick32.scale = 0.9;

  break_Brick33 = createSprite(70,190);
  break_Brick33.addImage("breakbrick",breakBrick_Image);
  break_Brick33.scale = 0.9;

  break_Brick34 = createSprite(70,235);
  break_Brick34.addImage("breakbrick",breakBrick_Image);
  break_Brick34.scale = 0.9;

  break_Brick35 = createSprite(70,280);
  break_Brick35.addImage("breakbrick",breakBrick_Image);
  break_Brick35.scale = 0.9;

  break_Brick36 = createSprite(170,100);
  break_Brick36.addImage("breakbrick",breakBrick_Image);
  break_Brick36.scale = 0.9;

  break_Brick37 = createSprite(170,145);
  break_Brick37.addImage("breakbrick",breakBrick_Image);
  break_Brick37.scale = 0.9;

  break_Brick38 = createSprite(170,190);
  break_Brick38.addImage("breakbrick",breakBrick_Image);
  break_Brick38.scale = 0.9;

  break_Brick39 = createSprite(170,235);
  break_Brick39.addImage("breakbrick",breakBrick_Image);
  break_Brick39.scale = 0.9;

  break_Brick40 = createSprite(170,280);
  break_Brick40.addImage("breakbrick",breakBrick_Image);
  break_Brick40.scale = 0.9;
  
  break_Brick41 = createSprite(318,100);
  break_Brick41.addImage("breakbrick",breakBrick_Image);
  break_Brick41.scale = 0.9;

  break_Brick42 = createSprite(318,145);
  break_Brick42.addImage("breakbrick",breakBrick_Image);
  break_Brick42.scale = 0.9;

  break_Brick43 = createSprite(318,190);
  break_Brick43.addImage("breakbrick",breakBrick_Image);
  break_Brick43.scale = 0.9;

  break_Brick44 = createSprite(318,235);
  break_Brick44.addImage("breakbrick",breakBrick_Image);
  break_Brick44.scale = 0.9;

  solid_Brick2 = createSprite(365,195);
  solid_Brick2.addImage("solidbrick",solidBrick_Image);
  solid_Brick2.scale = 1;
  
  break_Brick45 = createSprite(413,100);
  break_Brick45.addImage("breakbrick",breakBrick_Image);
  break_Brick45.scale = 0.9;

  break_Brick46 = createSprite(413,145);
  break_Brick46.addImage("breakbrick",breakBrick_Image);
  break_Brick46.scale = 0.9;

  break_Brick47 = createSprite(413,190);
  break_Brick47.addImage("breakbrick",breakBrick_Image);
  break_Brick47.scale = 0.9;

  break_Brick48 = createSprite(413,235);
  break_Brick48.addImage("breakbrick",breakBrick_Image);
  break_Brick48.scale = 0.9;
  
  break_Brick49 = createSprite(565,100);
  break_Brick49.addImage("breakbrick",breakBrick_Image);
  break_Brick49.scale = 0.9;

  break_Brick50 = createSprite(565,145);
  break_Brick50.addImage("breakbrick",breakBrick_Image);
  break_Brick50.scale = 0.9;

  break_Brick51 = createSprite(565,190);
  break_Brick51.addImage("breakbrick",breakBrick_Image);
  break_Brick51.scale = 0.9;

  break_Brick52 = createSprite(565,235);
  break_Brick52.addImage("breakbrick",breakBrick_Image);
  break_Brick52.scale = 0.9;

  break_Brick53 = createSprite(565,280);
  break_Brick53.addImage("breakbrick",breakBrick_Image);
  break_Brick53.scale = 0.9;

  break_Brick54 = createSprite(665,100);
  break_Brick54.addImage("breakbrick",breakBrick_Image);
  break_Brick54.scale = 0.9;

  break_Brick55 = createSprite(665,145);
  break_Brick55.addImage("breakbrick",breakBrick_Image);
  break_Brick55.scale = 0.9;

  break_Brick56 = createSprite(665,190);
  break_Brick56.addImage("breakbrick",breakBrick_Image);
  break_Brick56.scale = 0.9;

  break_Brick57 = createSprite(665,235);
  break_Brick57.addImage("breakbrick",breakBrick_Image);
  break_Brick57.scale = 0.9;

  break_Brick58 = createSprite(665,280);
  break_Brick58.addImage("breakbrick",breakBrick_Image);
  break_Brick58.scale = 0.9;

  break_Brick59 = createSprite(318,370);
  break_Brick59.addImage("breakbrick",breakBrick_Image);
  break_Brick59.scale = 0.9;

  break_Brick60 = createSprite(410,370);
  break_Brick60.addImage("breakbrick",breakBrick_Image);
  break_Brick60.scale = 0.9;

  break_Brick61 = createSprite(565,440);
  break_Brick61.addImage("breakbrick",breakBrick_Image);
  break_Brick61.scale = 0.9;

  break_Brick62 = createSprite(610,440);
  break_Brick62.addImage("breakbrick",breakBrick_Image);
  break_Brick62.scale = 0.9;

  break_Brick63 = createSprite(125,440);
  break_Brick63.addImage("breakbrick",breakBrick_Image);
  break_Brick63.scale = 0.9;

  break_Brick64 = createSprite(170,440);
  break_Brick64.addImage("breakbrick",breakBrick_Image);
  break_Brick64.scale = 0.9;

  solid_Brick3 = createSprite(30,440);
  solid_Brick3.addImage("solidbrick",solidBrick_Image);
  solid_Brick3.scale = 0.9;

  solid_Brick4 = createSprite(725,440);
  solid_Brick4.addImage("solidbrick",solidBrick_Image);
  solid_Brick4.scale = 0.9;

  break_Brick65 = createSprite(310,825);
  break_Brick65.addImage("breakbrick",breakBrick_Image);
  break_Brick65.scale = 0.9;

  break_Brick66 = createSprite(310,780);
  break_Brick66.addImage("breakbrick",breakBrick_Image);
  break_Brick66.scale = 0.9;

  solid_Brick5 = createSprite(310,735);
  solid_Brick5.addImage("solidbrick",solidBrick_Image);
  solid_Brick5.scale = 0.9;

  solid_Brick6 = createSprite(355,735);
  solid_Brick6.addImage("solidbrick",solidBrick_Image);
  solid_Brick6.scale = 0.9;

  solid_Brick7 = createSprite(400,735);
  solid_Brick7.addImage("solidbrick",solidBrick_Image);
  solid_Brick7.scale = 0.9;

  solid_Brick8 = createSprite(445,735);
  solid_Brick8.addImage("solidbrick",solidBrick_Image);
  solid_Brick8.scale = 0.9;




  break_Brick67 = createSprite(445,780);
  break_Brick67.addImage("breakbrick",breakBrick_Image);
  break_Brick67.scale = 0.9;

  break_Brick68 = createSprite(445,825);
  break_Brick68.addImage("breakbrick",breakBrick_Image);
  break_Brick68.scale = 0.9;

  player2Tank = createSprite(485,150);

  player2Tank.addImage("player2down",player2TankDown_Image);
  player2Tank.addImage("player2right",player2TankRight_Image);
  player2Tank.addImage("player2up",player2TankUp_Image);
  player2Tank.addImage("player2left",player2TankLeft_Image);

  player2Tank.scale = 1.7;


  playerTank = createSprite(240,150);

  playerTank.addImage("playerdown",playerTankDown_Image);
  playerTank.addImage("playerright",playerTankRight_Image);
  playerTank.addImage("playerup",playerTankUp_Image);
  playerTank.addImage("playerleft",playerTankLeft_Image);

  playerTank.scale = 1.7;

 

  shooterGroupUp = new Group();
  shooterGroupLeft = new Group();
  shooterGroupRight = new Group();
  shooterGroupDown = new Group();

  player2ShooterGroupUp = new Group();
  player2ShooterGroupLeft = new Group();
  player2ShooterGroupRight = new Group();
  player2ShooterGroupDown = new Group();

}

function draw(){
  background(10,10,10);



  if(enemyTankRightLeft1.isTouching(invisibleRightWall1)){
    enemyTankRightLeft1.changeImage("enemytankleft",enemyTankLeft_Image);

    enemyTankRightLeft1.bounceOff(invisibleLeftWall1);
    enemyTankRightLeft1.bounceOff(invisibleRightWall1);
  }

  if(enemyTankRightLeft1.isTouching(invisibleLeftWall1)){
    enemyTankRightLeft1.changeImage("enemytankright",enemyTankRight_Image);
    
    enemyTankRightLeft1.bounceOff(invisibleLeftWall1);
    enemyTankRightLeft1.bounceOff(invisibleRightWall1);
  }


  if(enemyTankLeftRight1.isTouching(invisibleRightWall2)){
    enemyTankLeftRight1.changeImage("enemytankleft2",enemyTankLeft2_Image);

    enemyTankLeftRight1.bounceOff(invisibleLeftWall2);
    enemyTankLeftRight1.bounceOff(invisibleRightWall2);
  }

  if(enemyTankLeftRight1.isTouching(invisibleLeftWall2)){
    enemyTankLeftRight1.changeImage("enemytankright2",enemyTankRight2_Image);
    
    enemyTankLeftRight1.bounceOff(invisibleLeftWall2);
    enemyTankLeftRight1.bounceOff(invisibleRightWall2);
  }




  if(enemyTankRightLeft2.isTouching(invisibleRightWall3)){
    enemyTankRightLeft2.changeImage("enemytankleft",enemyTankLeft_Image);

    enemyTankRightLeft2.bounceOff(invisibleLeftWall3);
    enemyTankRightLeft2.bounceOff(invisibleRightWall3);
  }

  if(enemyTankRightLeft2.isTouching(invisibleLeftWall3)){
    enemyTankRightLeft2.changeImage("enemytankright",enemyTankRight_Image);
    
    enemyTankRightLeft2.bounceOff(invisibleLeftWall3);
    enemyTankRightLeft2.bounceOff(invisibleRightWall3);
  }

  playerTank.collide(player2Tank);
  player2Tank.collide(playerTank);

  playerTank.collide(leftEdge);
  playerTank.collide(rightEdge);
  playerTank.collide(topEdge);
  playerTank.collide(bottomEdge);

  player2Tank.collide(leftEdge);
  player2Tank.collide(rightEdge);
  player2Tank.collide(topEdge);
  player2Tank.collide(bottomEdge);

  playerTank.collide(break_Brick1);
  playerTank.collide(break_Brick2);
  playerTank.collide(break_Brick3);
  playerTank.collide(break_Brick4);
  playerTank.collide(break_Brick5);
  playerTank.collide(break_Brick6);
  playerTank.collide(break_Brick7);
  playerTank.collide(break_Brick8);
  playerTank.collide(break_Brick9);
  playerTank.collide(break_Brick10);
  playerTank.collide(break_Brick11);
  playerTank.collide(break_Brick12);
  playerTank.collide(break_Brick13);
  playerTank.collide(break_Brick14);
  playerTank.collide(break_Brick15);
  playerTank.collide(break_Brick16);
  playerTank.collide(break_Brick17);
  playerTank.collide(break_Brick18);
  playerTank.collide(break_Brick19);
  playerTank.collide(break_Brick20);
  playerTank.collide(break_Brick21);
  playerTank.collide(break_Brick22);
  playerTank.collide(break_Brick23);
  playerTank.collide(break_Brick24);
  playerTank.collide(break_Brick25);
  playerTank.collide(break_Brick26);
  playerTank.collide(break_Brick27);
  playerTank.collide(break_Brick28);
  playerTank.collide(break_Brick29);
  playerTank.collide(break_Brick30);
  playerTank.collide(break_Brick31);
  playerTank.collide(break_Brick32);
  playerTank.collide(break_Brick33);
  playerTank.collide(break_Brick34);
  playerTank.collide(break_Brick35);
  playerTank.collide(break_Brick36);
  playerTank.collide(break_Brick37);
  playerTank.collide(break_Brick38);
  playerTank.collide(break_Brick39);
  playerTank.collide(break_Brick40);
  playerTank.collide(break_Brick41);
  playerTank.collide(break_Brick42);
  playerTank.collide(break_Brick43);
  playerTank.collide(break_Brick44);
  playerTank.collide(break_Brick45);
  playerTank.collide(break_Brick46);
  playerTank.collide(break_Brick47);
  playerTank.collide(break_Brick48);
  playerTank.collide(break_Brick49);
  playerTank.collide(break_Brick50);
  playerTank.collide(break_Brick51);
  playerTank.collide(break_Brick52);
  playerTank.collide(break_Brick53);
  playerTank.collide(break_Brick54);
  playerTank.collide(break_Brick55);
  playerTank.collide(break_Brick56);
  playerTank.collide(break_Brick57);
  playerTank.collide(break_Brick58);
  playerTank.collide(break_Brick59);
  playerTank.collide(break_Brick60);
  playerTank.collide(break_Brick61);
  playerTank.collide(break_Brick62);
  playerTank.collide(break_Brick63);
  playerTank.collide(break_Brick64);
  playerTank.collide(break_Brick65);
  playerTank.collide(break_Brick66);
  playerTank.collide(break_Brick67);
  playerTank.collide(break_Brick68);

 
  playerTank.collide(solid_Brick1);
  playerTank.collide(solid_Brick2);
  playerTank.collide(solid_Brick3);
  playerTank.collide(solid_Brick4);
  playerTank.collide(solid_Brick5);
  playerTank.collide(solid_Brick6);
  playerTank.collide(solid_Brick7);
  playerTank.collide(solid_Brick8);

  player2Tank.collide(break_Brick1);
  player2Tank.collide(break_Brick2);
  player2Tank.collide(break_Brick3);
  player2Tank.collide(break_Brick4);
  player2Tank.collide(break_Brick5);
  player2Tank.collide(break_Brick6);
  player2Tank.collide(break_Brick7);
  player2Tank.collide(break_Brick8);
  player2Tank.collide(break_Brick9);
  player2Tank.collide(break_Brick11);
  player2Tank.collide(break_Brick12);
  player2Tank.collide(break_Brick13);
  player2Tank.collide(break_Brick14);
  player2Tank.collide(break_Brick15);
  player2Tank.collide(break_Brick16);
  player2Tank.collide(break_Brick17);
  player2Tank.collide(break_Brick18);
  player2Tank.collide(break_Brick19);
  player2Tank.collide(break_Brick20);
  player2Tank.collide(break_Brick21);
  player2Tank.collide(break_Brick22);
  player2Tank.collide(break_Brick23);
  player2Tank.collide(break_Brick24);
  player2Tank.collide(break_Brick25);
  player2Tank.collide(break_Brick26);
  player2Tank.collide(break_Brick27);
  player2Tank.collide(break_Brick28);
  player2Tank.collide(break_Brick29);
  player2Tank.collide(break_Brick30);
  player2Tank.collide(break_Brick31);
  player2Tank.collide(break_Brick32);
  player2Tank.collide(break_Brick33);
  player2Tank.collide(break_Brick34);
  player2Tank.collide(break_Brick35);
  player2Tank.collide(break_Brick36);
  player2Tank.collide(break_Brick37);
  player2Tank.collide(break_Brick38);
  player2Tank.collide(break_Brick39);
  player2Tank.collide(break_Brick40);
  player2Tank.collide(break_Brick41);
  player2Tank.collide(break_Brick42);
  player2Tank.collide(break_Brick43);
  player2Tank.collide(break_Brick44);
  player2Tank.collide(break_Brick45);
  player2Tank.collide(break_Brick46);
  player2Tank.collide(break_Brick47);
  player2Tank.collide(break_Brick48);
  player2Tank.collide(break_Brick49);
  player2Tank.collide(break_Brick50);
  player2Tank.collide(break_Brick51);
  player2Tank.collide(break_Brick52);
  player2Tank.collide(break_Brick53);
  player2Tank.collide(break_Brick54);
  player2Tank.collide(break_Brick55);
  player2Tank.collide(break_Brick56);
  player2Tank.collide(break_Brick57);
  player2Tank.collide(break_Brick58);
  player2Tank.collide(break_Brick59);
  player2Tank.collide(break_Brick60);
  player2Tank.collide(break_Brick61);
  player2Tank.collide(break_Brick62);
  player2Tank.collide(break_Brick63);
  player2Tank.collide(break_Brick64);
  player2Tank.collide(break_Brick65);
  player2Tank.collide(break_Brick66);
  player2Tank.collide(break_Brick67);
  player2Tank.collide(break_Brick68);

 
  player2Tank.collide(solid_Brick1);
  player2Tank.collide(solid_Brick2);
  player2Tank.collide(solid_Brick3);
  player2Tank.collide(solid_Brick4);
  player2Tank.collide(solid_Brick5);
  player2Tank.collide(solid_Brick6);
  player2Tank.collide(solid_Brick7);
  player2Tank.collide(solid_Brick8);



  if(playerTank.isTouching(enemyTankLeftRight1) || playerTank.isTouching(enemyTankRightLeft1) || playerTank.isTouching(enemyTankRightLeft2)){
    playerTank.x = 240;
    playerTank.y = 150;

    die_Sound.play();
  }

  if(player2Tank.isTouching(enemyTankLeftRight1) || player2Tank.isTouching(enemyTankRightLeft1) || player2Tank.isTouching(enemyTankRightLeft2)){
    player2Tank.x = 485;
    player2Tank.y = 150;

    die_Sound.play();

  }


  if(shooterGroupUp.isTouching(break_Brick1)){
    break_Brick1.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick2)){
    break_Brick2.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick3)){
    break_Brick3.destroy();
    shooterGroupUp.destroyEach();
  }

  if(shooterGroupUp.isTouching(break_Brick4)){
    break_Brick4.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick5)){
    break_Brick5.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick6)){
    break_Brick6.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick7)){
    break_Brick7.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick8)){
    break_Brick8.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick9)){
    break_Brick9.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick10)){
    break_Brick10.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick11)){
    break_Brick11.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick12)){
    break_Brick12.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick13)){
    break_Brick13.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick14)){
    break_Brick14.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick15)){
    break_Brick15.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick16)){
    break_Brick16.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick17)){
    break_Brick17.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick18)){
    break_Brick18.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick19)){
    break_Brick19.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick20)){
    break_Brick20.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick21)){
    break_Brick21.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick22)){
    break_Brick22.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick23)){
    break_Brick23.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick24)){
    break_Brick24.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick25)){
    break_Brick25.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick26)){
    break_Brick26.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick27)){
    break_Brick27.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick28)){
    break_Brick28.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick29)){
    break_Brick29.destroy();
    shooterGroupUp.destroyEach();
  }

  if(shooterGroupUp.isTouching(break_Brick30)){
    break_Brick30.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick31)){
    break_Brick31.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick32)){
    break_Brick32.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick33)){
    break_Brick33.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick34)){
    break_Brick34.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick35)){
    break_Brick35.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick36)){
    break_Brick36.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick37)){
    break_Brick37.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick38)){
    break_Brick38.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick39)){
    break_Brick39.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick40)){
    break_Brick40.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick41)){
    break_Brick41.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick42)){
    break_Brick42.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick43)){
    break_Brick43.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick44)){
    break_Brick44.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick45)){
    break_Brick45.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick46)){
    break_Brick46.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick47)){
    break_Brick47.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick48)){
    break_Brick48.destroy();
    shooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick49)){
    break_Brick49.destroy();
    shooterGroupUp.destroyEach();

  }


  if(shooterGroupUp.isTouching(break_Brick50)){
    break_Brick50.destroy();
    shooterGroupUp.destroyEach();

  }

  
  if(shooterGroupUp.isTouching(break_Brick51)){
    break_Brick51.destroy();
    shooterGroupUp.destroyEach();
  }

  if(shooterGroupUp.isTouching(break_Brick52)){
    break_Brick52.destroy();
    shooterGroupUp.destroyEach();
  }

  
  if(shooterGroupUp.isTouching(break_Brick53)){
    break_Brick53.destroy();
    shooterGroupUp.destroyEach();
  }


  if(shooterGroupUp.isTouching(break_Brick54)){
    break_Brick54.destroy();
    shooterGroupUp.destroyEach();
  }


  if(shooterGroupUp.isTouching(break_Brick55)){
    break_Brick55.destroy();
    shooterGroupUp.destroyEach();
  }


  if(shooterGroupUp.isTouching(break_Brick56)){
    break_Brick56.destroy();
    shooterGroupUp.destroyEach();
  }


  if(shooterGroupUp.isTouching(break_Brick57)){
    break_Brick57.destroy();
    shooterGroupUp.destroyEach();
  }


  if(shooterGroupUp.isTouching(break_Brick58)){
    break_Brick58.destroy();
    shooterGroupUp.destroyEach();
  }

  if(shooterGroupUp.isTouching(break_Brick59)){
    break_Brick59.destroy();
    shooterGroupUp.destroyEach();
  }

  if(shooterGroupUp.isTouching(break_Brick60)){
    break_Brick60.destroy();
    shooterGroupUp.destroyEach();
  }


  if(shooterGroupUp.isTouching(break_Brick61)){
    break_Brick61.destroy();
    shooterGroupUp.destroyEach();
  }

  if(shooterGroupUp.isTouching(break_Brick62)){
    break_Brick62.destroy();
    shooterGroupUp.destroyEach();
  }

  if(shooterGroupUp.isTouching(break_Brick63)){
    break_Brick63.destroy();
    shooterGroupUp.destroyEach();
  }

  if(shooterGroupUp.isTouching(break_Brick64)){
    break_Brick64.destroy();
    shooterGroupUp.destroyEach();
  }

  if(shooterGroupUp.isTouching(break_Brick65)){
    break_Brick65.destroy();
    shooterGroupUp.destroyEach();
  }

  if(shooterGroupUp.isTouching(break_Brick66)){
    break_Brick66.destroy();
    shooterGroupUp.destroyEach();
  }

  if(shooterGroupUp.isTouching(break_Brick67)){
    break_Brick67.destroy();
    shooterGroupUp.destroyEach();
  }

  if(shooterGroupUp.isTouching(break_Brick68)){
    break_Brick68.destroy();
    shooterGroupUp.destroyEach();
  }



  if(shooterGroupRight.isTouching(break_Brick1)){
    break_Brick1.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick2)){
    break_Brick2.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick3)){
    break_Brick3.destroy();
    shooterGroupRight.destroyEach();
  }

  if(shooterGroupRight.isTouching(break_Brick4)){
    break_Brick4.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick5)){
    break_Brick5.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick6)){
    break_Brick6.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick7)){
    break_Brick7.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick8)){
    break_Brick8.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick9)){
    break_Brick9.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick10)){
    break_Brick10.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick11)){
    break_Brick11.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick12)){
    break_Brick12.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick13)){
    break_Brick13.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick14)){
    break_Brick14.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick15)){
    break_Brick15.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick16)){
    break_Brick16.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick17)){
    break_Brick17.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick18)){
    break_Brick18.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick19)){
    break_Brick19.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick20)){
    break_Brick20.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick21)){
    break_Brick21.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick22)){
    break_Brick22.destroy();
    shooterGroupRight.destroyEach();

  }
  if(shooterGroupRight.isTouching(break_Brick23)){
    break_Brick23.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick24)){
    break_Brick24.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick25)){
    break_Brick25.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick26)){
    break_Brick26.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick27)){
    break_Brick27.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick28)){
    break_Brick28.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick29)){
    break_Brick29.destroy();
    shooterGroupRight.destroyEach();
  }

  if(shooterGroupRight.isTouching(break_Brick30)){
    break_Brick30.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick31)){
    break_Brick31.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick32)){
    break_Brick32.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick33)){
    break_Brick33.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick34)){
    break_Brick34.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick35)){
    break_Brick35.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick36)){
    break_Brick36.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick37)){
    break_Brick37.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick38)){
    break_Brick38.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick39)){
    break_Brick39.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick40)){
    break_Brick40.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick41)){
    break_Brick41.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick42)){
    break_Brick42.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick43)){
    break_Brick43.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick44)){
    break_Brick44.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick45)){
    break_Brick45.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick46)){
    break_Brick46.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick47)){
    break_Brick47.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick48)){
    break_Brick48.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick49)){
    break_Brick49.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupRight.isTouching(break_Brick50)){
    break_Brick50.destroy();
    shooterGroupRight.destroyEach();
  }

  if(shooterGroupRight.isTouching(break_Brick51)){
    break_Brick51.destroy();
    shooterGroupRight.destroyEach();
  }

  if(shooterGroupRight.isTouching(break_Brick52)){
    break_Brick52.destroy();
    shooterGroupRight.destroyEach();
  }


  if(shooterGroupRight.isTouching(break_Brick53)){
    break_Brick53.destroy();
    shooterGroupRight.destroyEach();
  }
  if(shooterGroupRight.isTouching(break_Brick54)){
    break_Brick54.destroy();
    shooterGroupRight.destroyEach();
  }
  if(shooterGroupRight.isTouching(break_Brick55)){
    break_Brick55.destroy();
    shooterGroupRight.destroyEach();
  }
  if(shooterGroupRight.isTouching(break_Brick56)){
    break_Brick56.destroy();
    shooterGroupRight.destroyEach();
  }
  if(shooterGroupRight.isTouching(break_Brick57)){
    break_Brick57.destroy();
    shooterGroupRight.destroyEach();
  }
  if(shooterGroupRight.isTouching(break_Brick58)){
    break_Brick58.destroy();
    shooterGroupRight.destroyEach();
  }
  if(shooterGroupRight.isTouching(break_Brick59)){
    break_Brick59.destroy();
    shooterGroupRight.destroyEach();
  }
  if(shooterGroupRight.isTouching(break_Brick60)){
    break_Brick60.destroy();
    shooterGroupRight.destroyEach();
  }
  if(shooterGroupRight.isTouching(break_Brick61)){
    break_Brick61.destroy();
    shooterGroupRight.destroyEach();
  }
  if(shooterGroupRight.isTouching(break_Brick62)){
    break_Brick62.destroy();
    shooterGroupRight.destroyEach();
  }
  if(shooterGroupRight.isTouching(break_Brick63)){
    break_Brick63.destroy();
    shooterGroupRight.destroyEach();
  }
  if(shooterGroupRight.isTouching(break_Brick64)){
    break_Brick64.destroy();
    shooterGroupRight.destroyEach();
  }
  if(shooterGroupRight.isTouching(break_Brick65)){
    break_Brick65.destroy();
    shooterGroupRight.destroyEach();
  }
  if(shooterGroupRight.isTouching(break_Brick66)){
    break_Brick66.destroy();
    shooterGroupRight.destroyEach();
  }
  if(shooterGroupRight.isTouching(break_Brick67)){
    break_Brick67.destroy();
    shooterGroupRight.destroyEach();
  }
  if(shooterGroupRight.isTouching(break_Brick68)){
    break_Brick68.destroy();
    shooterGroupRight.destroyEach();
  }

  if(shooterGroupDown.isTouching(break_Brick1)){
    break_Brick1.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick2)){
    break_Brick2.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick3)){
    break_Brick3.destroy();
    shooterGroupDown.destroyEach();
  }

  if(shooterGroupDown.isTouching(break_Brick4)){
    break_Brick4.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick5)){
    break_Brick5.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick6)){
    break_Brick6.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick7)){
    break_Brick7.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick8)){
    break_Brick8.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick9)){
    break_Brick9.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick10)){
    break_Brick10.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick11)){
    break_Brick11.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick12)){
    break_Brick12.destroy();
    shooterGroupRight.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick13)){
    break_Brick13.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick14)){
    break_Brick14.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick15)){
    break_Brick15.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick16)){
    break_Brick16.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick17)){
    break_Brick17.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick18)){
    break_Brick18.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick19)){
    break_Brick19.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick20)){
    break_Brick20.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick21)){
    break_Brick21.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick22)){
    break_Brick22.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick23)){
    break_Brick23.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick24)){
    break_Brick24.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick25)){
    break_Brick25.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick26)){
    break_Brick26.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick27)){
    break_Brick27.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick28)){
    break_Brick28.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick29)){
    break_Brick29.destroy();
    shooterGroupDown.destroyEach();
  }

  if(shooterGroupDown.isTouching(break_Brick30)){
    break_Brick30.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick31)){
    break_Brick31.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick32)){
    break_Brick32.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick33)){
    break_Brick33.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick34)){
    break_Brick34.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick35)){
    break_Brick35.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick36)){
    break_Brick36.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick37)){
    break_Brick37.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick38)){
    break_Brick38.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick39)){
    break_Brick39.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick40)){
    break_Brick40.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick41)){
    break_Brick41.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick42)){
    break_Brick42.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick43)){
    break_Brick43.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick44)){
    break_Brick44.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick45)){
    break_Brick45.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick46)){
    break_Brick46.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick47)){
    break_Brick47.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick48)){
    break_Brick48.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick49)){
    break_Brick49.destroy();
    shooterGroupDown.destroyEach();

  }

  if(shooterGroupDown.isTouching(break_Brick50)){
    break_Brick50.destroy();
    shooterGroupDown.destroyEach();
  }

  if(shooterGroupDown.isTouching(break_Brick51)){
    break_Brick51.destroy();
    shooterGroupDown.destroyEach();
  }

  if(shooterGroupDown.isTouching(break_Brick52)){
    break_Brick52.destroy();
    shooterGroupDown.destroyEach();
  }

  if(shooterGroupDown.isTouching(break_Brick53)){
    break_Brick53.destroy();
    shooterGroupDown.destroyEach();
  }

  if(shooterGroupDown.isTouching(break_Brick54)){
    break_Brick54.destroy();
    shooterGroupDown.destroyEach();
  }

  if(shooterGroupDown.isTouching(break_Brick55)){
    break_Brick55.destroy();
    shooterGroupDown.destroyEach();
  }

  if(shooterGroupDown.isTouching(break_Brick56)){
    break_Brick56.destroy();
    shooterGroupDown.destroyEach();
  }
  if(shooterGroupDown.isTouching(break_Brick57)){
    break_Brick57.destroy();
    shooterGroupDown.destroyEach();
  }
  if(shooterGroupDown.isTouching(break_Brick58)){
    break_Brick58.destroy();
    shooterGroupDown.destroyEach();
  }
  if(shooterGroupDown.isTouching(break_Brick59)){
    break_Brick59.destroy();
    shooterGroupDown.destroyEach();
  }
  if(shooterGroupDown.isTouching(break_Brick60)){
    break_Brick60.destroy();
    shooterGroupDown.destroyEach();
  }
  if(shooterGroupDown.isTouching(break_Brick61)){
    break_Brick61.destroy();
    shooterGroupDown.destroyEach();
  }
  if(shooterGroupDown.isTouching(break_Brick62)){
    break_Brick62.destroy();
    shooterGroupDown.destroyEach();
  }
  if(shooterGroupDown.isTouching(break_Brick63)){
    break_Brick63.destroy();
    shooterGroupDown.destroyEach();
  }
  if(shooterGroupDown.isTouching(break_Brick64)){
    break_Brick64.destroy();
    shooterGroupDown.destroyEach();
  }

  if(shooterGroupDown.isTouching(break_Brick65)){
    break_Brick65.destroy();
    shooterGroupDown.destroyEach();
  }
   if(shooterGroupDown.isTouching(break_Brick66)){
    break_Brick66.destroy();
    shooterGroupDown.destroyEach();
  }
  if(shooterGroupDown.isTouching(break_Brick67)){
    break_Brick67.destroy();
    shooterGroupDown.destroyEach();
  }
  if(shooterGroupDown.isTouching(break_Brick68)){
    break_Brick68.destroy();
    shooterGroupDown.destroyEach();
  }
 
  if(shooterGroupLeft.isTouching(break_Brick1)){
    break_Brick1.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick2)){
    break_Brick2.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick3)){
    break_Brick3.destroy();
    shooterGroupLeft.destroyEach();
  }

  if(shooterGroupLeft.isTouching(break_Brick4)){
    break_Brick4.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick5)){
    break_Brick5.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick6)){
    break_Brick6.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick7)){
    break_Brick7.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick8)){
    break_Brick8.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick9)){
    break_Brick9.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick10)){
    break_Brick10.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick11)){
    break_Brick11.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick12)){
    break_Brick12.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick13)){
    break_Brick13.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick14)){
    break_Brick14.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick15)){
    break_Brick15.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick16)){
    break_Brick16.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick17)){
    break_Brick17.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick18)){
    break_Brick18.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick19)){
    break_Brick19.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick20)){
    break_Brick20.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick21)){
    break_Brick21.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick22)){
    break_Brick22.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick23)){
    break_Brick23.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick24)){
    break_Brick24.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick25)){
    break_Brick25.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick26)){
    break_Brick26.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick27)){
    break_Brick27.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick28)){
    break_Brick28.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick29)){
    break_Brick29.destroy();
    shooterGroupLeft.destroyEach();
  }

  if(shooterGroupLeft.isTouching(break_Brick30)){
    break_Brick30.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick31)){
    break_Brick31.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick32)){
    break_Brick32.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick33)){
    break_Brick33.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick34)){
    break_Brick34.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick35)){
    break_Brick35.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick36)){
    break_Brick36.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick37)){
    break_Brick37.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick38)){
    break_Brick38.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick39)){
    break_Brick39.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick40)){
    break_Brick40.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick41)){
    break_Brick41.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick42)){
    break_Brick42.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick43)){
    break_Brick43.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick44)){
    break_Brick44.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick45)){
    break_Brick45.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick46)){
    break_Brick46.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick47)){
    break_Brick47.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick48)){
    break_Brick48.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick49)){
    break_Brick49.destroy();
    shooterGroupLeft.destroyEach();

  }

  if(shooterGroupLeft.isTouching(break_Brick50)){
    break_Brick50.destroy();
    shooterGroupLeft.destroyEach();
  }


  if(shooterGroupLeft.isTouching(break_Brick51)){
    break_Brick51.destroy();
    shooterGroupLeft.destroyEach();
  }


  if(shooterGroupLeft.isTouching(break_Brick52)){
    break_Brick52.destroy();
    shooterGroupLeft.destroyEach();
  }
  if(shooterGroupLeft.isTouching(break_Brick53)){
    break_Brick53.destroy();
    shooterGroupLeft.destroyEach();
  }
  if(shooterGroupLeft.isTouching(break_Brick54)){
    break_Brick54.destroy();
    shooterGroupLeft.destroyEach();
  }
  if(shooterGroupLeft.isTouching(break_Brick55)){
    break_Brick55.destroy();
    shooterGroupLeft.destroyEach();
  }
  if(shooterGroupLeft.isTouching(break_Brick56)){
    break_Brick56.destroy();
    shooterGroupLeft.destroyEach();
  }
  if(shooterGroupLeft.isTouching(break_Brick57)){
    break_Brick57.destroy();
    shooterGroupLeft.destroyEach();
  }
  if(shooterGroupLeft.isTouching(break_Brick58)){
    break_Brick58.destroy();
    shooterGroupLeft.destroyEach();
  }
  if(shooterGroupLeft.isTouching(break_Brick59)){
    break_Brick59.destroy();
    shooterGroupLeft.destroyEach();
  }
  if(shooterGroupLeft.isTouching(break_Brick60)){
    break_Brick60.destroy();
    shooterGroupLeft.destroyEach();
  }
  if(shooterGroupLeft.isTouching(break_Brick61)){
    break_Brick61.destroy();
    shooterGroupLeft.destroyEach();
  }
  if(shooterGroupLeft.isTouching(break_Brick62)){
    break_Brick62.destroy();
    shooterGroupLeft.destroyEach();
  }
  if(shooterGroupLeft.isTouching(break_Brick63)){
    break_Brick63.destroy();
    shooterGroupLeft.destroyEach();
  }
  if(shooterGroupLeft.isTouching(break_Brick64)){
    break_Brick64.destroy();
    shooterGroupLeft.destroyEach();
  }
  if(shooterGroupLeft.isTouching(break_Brick65)){
    break_Brick65.destroy();
    shooterGroupLeft.destroyEach();
  }
  if(shooterGroupLeft.isTouching(break_Brick66)){
    break_Brick66.destroy();
    shooterGroupLeft.destroyEach();
  }
  if(shooterGroupLeft.isTouching(break_Brick67)){
    break_Brick67.destroy();
    shooterGroupLeft.destroyEach();
  }

  if(shooterGroupLeft.isTouching(break_Brick68)){
    break_Brick68.destroy();
    shooterGroupLeft.destroyEach();
  }

  //player2

  if(player2ShooterGroupUp.isTouching(break_Brick1)){
    break_Brick1.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick2)){
    break_Brick2.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick3)){
    break_Brick3.destroy();
    player2ShooterGroupUp.destroyEach();
  }


  if(player2ShooterGroupUp.isTouching(break_Brick4)){
    break_Brick4.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick5)){
    break_Brick5.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick6)){
    break_Brick6.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick7)){
    break_Brick7.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick8)){
    break_Brick8.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick9)){
    break_Brick9.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick10)){
    break_Brick10.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick11)){
    break_Brick11.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick12)){
    break_Brick12.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick13)){
    break_Brick13.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick14)){
    break_Brick14.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick15)){
    break_Brick15.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick16)){
    break_Brick16.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick17)){
    break_Brick17.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick18)){
    break_Brick18.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick19)){
    break_Brick19.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick20)){
    break_Brick20.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick21)){
    break_Brick21.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick22)){
    break_Brick22.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick23)){
    break_Brick23.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick24)){
    break_Brick24.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick25)){
    break_Brick25.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick26)){
    break_Brick26.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick27)){
    break_Brick27.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick28)){
    break_Brick28.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick29)){
    break_Brick29.destroy();
    player2ShooterGroupUp.destroyEach();
  }

  if(player2ShooterGroupUp.isTouching(break_Brick30)){
    break_Brick30.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick31)){
    break_Brick31.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(shooterGroupUp.isTouching(break_Brick32)){
    break_Brick32.destroy();
    shooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick33)){
    break_Brick33.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick34)){
    break_Brick34.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick35)){
    break_Brick35.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick36)){
    break_Brick36.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick37)){
    break_Brick37.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick38)){
    break_Brick38.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick39)){
    break_Brick39.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick40)){
    break_Brick40.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick41)){
    break_Brick41.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick42)){
    break_Brick42.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick43)){
    break_Brick43.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick44)){
    break_Brick44.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick45)){
    break_Brick45.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick46)){
    break_Brick46.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick47)){
    break_Brick47.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick48)){
    break_Brick48.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick49)){
    break_Brick49.destroy();
    player2ShooterGroupUp.destroyEach();

  }

  if(player2ShooterGroupUp.isTouching(break_Brick50)){
    break_Brick50.destroy();
    player2ShooterGroupUp.destroyEach();
  }

  if(player2ShooterGroupUp.isTouching(break_Brick51)){
    break_Brick51.destroy();
    player2ShooterGroupUp.destroyEach();
  }

  if(player2ShooterGroupUp.isTouching(break_Brick52)){
    break_Brick52.destroy();
    player2ShooterGroupUp.destroyEach();
  }

  
  if(player2ShooterGroupUp.isTouching(break_Brick53)){
    break_Brick53.destroy();
    player2ShooterGroupUp.destroyEach();
  }


  if(player2ShooterGroupUp.isTouching(break_Brick54)){
    break_Brick54.destroy();
    player2ShooterGroupUp.destroyEach();
  }


  if(player2ShooterGroupUp.isTouching(break_Brick55)){
    break_Brick55.destroy();
    player2ShooterGroupUp.destroyEach();
  }


  if(player2ShooterGroupUp.isTouching(break_Brick56)){
    break_Brick56.destroy();
    player2ShooterGroupUp.destroyEach();
  }


  if(player2ShooterGroupUp.isTouching(break_Brick57)){
    break_Brick57.destroy();
    player2ShooterGroupUp.destroyEach();
  }


  if(player2ShooterGroupUp.isTouching(break_Brick58)){
    break_Brick58.destroy();
    player2ShooterGroupUp.destroyEach();
  }

  if(player2ShooterGroupUp.isTouching(break_Brick59)){
    break_Brick59.destroy();
    player2ShooterGroupUp.destroyEach();
  }

  if(player2ShooterGroupUp.isTouching(break_Brick60)){
    break_Brick60.destroy();
    player2ShooterGroupUp.destroyEach();
  }


  if(player2ShooterGroupUp.isTouching(break_Brick61)){
    break_Brick61.destroy();
    player2ShooterGroupUp.destroyEach();
  }

  if(player2ShooterGroupUp.isTouching(break_Brick62)){
    break_Brick62.destroy();
    player2ShooterGroupUp.destroyEach();
  }

  if(player2ShooterGroupUp.isTouching(break_Brick63)){
    break_Brick63.destroy();
    player2ShooterGroupUp.destroyEach();
  }

  if(player2ShooterGroupUp.isTouching(break_Brick64)){
    break_Brick64.destroy();
    player2ShooterGroupUp.destroyEach();
  }

  if(player2ShooterGroupUp.isTouching(break_Brick65)){
    break_Brick65.destroy();
    player2ShooterGroupUp.destroyEach();
  }

  if(player2ShooterGroupUp.isTouching(break_Brick66)){
    break_Brick66.destroy();
    player2ShooterGroupUp.destroyEach();
  }

  if(player2ShooterGroupUp.isTouching(break_Brick67)){
    break_Brick67.destroy();
    player2ShooterGroupUp.destroyEach();
  }

  if(player2ShooterGroupUp.isTouching(break_Brick68)){
    break_Brick68.destroy();
    player2ShooterGroupUp.destroyEach();
  }

  
  if(player2ShooterGroupLeft.isTouching(break_Brick1)){
    break_Brick1.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick2)){
    break_Brick2.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick3)){
    break_Brick3.destroy();
    player2ShooterGroupUp.destroyEach();
  }

  if(player2ShooterGroupLeft.isTouching(break_Brick4)){
    break_Brick4.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick5)){
    break_Brick5.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick6)){
    break_Brick6.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick7)){
    break_Brick7.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick8)){
    break_Brick8.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick9)){
    break_Brick9.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick10)){
    break_Brick10.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick11)){
    break_Brick11.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick12)){
    break_Brick12.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick13)){
    break_Brick13.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick14)){
    break_Brick14.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick15)){
    break_Brick15.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick16)){
    break_Brick16.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick17)){
    break_Brick17.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick18)){
    break_Brick18.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick19)){
    break_Brick19.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick20)){
    break_Brick20.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick21)){
    break_Brick21.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick22)){
    break_Brick22.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick23)){
    break_Brick23.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick24)){
    break_Brick24.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick25)){
    break_Brick25.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick26)){
    break_Brick26.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick27)){
    break_Brick27.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick28)){
    break_Brick28.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick29)){
    break_Brick29.destroy();
    player2ShooterGroupLeft.destroyEach();
  }

  if(player2ShooterGroupLeft.isTouching(break_Brick30)){
    break_Brick30.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick31)){
    break_Brick31.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick32)){
    break_Brick32.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick33)){
    break_Brick33.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick34)){
    break_Brick34.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick35)){
    break_Brick35.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick36)){
    break_Brick36.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick37)){
    break_Brick37.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick38)){
    break_Brick38.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick39)){
    break_Brick39.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick40)){
    break_Brick40.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick41)){
    break_Brick41.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick42)){
    break_Brick42.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick43)){
    break_Brick43.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick44)){
    break_Brick44.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick45)){
    break_Brick45.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick46)){
    break_Brick46.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick47)){
    break_Brick47.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick48)){
    break_Brick48.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick49)){
    break_Brick49.destroy();
    player2ShooterGroupLeft.destroyEach();

  }

  if(player2ShooterGroupLeft.isTouching(break_Brick50)){
    break_Brick50.destroy();
    player2ShooterGroupLeft.destroyEach();
  }

  
  if(player2ShooterGroupLeft.isTouching(break_Brick51)){
    break_Brick51.destroy();
    player2ShooterGroupLeft.destroyEach();
  }

  if(player2ShooterGroupLeft.isTouching(break_Brick52)){
    break_Brick52.destroy();
    player2ShooterGroupLeft.destroyEach();
  }

  
  if(player2ShooterGroupLeft.isTouching(break_Brick53)){
    break_Brick53.destroy();
    player2ShooterGroupLeft.destroyEach();
  }


  if(player2ShooterGroupLeft.isTouching(break_Brick54)){
    break_Brick54.destroy();
    player2ShooterGroupLeft.destroyEach();
  }


  if(player2ShooterGroupLeft.isTouching(break_Brick55)){
    break_Brick55.destroy();
    player2ShooterGroupLeft.destroyEach();
  }


  if(player2ShooterGroupLeft.isTouching(break_Brick56)){
    break_Brick56.destroy();
    player2ShooterGroupLeft.destroyEach();
  }


  if(player2ShooterGroupLeft.isTouching(break_Brick57)){
    break_Brick57.destroy();
    player2ShooterGroupLeft.destroyEach();
  }


  if(player2ShooterGroupLeft.isTouching(break_Brick58)){
    break_Brick58.destroy();
    player2ShooterGroupLeft.destroyEach();
  }

  if(player2ShooterGroupLeft.isTouching(break_Brick59)){
    break_Brick59.destroy();
    player2ShooterGroupLeft.destroyEach();
  }

  if(player2ShooterGroupLeft.isTouching(break_Brick60)){
    break_Brick60.destroy();
    player2ShooterGroupLeft.destroyEach();
  }


  if(player2ShooterGroupLeft.isTouching(break_Brick61)){
    break_Brick61.destroy();
    player2ShooterGroupLeft.destroyEach();
  }

  if(player2ShooterGroupLeft.isTouching(break_Brick62)){
    break_Brick62.destroy();
    player2ShooterGroupLeft.destroyEach();
  }

  if(player2ShooterGroupLeft.isTouching(break_Brick63)){
    break_Brick63.destroy();
    player2ShooterGroupLeft.destroyEach();
  }

  if(player2ShooterGroupLeft.isTouching(break_Brick64)){
    break_Brick64.destroy();
    player2ShooterGroupLeft.destroyEach();
  }

  if(player2ShooterGroupLeft.isTouching(break_Brick65)){
    break_Brick65.destroy();
    player2ShooterGroupLeft.destroyEach();
  }

  if(player2ShooterGroupLeft.isTouching(break_Brick66)){
    break_Brick66.destroy();
    player2ShooterGroupLeft.destroyEach();
  }

  if(player2ShooterGroupLeft.isTouching(break_Brick67)){
    break_Brick67.destroy();
    player2ShooterGroupLeft.destroyEach();
  }

  if(player2ShooterGroupLeft.isTouching(break_Brick68)){
    break_Brick68.destroy();
    player2ShooterGroupLeft.destroyEach();
  }

  if(player2ShooterGroupRight.isTouching(break_Brick1)){
    break_Brick1.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick2)){
    break_Brick2.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick3)){
    break_Brick3.destroy();
    player2ShooterGroupRight.destroyEach();
  }

  if(player2ShooterGroupRight.isTouching(break_Brick4)){
    break_Brick4.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick5)){
    break_Brick5.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick6)){
    break_Brick6.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick7)){
    break_Brick7.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick8)){
    break_Brick8.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick9)){
    break_Brick9.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick10)){
    break_Brick10.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick11)){
    break_Brick11.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick12)){
    break_Brick12.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick13)){
    break_Brick13.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick14)){
    break_Brick14.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick15)){
    break_Brick15.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick16)){
    break_Brick16.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick17)){
    break_Brick17.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick18)){
    break_Brick18.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick19)){
    break_Brick19.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick20)){
    break_Brick20.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick21)){
    break_Brick21.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick22)){
    break_Brick22.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick23)){
    break_Brick23.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick24)){
    break_Brick24.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick25)){
    break_Brick25.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick26)){
    break_Brick26.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick27)){
    break_Brick27.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick28)){
    break_Brick28.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick29)){
    break_Brick29.destroy();
    player2ShooterGroupRight.destroyEach();
  }

  if(player2ShooterGroupRight.isTouching(break_Brick30)){
    break_Brick30.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick31)){
    break_Brick31.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick32)){
    break_Brick32.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick33)){
    break_Brick33.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick34)){
    break_Brick34.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick35)){
    break_Brick35.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick36)){
    break_Brick36.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick37)){
    break_Brick37.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick38)){
    break_Brick38.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick39)){
    break_Brick39.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick40)){
    break_Brick40.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick41)){
    break_Brick41.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick42)){
    break_Brick42.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick43)){
    break_Brick43.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick44)){
    break_Brick44.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick45)){
    break_Brick45.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick46)){
    break_Brick46.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick47)){
    break_Brick47.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick48)){
    break_Brick48.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick49)){
    break_Brick49.destroy();
    player2ShooterGroupRight.destroyEach();

  }

  if(player2ShooterGroupRight.isTouching(break_Brick50)){
    break_Brick50.destroy();
    player2ShooterGroupRight.destroyEach();
  }


  if(player2ShooterGroupRight.isTouching(break_Brick50)){
    break_Brick50.destroy();
    player2ShooterGroupRight.destroyEach();
  }

  
  if(player2ShooterGroupRight.isTouching(break_Brick51)){
    break_Brick51.destroy();
    player2ShooterGroupRight.destroyEach();
  }

  if(player2ShooterGroupRight.isTouching(break_Brick52)){
    break_Brick52.destroy();
    player2ShooterGroupRight.destroyEach();
  }

  
  if(player2ShooterGroupRight.isTouching(break_Brick53)){
    break_Brick53.destroy();
    player2ShooterGroupRight.destroyEach();
  }


  if(player2ShooterGroupRight.isTouching(break_Brick54)){
    break_Brick54.destroy();
    player2ShooterGroupRight.destroyEach();
  }


  if(player2ShooterGroupRight.isTouching(break_Brick55)){
    break_Brick55.destroy();
    player2ShooterGroupRight.destroyEach();
  }


  if(player2ShooterGroupRight.isTouching(break_Brick56)){
    break_Brick56.destroy();
    player2ShooterGroupRight.destroyEach();
  }


  if(player2ShooterGroupRight.isTouching(break_Brick57)){
    break_Brick57.destroy();
    player2ShooterGroupRight.destroyEach();
  }


  if(player2ShooterGroupRight.isTouching(break_Brick58)){
    break_Brick58.destroy();
    player2ShooterGroupRight.destroyEach();
  }

  if(player2ShooterGroupRight.isTouching(break_Brick59)){
    break_Brick59.destroy();
    player2ShooterGroupRight.destroyEach();
  }

  if(player2ShooterGroupRight.isTouching(break_Brick60)){
    break_Brick60.destroy();
    player2ShooterGroupRight.destroyEach();
  }


  if(player2ShooterGroupRight.isTouching(break_Brick61)){
    break_Brick61.destroy();
    player2ShooterGroupRight.destroyEach();
  }

  if(player2ShooterGroupRight.isTouching(break_Brick62)){
    break_Brick62.destroy();
    player2ShooterGroupRight.destroyEach();
  }

  if(player2ShooterGroupRight.isTouching(break_Brick63)){
    break_Brick63.destroy();
    player2ShooterGroupRight.destroyEach();
  }

  if(player2ShooterGroupRight.isTouching(break_Brick64)){
    break_Brick64.destroy();
    player2ShooterGroupRight.destroyEach();
  }

  if(player2ShooterGroupRight.isTouching(break_Brick65)){
    break_Brick65.destroy();
    player2ShooterGroupRight.destroyEach();
  }

  if(player2ShooterGroupRight.isTouching(break_Brick66)){
    break_Brick66.destroy();
    player2ShooterGroupRight.destroyEach();
  }

  if(player2ShooterGroupRight.isTouching(break_Brick67)){
    break_Brick67.destroy();
    player2ShooterGroupRight.destroyEach();
  }

  if(player2ShooterGroupRight.isTouching(break_Brick68)){
    break_Brick68.destroy();
    player2ShooterGroupRight.destroyEach();
  }

  if(player2ShooterGroupDown.isTouching(break_Brick1)){
    break_Brick1.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick2)){
    break_Brick2.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick3)){
    break_Brick3.destroy();
    player2ShooterGroupDown.destroyEach();
  }

  if(player2ShooterGroupDown.isTouching(break_Brick4)){
    break_Brick4.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick5)){
    break_Brick5.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick6)){
    break_Brick6.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick7)){
    break_Brick7.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick8)){
    break_Brick8.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick9)){
    break_Brick9.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick10)){
    break_Brick10.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick11)){
    break_Brick11.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick12)){
    break_Brick12.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick13)){
    break_Brick13.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick14)){
    break_Brick14.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick15)){
    break_Brick15.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick16)){
    break_Brick16.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick17)){
    break_Brick17.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick18)){
    break_Brick18.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick19)){
    break_Brick19.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick20)){
    break_Brick20.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick21)){
    break_Brick21.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick22)){
    break_Brick22.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick23)){
    break_Brick23.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick24)){
    break_Brick24.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick25)){
    break_Brick25.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick26)){
    break_Brick26.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick27)){
    break_Brick27.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick28)){
    break_Brick28.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick29)){
    break_Brick29.destroy();
    player2ShooterGroupDown.destroyEach();
  }

  if(player2ShooterGroupDown.isTouching(break_Brick30)){
    break_Brick30.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick31)){
    break_Brick31.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick32)){
    break_Brick32.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick33)){
    break_Brick33.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick34)){
    break_Brick34.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick35)){
    break_Brick35.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick36)){
    break_Brick36.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick37)){
    break_Brick37.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick38)){
    break_Brick38.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick39)){
    break_Brick39.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick40)){
    break_Brick40.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick41)){
    break_Brick41.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick42)){
    break_Brick42.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick43)){
    break_Brick43.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick44)){
    break_Brick44.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick45)){
    break_Brick45.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick46)){
    break_Brick46.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick47)){
    break_Brick47.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick48)){
    break_Brick48.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick49)){
    break_Brick49.destroy();
    player2ShooterGroupDown.destroyEach();

  }

  if(player2ShooterGroupDown.isTouching(break_Brick50)){
    break_Brick50.destroy();
    player2ShooterGroupDown.destroyEach();
  }

  
  if(player2ShooterGroupDown.isTouching(break_Brick51)){
    break_Brick51.destroy();
    player2ShooterGroupDown.destroyEach();
  }

  if(player2ShooterGroupDown.isTouching(break_Brick52)){
    break_Brick52.destroy();
    player2ShooterGroupDown.destroyEach();
  }

  
  if(player2ShooterGroupDown.isTouching(break_Brick53)){
    break_Brick53.destroy();
    player2ShooterGroupDown.destroyEach();
  }


  if(player2ShooterGroupDown.isTouching(break_Brick54)){
    break_Brick54.destroy();
    player2ShooterGroupDown.destroyEach();
  }


  if(player2ShooterGroupDown.isTouching(break_Brick55)){
    break_Brick55.destroy();
    player2ShooterGroupDown.destroyEach();
  }


  if(player2ShooterGroupDown.isTouching(break_Brick56)){
    break_Brick56.destroy();
    player2ShooterGroupDown.destroyEach();
  }


  if(player2ShooterGroupDown.isTouching(break_Brick57)){
    break_Brick57.destroy();
    player2ShooterGroupDown.destroyEach();
  }


  if(player2ShooterGroupDown.isTouching(break_Brick58)){
    break_Brick58.destroy();
    player2ShooterGroupDown.destroyEach();
  }

  if(player2ShooterGroupDown.isTouching(break_Brick59)){
    break_Brick59.destroy();
    player2ShooterGroupDown.destroyEach();
  }

  if(player2ShooterGroupDown.isTouching(break_Brick60)){
    break_Brick60.destroy();
    player2ShooterGroupDown.destroyEach();
  }


  if(player2ShooterGroupDown.isTouching(break_Brick61)){
    break_Brick61.destroy();
    player2ShooterGroupDown.destroyEach();
  }

  if(player2ShooterGroupDown.isTouching(break_Brick62)){
    break_Brick62.destroy();
    player2ShooterGroupDown.destroyEach();
  }

  if(player2ShooterGroupDown.isTouching(break_Brick63)){
    break_Brick63.destroy();
    player2ShooterGroupDown.destroyEach();
  }

  if(player2ShooterGroupDown.isTouching(break_Brick64)){
    break_Brick64.destroy();
    player2ShooterGroupDown.destroyEach();
  }

  if(player2ShooterGroupDown.isTouching(break_Brick65)){
    break_Brick65.destroy();
    player2ShooterGroupDown.destroyEach();
  }

  if(player2ShooterGroupDown.isTouching(break_Brick66)){
    break_Brick66.destroy();
    player2ShooterGroupDown.destroyEach();
  }

  if(player2ShooterGroupDown.isTouching(break_Brick67)){
    break_Brick67.destroy();
    player2ShooterGroupDown.destroyEach();
  }

  if(player2ShooterGroupDown.isTouching(break_Brick68)){
    break_Brick68.destroy();
    player2ShooterGroupDown.destroyEach();
  }


  

  

  if(shooterGroupUp.isTouching(solid_Brick1)){
    shooterGroupUp.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupUp.isTouching(solid_Brick2)){
    shooterGroupUp.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupUp.isTouching(solid_Brick3)){
    shooterGroupUp.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupUp.isTouching(solid_Brick4)){
    shooterGroupUp.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupUp.isTouching(solid_Brick5)){
    shooterGroupUp.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupUp.isTouching(solid_Brick6)){
    shooterGroupUp.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupUp.isTouching(solid_Brick7)){
    shooterGroupUp.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupUp.isTouching(solid_Brick8)){
    shooterGroupUp.destroyEach();
    hit_Sound.play();

  }

  if(shooterGroupLeft.isTouching(solid_Brick1)){
    shooterGroupLeft.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupLeft.isTouching(solid_Brick2)){
    shooterGroupLeft.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupLeft.isTouching(solid_Brick3)){
    shooterGroupLeft.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupLeft.isTouching(solid_Brick4)){
    shooterGroupLeft.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupLeft.isTouching(solid_Brick5)){
    shooterGroupLeft.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupLeft.isTouching(solid_Brick6)){
    shooterGroupLeft.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupLeft.isTouching(solid_Brick7)){
    hit_Sound.play();

    shooterGroupLeft.destroyEach();
  }

  
  if(shooterGroupLeft.isTouching(solid_Brick8)){
    shooterGroupLeft.destroyEach();
    hit_Sound.play();

  }


  if(shooterGroupRight.isTouching(solid_Brick1)){
    shooterGroupRight.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupRight.isTouching(solid_Brick2)){
    shooterGroupRight.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupRight.isTouching(solid_Brick3)){
    shooterGroupRight.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupRight.isTouching(solid_Brick4)){
    shooterGroupRight.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupRight.isTouching(solid_Brick5)){
    shooterGroupRight.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupRight.isTouching(solid_Brick6)){
    shooterGroupRight.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupRight.isTouching(solid_Brick7)){
    shooterGroupRight.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupRight.isTouching(solid_Brick8)){
    shooterGroupRight.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupDown.isTouching(solid_Brick1)){
    shooterGroupDown.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupDown.isTouching(solid_Brick2)){
    shooterGroupDown.destroyEach();
    hit_Sound.play();

  }


  
  if(shooterGroupDown.isTouching(solid_Brick3)){
    shooterGroupDown.destroyEach();
    hit_Sound.play();
  }

  
  if(shooterGroupDown.isTouching(solid_Brick4)){
    shooterGroupDown.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupDown.isTouching(solid_Brick5)){
    shooterGroupDown.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupDown.isTouching(solid_Brick6)){
    shooterGroupDown.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupDown.isTouching(solid_Brick7)){
    shooterGroupDown.destroyEach();
    hit_Sound.play();

  }

  
  if(shooterGroupDown.isTouching(solid_Brick8)){
    shooterGroupDown.destroyEach();
    hit_Sound.play();

  }

  // player2

  if(player2ShooterGroupUp.isTouching(solid_Brick1)){
    player2ShooterGroupUp.destroyEach();
    hit_Sound.play();

  }

  
  if(player2ShooterGroupUp.isTouching(solid_Brick2)){
    player2ShooterGroupUp.destroyEach();
    hit_Sound.play();

  }

  
  if(player2ShooterGroupUp.isTouching(solid_Brick3)){
    player2ShooterGroupUp.destroyEach();
    hit_Sound.play();

  }

  
  if(player2ShooterGroupUp.isTouching(solid_Brick4)){
    player2ShooterGroupUp.destroyEach();
    hit_Sound.play();

  }

  
  if(player2ShooterGroupUp.isTouching(solid_Brick5)){
    hit_Sound.play();

    player2ShooterGroupUp.destroyEach();
  }


  
  if(player2ShooterGroupUp.isTouching(solid_Brick6)){
    player2ShooterGroupUp.destroyEach();
    hit_Sound.play();

  }

  
  if(player2ShooterGroupUp.isTouching(solid_Brick7)){
    player2ShooterGroupUp.destroyEach();
    hit_Sound.play();

  }

  
  if(player2ShooterGroupUp.isTouching(solid_Brick8)){
    player2ShooterGroupUp.destroyEach();
    hit_Sound.play();

  }

  if(player2ShooterGroupLeft.isTouching(solid_Brick1)){
    player2ShooterGroupLeft.destroyEach();
    hit_Sound.play();

  }

  
  if(player2ShooterGroupLeft.isTouching(solid_Brick2)){
    player2ShooterGroupLeft.destroyEach();
    hit_Sound.play();

  }

  
  if(player2ShooterGroupLeft.isTouching(solid_Brick3)){
    player2ShooterGroupLeft.destroyEach();
    hit_Sound.play();

  }

  
  if(player2ShooterGroupLeft.isTouching(solid_Brick4)){
    player2ShooterGroupLeft.destroyEach();
    hit_Sound.play();

  }

  
  if(player2ShooterGroupLeft.isTouching(solid_Brick5)){
    player2ShooterGroupLeft.destroyEach();
    hit_Sound.play();

  }

  
  if(player2ShooterGroupLeft.isTouching(solid_Brick6)){
    player2ShooterGroupLeft.destroyEach();
    hit_Sound.play();

  }

  
  if(player2ShooterGroupLeft.isTouching(solid_Brick7)){
    player2ShooterGroupLeft.destroyEach();
    hit_Sound.play();

  }

  
  if(player2ShooterGroupLeft.isTouching(solid_Brick8)){
    player2ShooterGroupLeft.destroyEach();
    hit_Sound.play();

  }

  if(player2ShooterGroupRight.isTouching(solid_Brick1)){
    player2ShooterGroupRight.destroyEach();
    hit_Sound.play();

  }

  
  if(player2ShooterGroupRight.isTouching(solid_Brick2)){
    player2ShooterGroupRight.destroyEach();
    hit_Sound.play();

  }

  
  if(player2ShooterGroupRight.isTouching(solid_Brick3)){
    player2ShooterGroupRight.destroyEach();
    hit_Sound.play();

  }

  
  if(player2ShooterGroupRight.isTouching(solid_Brick4)){
    player2ShooterGroupRight.destroyEach();
    hit_Sound.play();

  }

  
  if(player2ShooterGroupRight.isTouching(solid_Brick5)){
    player2ShooterGroupRight.destroyEach();
    hit_Sound.play();

  }

  
  if(player2ShooterGroupRight.isTouching(solid_Brick6)){
    player2ShooterGroupRight.destroyEach();
    hit_Sound.play();

  }

  
  if(player2ShooterGroupRight.isTouching(solid_Brick7)){
    player2ShooterGroupRight.destroyEach();
    hit_Sound.play();

  }

  
  if(player2ShooterGroupRight.isTouching(solid_Brick8)){
    player2ShooterGroupRight.destroyEach();
    hit_Sound.play();

  }

  if(player2ShooterGroupDown.isTouching(solid_Brick1)){
    player2ShooterGroupDown.destroyEach();
    hit_Sound.play();

  }

  
  if(player2ShooterGroupDown.isTouching(solid_Brick2)){
    player2ShooterGroupDown.destroyEach();
    hit_Sound.play();

  }

  
  if(player2ShooterGroupDown.isTouching(solid_Brick3)){
    player2ShooterGroupDown.destroyEach();
    hit_Sound.play();

  }

  
  if(player2ShooterGroupDown.isTouching(solid_Brick4)){
    player2ShooterGroupDown.destroyEach();
    hit_Sound.play();

  }

  
  if(player2ShooterGroupDown.isTouching(solid_Brick5)){
    player2ShooterGroupDown.destroyEach();
  }

  
  if(player2ShooterGroupDown.isTouching(solid_Brick6)){
    player2ShooterGroupDown.destroyEach();
    hit_Sound.play();

  }

  
  if(player2ShooterGroupDown.isTouching(solid_Brick7)){
    player2ShooterGroupDown.destroyEach();
    hit_Sound.play();

  }

  
  if(player2ShooterGroupDown.isTouching(solid_Brick8)){
    player2ShooterGroupDown.destroyEach();
    hit_Sound.play();

  }


  if(shooterGroupUp.isTouching(player2Tank)){
    player2Tank.destroy();
    shooterGroupUp.destroyEach();
    hit_Sound.play();


  }

  if(shooterGroupRight.isTouching(player2Tank)){
    player2Tank.destroy();
    shooterGroupRight.destroyEach();
    hit_Sound.play();

  }

  if(shooterGroupLeft.isTouching(player2Tank)){
    player2Tank.destroy();
    shooterGroupLeft.destroyEach();
    hit_Sound.play();


  }

  if(shooterGroupDown.isTouching(player2Tank)){
    player2Tank.destroy();
    shooterGroupDown.destroyEach();
    hit_Sound.play();


  }


  // player2

  if(player2ShooterGroupUp.isTouching(playerTank)){
    playerTank.destroy();
    player2ShooterGroupUp.destroyEach();
    die_Sound.play();


  }

  if(player2ShooterGroupLeft.isTouching(playerTank)){
    playerTank.destroy();
    player2ShooterGroupLeft.destroyEach();
    die_Sound.play();


  }

  if(player2ShooterGroupRight.isTouching(playerTank)){
    playerTank.destroy();
    player2ShooterGroupRight.destroyEach();
    die_Sound.play();


  }

  if(player2ShooterGroupDown.isTouching(playerTank)){
    playerTank.destroy();
    player2ShooterGroupDown.destroyEach();
    die_Sound.play();

  }



  if(shooterGroupUp.isTouching(enemyTankRightLeft1)){
    enemyTankRightLeft1.destroy();
    shooterGroupUp.destroyEach();
    hit_Sound.play();


  }

  if(shooterGroupRight.isTouching(enemyTankRightLeft1)){
    enemyTankRightLeft1.destroy();
    shooterGroupRight.destroyEach();
    hit_Sound.play();


  }
 if(shooterGroupLeft.isTouching(enemyTankRightLeft1)){
    enemyTankRightLeft1.destroy();
    shooterGroupLeft.destroyEach();
    hit_Sound.play();


  }
  if(shooterGroupDown.isTouching(enemyTankRightLeft1)){
    enemyTankRightLeft1.destroy();
    shooterGroupDown.destroyEach();
    hit_Sound.play();

  }

  if(shooterGroupUp.isTouching(enemyTankRightLeft2)){
    enemyTankRightLeft2.destroy();
    shooterGroupUp.destroyEach();
    hit_Sound.play();
  }

  if(shooterGroupRight.isTouching(enemyTankRightLeft2)){
    enemyTankRightLeft2.destroy();
    shooterGroupRight.destroyEach();
    hit_Sound.play();
  }

  if(shooterGroupLeft.isTouching(enemyTankRightLeft2)){
    enemyTankRightLeft2.destroy();
    shooterGroupLeft.destroyEach();
    hit_Sound.play();

  }

  if(shooterGroupDown.isTouching(enemyTankRightLeft2)){
    enemyTankRightLeft2.destroy();
    shooterGroupDown.destroyEach();
    hit_Sound.play();
  }


  if(shooterGroupUp.isTouching(enemyTankLeftRight1)){
    enemyTankLeftRight1.destroy();
    shooterGroupUp.destroyEach();
    hit_Sound.play();
  }

  
  if(shooterGroupRight.isTouching(enemyTankLeftRight1)){
    enemyTankLeftRight1.destroy();
    shooterGroupUp.destroyEach();
    hit_Sound.play();
  }

 
  if(shooterGroupLeft.isTouching(enemyTankLeftRight1)){
    enemyTankLeftRight1.destroy();
    shooterGroupLeft.destroyEach();
    hit_Sound.play();
  }

  
  if(shooterGroupDown.isTouching(enemyTankLeftRight1)){
    enemyTankLeftRight1.destroy();
    shooterGroupDown.destroyEach();
    hit_Sound.play();
  }

  //player2


  if(player2ShooterGroupUp.isTouching(enemyTankRightLeft1)){
    enemyTankRightLeft1.destroy();
    player2ShooterGroupUp.destroyEach();
    hit_Sound.play();


  }

  if(player2ShooterGroupRight.isTouching(enemyTankRightLeft1)){
    enemyTankRightLeft1.destroy();
    player2ShooterGroupRight.destroyEach();
    hit_Sound.play();


  }
 if(player2ShooterGroupLeft.isTouching(enemyTankRightLeft1)){
    enemyTankRightLeft1.destroy();
    player2ShooterGroupLeft.destroyEach();
    hit_Sound.play();


  }
  if(player2ShooterGroupDown.isTouching(enemyTankRightLeft1)){
    enemyTankRightLeft1.destroy();
    player2ShooterGroupDown.destroyEach();
    hit_Sound.play();

  }

  if(player2ShooterGroupUp.isTouching(enemyTankRightLeft2)){
    enemyTankRightLeft2.destroy();
    player2ShooterGroupUp.destroyEach();
    hit_Sound.play();
  }

  if(player2ShooterGroupRight.isTouching(enemyTankRightLeft2)){
    enemyTankRightLeft2.destroy();
    player2ShooterGroupRight.destroyEach();
    hit_Sound.play();
  }

  if(player2ShooterGroupLeft.isTouching(enemyTankRightLeft2)){
    enemyTankRightLeft2.destroy();
    player2ShooterGroupLeft.destroyEach();
    hit_Sound.play();
  }

  if(player2ShooterGroupDown.isTouching(enemyTankRightLeft2)){
    enemyTankRightLeft2.destroy();
    player2ShooterGroupDown.destroyEach();
    hit_Sound.play();

  }


  if(player2ShooterGroupUp.isTouching(enemyTankLeftRight1)){
    enemyTankLeftRight1.destroy();
    player2ShooterGroupUp.destroyEach();
    hit_Sound.play();
  }

  
  if(player2ShooterGroupRight.isTouching(enemyTankLeftRight1)){
    enemyTankLeftRight1.destroy();
    player2ShooterGroupRight.destroyEach();
    hit_Sound.play();
  }

 
  if(player2ShooterGroupLeft.isTouching(enemyTankLeftRight1)){
    enemyTankLeftRight1.destroy();
    player2ShooterGroupLeft.destroyEach();
    hit_Sound.play();
  }

  
  if(player2ShooterGroupDown.isTouching(enemyTankLeftRight1)){
    enemyTankLeftRight1.destroy();
    player2ShooterGroupDown.destroyEach();
    hit_Sound.play();
  }
  
  if(playerTank.isTouching(diamond)){
    fill("orange");
    stroke("white");
    strokeWeight(5);
    textSize(50);
    text("player1 win",225,300);
  
    fill("orange");
    stroke("white");
    strokeWeight(5);
    textSize(50);
    text("press f5 to play again",150,465);

    enemyTankRightLeft1.destroy();
    enemyTankRightLeft2.destroy();

    enemyTankLeftRight1.destroy();

    player2Tank.destroy();
    
    playerTank.visible = false;

    diamond.visible = false;

  

    shooterGroupUp.destroyEach();
    shooterGroupLeft.destroyEach();
    shooterGroupRight.destroyEach();
    shooterGroupDown.destroyEach();

    player2ShooterGroupUp.destroyEach();
    player2ShooterGroupLeft.destroyEach();
    player2ShooterGroupRight.destroyEach();
    player2ShooterGroupDown.destroyEach();

     break_Brick1.destroy();
     break_Brick2.destroy();
     break_Brick3.destroy();
     break_Brick4.destroy();
     break_Brick5.destroy();
     break_Brick6.destroy();
     break_Brick7.destroy();
     break_Brick8.destroy();
     break_Brick9.destroy();
     break_Brick10.destroy();
     break_Brick11.destroy();
     break_Brick12.destroy();
     break_Brick13.destroy();
     break_Brick14.destroy();
     break_Brick15.destroy();
     break_Brick16.destroy();
     break_Brick17.destroy();
     break_Brick18.destroy();
     break_Brick19.destroy();
     break_Brick20.destroy();
     break_Brick21.destroy();
     break_Brick22.destroy();
     break_Brick23.destroy();
     break_Brick24.destroy();
     break_Brick25.destroy();
     break_Brick26.destroy();
     break_Brick27.destroy();
     break_Brick28.destroy();
     break_Brick29.destroy();
     break_Brick30.destroy();
     break_Brick31.destroy();
     break_Brick32.destroy();
     break_Brick33.destroy();
     break_Brick34.destroy();
     break_Brick35.destroy();
     break_Brick36.destroy();
     break_Brick37.destroy();
     break_Brick38.destroy();
     break_Brick39.destroy();
     break_Brick40.destroy();
     break_Brick41.destroy();
     break_Brick42.destroy();
     break_Brick43.destroy();
     break_Brick44.destroy();
     break_Brick45.destroy();
     break_Brick46.destroy();
     break_Brick47.destroy();
     break_Brick48.destroy();
     break_Brick49.destroy();
     break_Brick50.destroy();
     break_Brick51.destroy();
     break_Brick52.destroy();
     break_Brick53.destroy();
     break_Brick54.destroy();
     break_Brick55.destroy();
     break_Brick56.destroy();
     break_Brick57.destroy();
     break_Brick58.destroy();
     break_Brick59.destroy();
     break_Brick60.destroy();
     break_Brick61.destroy();
     break_Brick62.destroy();
     break_Brick63.destroy();
     break_Brick64.destroy();
     break_Brick65.destroy();
     break_Brick66.destroy();
     break_Brick67.destroy();
     break_Brick68.destroy();

     solid_Brick1.destroy();
     solid_Brick2.destroy();
     solid_Brick3.destroy();
     solid_Brick4.destroy();
     solid_Brick5.destroy();
     solid_Brick6.destroy();
     solid_Brick7.destroy();
     solid_Brick8.destroy();


    

  
  }

  
  if(player2Tank.isTouching(diamond)){

    fill("orange");
    stroke("white");
    strokeWeight(5);
    textSize(50);
    text("player2 win",225,300);
  
    fill("orange");
    stroke("white");
    strokeWeight(5);
    textSize(50);
    text("press f5 to play again",150,465);

    enemyTankRightLeft1.destroy();
    enemyTankRightLeft2.destroy();

    enemyTankLeftRight1.destroy();



    playerTank.destroy();


    player2Tank.visible = false;
    diamond.visible = false;


      shooterGroupUp.destroyEach();
    shooterGroupLeft.destroyEach();
    shooterGroupRight.destroyEach();
    shooterGroupDown.destroyEach();

    player2ShooterGroupUp.destroyEach();
    player2ShooterGroupLeft.destroyEach();
    player2ShooterGroupRight.destroyEach();
    player2ShooterGroupDown.destroyEach();

    break_Brick1.destroy();
    break_Brick2.destroy();
    break_Brick3.destroy();
    break_Brick4.destroy();
    break_Brick5.destroy();
    break_Brick6.destroy();
    break_Brick7.destroy();
    break_Brick8.destroy();
    break_Brick9.destroy();
    break_Brick10.destroy();
    break_Brick11.destroy();
    break_Brick12.destroy();
    break_Brick13.destroy();
    break_Brick14.destroy();
    break_Brick15.destroy();
    break_Brick16.destroy();
    break_Brick17.destroy();
    break_Brick18.destroy();
    break_Brick19.destroy();
    break_Brick20.destroy();
    break_Brick21.destroy();
    break_Brick22.destroy();
    break_Brick23.destroy();
    break_Brick24.destroy();
    break_Brick25.destroy();
    break_Brick26.destroy();
    break_Brick27.destroy();
    break_Brick28.destroy();
    break_Brick29.destroy();
    break_Brick30.destroy();
    break_Brick31.destroy();
    break_Brick32.destroy();
    break_Brick33.destroy();
    break_Brick34.destroy();
    break_Brick35.destroy();
    break_Brick36.destroy();
    break_Brick37.destroy();
    break_Brick38.destroy();
    break_Brick39.destroy();
    break_Brick40.destroy();
    break_Brick41.destroy();
    break_Brick42.destroy();
    break_Brick43.destroy();
    break_Brick44.destroy();
    break_Brick45.destroy();
    break_Brick46.destroy();
    break_Brick47.destroy();
    break_Brick48.destroy();
    break_Brick49.destroy();
    break_Brick50.destroy();
    break_Brick51.destroy();
    break_Brick52.destroy();
    break_Brick53.destroy();
    break_Brick54.destroy();
    break_Brick55.destroy();
    break_Brick56.destroy();
    break_Brick57.destroy();
    break_Brick58.destroy();
    break_Brick59.destroy();
    break_Brick60.destroy();
    break_Brick61.destroy();
    break_Brick62.destroy();
    break_Brick63.destroy();
    break_Brick64.destroy();
    break_Brick65.destroy();
    break_Brick66.destroy();
    break_Brick67.destroy();
    break_Brick68.destroy();

    solid_Brick1.destroy();
    solid_Brick2.destroy();
    solid_Brick3.destroy();
    solid_Brick4.destroy();
    solid_Brick5.destroy();
    solid_Brick6.destroy();
    solid_Brick7.destroy();
    solid_Brick8.destroy();


  }

   
  if(keyDown("up_arrow")){
    playerTank.changeImage("playerup",playerTankUp_Image);
    playerTank.y = playerTank.y-4;
    
    if(keyDown("space")){
      shoot_Sound.play();

      createShooterUp();
    }

}

  if(keyDown("down_arrow")){
    playerTank.changeImage("playerdown",playerTankDown_Image);
    playerTank.y = playerTank.y+4;

    if(keyDown("space")){
      shoot_Sound.play();

      createShooterDown();
    }

  }

  if(keyDown("left_arrow")){
    playerTank.changeImage("playerleft",playerTankLeft_Image);
    playerTank.x = playerTank.x-4;

    if(keyDown("space")){
      shoot_Sound.play();

      createShooterLeft();
    }
   
    
  }

  if(keyDown("right_arrow")){
    playerTank.changeImage("playerright",playerTankRight_Image);
    playerTank.x = playerTank.x+4;

    if(keyDown("space")){
      shoot_Sound.play();

      createShooterRight();
    }
  
  }

  //player2

  if(keyDown("w")){
    player2Tank.changeImage("player2up",player2TankUp_Image);
    player2Tank.y = player2Tank.y-4;

    if(keyDown("i")){
      shoot_Sound.play();

      createPlayer2ShooterUp();
    }

}

  if(keyDown("s")){
    player2Tank.changeImage("player2down",player2TankDown_Image);
    player2Tank.y = player2Tank.y+4;

   if(keyDown("i")){
    shoot_Sound.play();

      createPlayer2ShooterDown();
    }

  }

  if(keyDown("a")){
    player2Tank.changeImage("player2left",player2TankLeft_Image);
    player2Tank.x = player2Tank.x-4;
    if(keyDown("i")){
      shoot_Sound.play();

      createPlayer2ShooterLeft();
    }
    
   
    
  }

  if(keyDown("d")){
    player2Tank.changeImage("player2right",player2TankRight_Image);
    player2Tank.x = player2Tank.x+4;
    if(keyDown("i")){
      shoot_Sound.play();
      createPlayer2ShooterRight();
    }
  }

  drawSprites();
}


function createShooterUp(){
  shooter = createSprite(playerTank.x,playerTank.y);
  shooter.addImage("fireup",shooter_ImageUp);
  playerTank.changeImage("playerup",playerTankUp_Image);

  shooterGroupUp.add(shooter);
  shooter.velocityY=-18;
  shooter.scale =  3.5;
  }

function createShooterLeft(){
  shooter = createSprite(playerTank.x,playerTank.y);
  shooter.addImage("fireleft",shooter_ImageLeft);
  playerTank.changeImage("playerleft",playerTankLeft_Image);

  shooterGroupLeft.add(shooter);
  shooter.velocityX=-18;
  shooter.scale =  3.5;
}

function createShooterRight(){
  shooter = createSprite(playerTank.x,playerTank.y);
  shooter.addImage("fireright",shooter_ImageRight);
  playerTank.changeImage("playerright",playerTankRight_Image);

  shooterGroupRight.add(shooter);
  shooter.velocityX=+18;
  shooter.scale = 3.5;
}

function createShooterDown(){
  shooter = createSprite(playerTank.x,playerTank.y);
  shooter.addImage("firedown",shooter_ImageDown);
  playerTank.changeImage("playerdown",playerTankDown_Image);

  shooterGroupDown.add(shooter);
  shooter.velocityY=+18;
  shooter.scale = 3.5;
}

//player2

function createPlayer2ShooterUp(){
  player2Shooter = createSprite(player2Tank.x,player2Tank.y);
  player2Shooter.addImage("up",player2Shooter_ImageUp);
  playerTank.changeImage("player2up",player2TankUp_Image);

  player2ShooterGroupUp.add(player2Shooter);
  player2Shooter.velocityY=-18;
  player2Shooter.scale =  3.5;
  }

function createPlayer2ShooterLeft(){
  player2Shooter = createSprite(player2Tank.x,player2Tank.y);
  player2Shooter.addImage("left",player2Shooter_ImageLeft);
  playerTank.changeImage("player2left",player2TankLeft_Image);

  player2ShooterGroupLeft.add(player2Shooter);
  player2Shooter.velocityX=-18;
  player2Shooter.scale = 3.5;
}

function createPlayer2ShooterRight(){
  player2Shooter = createSprite(player2Tank.x,player2Tank.y);
  player2Shooter.addImage("right",player2Shooter_ImageRight);
  playerTank.changeImage("player2right",player2TankRight_Image);

  player2ShooterGroupRight.add(player2Shooter);
  player2Shooter.velocityX=+18;
  player2Shooter.scale = 3.5;
}

function createPlayer2ShooterDown(){
  player2Shooter = createSprite(player2Tank.x,player2Tank.y);
  player2Shooter.addImage("down",player2Shooter_ImageDown);
  playerTank.changeImage("player2down",player2TankDown_Image);

  player2ShooterGroupDown.add(player2Shooter);
  player2Shooter.velocityY=+18;
  player2Shooter.scale = 3.5;
}
