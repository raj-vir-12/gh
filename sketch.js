
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;
var roof
var top_wall;
var ball,ball2,ball3,ball4,ball5;

var con, con2,con3,con4,con5;

var btn1;
var btn2;
function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
  }
  var roof_options={
    isStatic:true
  }
   
  
  
  
  keyPressed
  



  ball = Bodies.circle(300,300,20,ball_options);
  World.add(world,ball);
  ball2 = Bodies.circle(385,600,20,ball_options);
  World.add(world,ball2);
  ball3 = Bodies.circle(420,600,20,ball_options);
  World.add(world,ball3);
  ball4 = Bodies.circle(440,600,20,ball_options);
  World.add(world,ball4);
  ball5 = Bodies.circle(460,600,20,ball_options);
  World.add(world,ball5);
  roof=Bodies.rectangle(450,400,230,20,roof_options);
  World.add(world,roof)

  con=Matter.Constraint.create({
    pointA : {x:350,y:400},
    bodyB : ball,
    pointB : {x:0,y:0},
    length : 300,
    stiffness : 0.1
  })
  World.add(world,con);
  con2=Matter.Constraint.create({
    pointA : {x:390,y:400},
    bodyB : ball2,
    pointB : {x:0,y:0},
    length : 300,
    stiffness : 0.1
  })
  World.add(world,con2)
  con3=Matter.Constraint.create({
    pointA : {x:430,y:400},
    bodyB : ball3,
    pointB : {x:0,y:0},
    length : 300,
    stiffness : 0.1
  })
  World.add(world,con3)
  con4=Matter.Constraint.create({
    pointA : {x:470,y:400},
    bodyB : ball4,
    pointB : {x:0,y:0},
    length : 300,
    stiffness : 0.1
  })
  World.add(world,con4)
  con5=Matter.Constraint.create({
    pointA : {x:510,y:400},
    bodyB : ball5,
    pointB : {x:0,y:0},
    length : 300,
    stiffness : 0.1
  })
  World.add(world,con5)

  
  
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  push()
  strokeWeight(2)
  stroke(250)
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y)
  line(con2.pointA.x,con2.pointA.y,ball2.position.x,ball2.position.y)
  line(con3.pointA.x,con3.pointA.y,ball3.position.x,ball3.position.y)
  line(con4.pointA.x,con4.pointA.y,ball4.position.x,ball4.position.y)
  line(con5.pointA.x,con5.pointA.y,ball5.position.x,ball5.position.y)
  pop()

  ellipse(ball.position.x,ball.position.y,20);
  
  rect(roof.position.x,roof.position.y,230,20)
  ellipse(ball2.position.x,ball2.position.y,20)
  ellipse(ball3.position.x,ball3.position.y,20)
  ellipse(ball4.position.x,ball4.position.y,20)
  ellipse(ball5.position.x,ball5.position.y,20)
  
  
  Engine.update(engine);
}


function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.01,y:-0.01});
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
//WRITE A CORRECT CODE TO APPLY A KEYPRESSED TO CHANGE THE POSITION OF BALL OBJECT TO THE LEFT WHEN UP ARROW KEY IS PRESSED
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.01,y:-0.01});
	}
}
  


