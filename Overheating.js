let x = 2;

let xpos = 50;
let speed = 0.5;


function setup(){
    createCanvas(500,500);
	frameRate(15);
}

function draw(){
	colorMode(RGB);
	noStroke();
	fill(255,30*x);
	circle(440,60,30);
		
	fill(255,150,104,x);
    rect(0,0,295,500);
		
	fill(255,150,104,x+3);
	rect(305,0,295,500);
		
	fill(166,229,255);
    rect(295,0,10,500);

	xpos = xpos+speed;
	if (xpos > 150){
	speed = speed * -1}

	fill('white');
	circle(xpos,400,15);
}
	