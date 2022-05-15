const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var stone;
var hierro;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber= new Rubber(400,10,50,50);
    stone= new Stone(200,10);
   hierro=new Hierro(100,10);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

       hierro.display();
    plane.display();
    hammer.display();
rubber.display();
    stone.display();
 
}