var tileCount = 20;
var moduleAlpha = 180;
var actRandomSeed = 0;
var max_distance = 500; 

function setup(){
  createCanvas(780, 780);
}

function draw() {
  background(255,208,0);
  smooth();
  fill(255,0,164);

  randomSeed(actRandomSeed);
  var moduleColor = color(0);
  stroke(255,255,255);
  strokeWeight(10);

  for (var gridY=0; gridY<height; gridY+=100) {
    for (var gridX=0; gridX<width; gridX+=100) {

      var diameter = dist(mouseX, mouseY, gridX, gridY);
      diameter = diameter/max_distance * 500;   
      push();
      translate(gridX, gridY, diameter*1);
      ellipse(20, 50, diameter, diameter);  
      pop(); 
    }
  }
}

function mousePressed() {
  actRandomSeed = int(random(100000));
}

function keyTyped(){
  if (key == 's' || key == 'S') save("P_2_1_2_03.png");
}

// Generative Gestaltung, ISBN: 978-3-87439-759-9
// First Edition, Hermann Schmidt, Mainz, 2009
// Hartmut Bohnacker, Benedikt Gross, Julia Laub, Claudius Lazzeroni
// Copyright 2009 Hartmut Bohnacker, Benedikt Gross, Julia Laub, Claudius Lazzeroni