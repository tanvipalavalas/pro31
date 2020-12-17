var division, ground, plinko, particle


function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
}

var particles = []
var plinkos = []
var divisions = []
var divisionHeight = 300;

function draw() {
  background(255,255,255);  
  drawSprites();

  for(var k = 0; k<innerWidth; k = k+80){
    divisions.push(newDivisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 40; j<=Width; j=j+50)
  {
    plinkos.push(new plinko(j,75));
  }
  for(var j = 15; j<=width-10; j=j+50)
  {
    plinkos.push(new plinko(j,175));
  }
  for(var j = 30; j<=width; j=j+50)
  {
    plinkos.push(new plinko(j,100))
  }
  for(var j = 50; j<=width; j=j+50)
  {
    plinkos.push(new plinko(j,120))
  }
  for(var j = 35; j<=width; j=j+50)
  {
    plinkos.push(new plinko(j,130))
  }
  for(var j = 20; j<=width; j=j+50)
  {
    plinkos.push(new plinko(j,90))
  }
  for(var j = 45; j<=width; j=j+50)
  {
    plinkos.push(new plinko(j,110))
  }
  for(var j = 50; j<=width; j=j+50)
  {
    plinkos.push(new plinko(j,150))
  }
if(frameCount%60===0){
  particles.push(new Particle (random(width/2-10, width/2+10),10,10))
}


for (var j = 0; j < particles.length; j++){
  particles[j].display()
}

for (var k = 0; k < particles.length; k++){
  particles[k].display()
}
}

