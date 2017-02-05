
var max_distance = 160; 

function setup(){
  createCanvas(600, 600);
}

function draw() {
  background(20,40,50);
  smooth();

  for (var gridY=0; gridY<height; gridY+=50) { 
  for (var gridX=0; gridX<width; gridX+=150) {
 
  textSize(100);
  noFill(0, 100, 200);
  stroke(255, 0, 85);     
  strokeWeight(1);
  textFont("helvetica");
  frameRate(20)
      var diameter = text(mouseX, mouseY, gridX, gridY);
      diameter = diameter/max_distance * 300;    
      push();
      translate(gridX, gridY, diameter*1);
      text(20, 50, diameter, diameter);  
      pop(); 
      
  textSize(20);
  fill(247,170,164);
  noStroke(255,0,164);
  strokeWeight(1);
  textFont("helvetica");
  frameRate(20)
  text("blast off", mouseY, mouseX);
  
   fill(255, 0, 85);
   ellipse(150,400,150,150);
   ellipse(400,400,300,300);
   ellipse(150,150,250,250);
    }
  }
}

