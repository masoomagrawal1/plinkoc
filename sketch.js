const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var gr;
var d=[],pl=[],pa=[];
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

   gr=new Ground(240,780,480,20);
   //d1=new Division(400,750,10,300);
  // d2=new Division(100,780,10,300);
   for(var i=0;i<=width;i=i+80){
     d.push(new Division(i,750,10,300));

   }
   for(var i=0;i<=width;i=i+40){
     pl.push(new Plinko(i,50));
   }
   for(var i=0;i<=width;i=i+40){
    pl.push(new Plinko(i,150));
  }
  for(var i=0;i<=width;i=i+40){
    pl.push(new Plinko(i,250));
  }
  for(var i=0;i<=width;i=i+40){
    pl.push(new Plinko(i,350));
  }
   
    
   
  
 
   

}

function draw() {
  background(0); 
  Engine.update(engine);
  gr.display(); 
  for(var i=0;i<d.length;i++){
    d[i].display();
  }
  for(var i=0;i<pl.length;i++){
    pl[i].display();
  }
  for(var i=0;i<pl.length;i++){
    pl[i].display();
  }
  for(var i=0;i<pl.length;i++){
    pl[i].display();
  }

  for(var i=0;i<pl.length;i++){
    pl[i].display();
  }
 
  
  if(frameCount%90===0){
    pa.push(new Particle(random(200,300), 10,10));
    
  }

 for (var j = 0; j < pa.length; j++) {
  
    pa[j].display();
  }
  drawSprites();
}