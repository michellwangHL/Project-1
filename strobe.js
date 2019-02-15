function setup() {
    createCanvas(800, 800);
  	frameRate(10);
  }
  
  function draw() {
  	colorMode(RGB);
    var r = random(255);
    var b = random(255);
    var g = random(255);
    background(r,g,b,120);
    var step = frameCount % 20;
    var angle = map(step, 0, 20, 0, TWO_PI);
    var cos_a = cos(angle);
    var sin_a = sin(angle);
    applyMatrix(cos_a, sin_a, -sin_a, cos_a, mouseX, mouseY);
    rectMode(CENTER);
    fill(r,b,g,200);
    noStroke();
    rect(0,0,300,10);
  }
