function setup() {
  
  createCanvas(600,600)
  rectMode(CENTER);
  ellipseMode(CENTER);
  
}

function draw() {
  
  background(255,97,156);
 
   fill(255,255,20);
   noStroke();
  ellipse(300, 300, 150, 150);
  ellipse(400, 400, 250, 250);
  ellipse(150, 150, 250, 250);
    fill(255,155,20);
 triangle(300, 125, 508, 200, 300, 200);
 
 translate(150, 150);
 rotate(radians(frameCount));
 rect(100, 20, 25, 90, 90);
 
 fill(25,15,20);
translate(200, 100);
 rotate(radians(frameCount));
 ellipse(200,100,200,200)
 
 
  fill(0,30,255);
translate(200, 100);
 rotate(radians(frameCount));
 ellipse(30,400,40,40)
 
 translate(200, 200); 
	rotate(radians(frameCount));
 rect(500,500,100,100);
 
}

