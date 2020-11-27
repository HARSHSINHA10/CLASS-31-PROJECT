function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
  var particles = [];
  var plinkos = [];
  var divisions = [];
  
  var divisionHeight = 300;
   for(var k=0; k <=width ;k=k+80) {
 divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
for( var j=40;j<=width;j=j+50){

  plinkos.push(new Plinko(j,75))
}
for( var j=15;j<=width-10;j=j+50){

  plinkos.push(new Plinko(j,175))
}
for( var j=0;j<particles.length;j++){

  particles[j].display();
}
for( var k=0;k<particles.length;k++){

  divisions[k].display();
}
   }
  drawSprites();
}