const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var b1,b2,b3,b4,b5

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
    b1=new BoxClass (900,380,70,70);
    b2=new BoxClass (900,310,70,70);
    b3=new BoxClass (900,260,70,70);
    b4=new BoxClass (900,190,70,70);
    b5=new BoxClass (900,120,70,70);
    ball=new Ball(200,200,80,80)
    rope=new Slingshot(ball.body,{x:700,y:50})

}
function draw(){
    background("skyblue")
    Engine.update(engine)
    ground.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    ball.display();
    rope.display();
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
    