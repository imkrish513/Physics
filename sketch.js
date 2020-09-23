const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world, ground
var ball
function setup() {
  createCanvas(800,800);
engine = Engine.create()
world = engine.world
var ground_options = {
  isStatic:true
}
ground = Bodies.rectangle(400,800,900,25,ground_options)
World.add(world,ground)
var ball_options = {
  restitution: 1.5
}
ball  = Bodies.circle(400,600,100,ball_options)
World.add(world,ball)
}

function draw() {
  background(0);
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,900,20)  
  ellipseMode(RADIUS)
ellipse(ball.position.x, ball.position.y,50,50)

}