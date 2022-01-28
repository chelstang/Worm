var mousex = [];
var mousey = [];
var num = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(101, 67, 33);
	noFill();
	strokeWeight(10);
	
	randomSeed(5);
	
	beginShape();
	stroke('pink');
	for(let i = 0; i < 100; i++){
		let rando = random(-3,3);
		let rando2 = random(-3,3);
		curveVertex(mousex[i]+rando,mousey[i]+rando2);
	}
	endShape();
}

function mouseMoved(){
	if(num == 100){
		mousex.shift();
		mousey.shift();
		num--;
	} else {
		mousex.push(mouseX);
		mousey.push(mouseY);
		num++;
	}
}