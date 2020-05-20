var rain=[];
function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
 for (let index = 0; index < 300; index++) {
  rain[index]=new Drops();
   
 }
}

function draw() {
  background(255,255,255);  
  for (let index = 0; index < 300; index++) {
    rain[index].fall();
     rain[index].display();
   }
  }
