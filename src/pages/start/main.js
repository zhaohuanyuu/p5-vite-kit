import "@styles/style.css";
import { sketch } from "@addons/p5Wrapper";
// if need sound
// import 'p5js-wrapper/sound';

sketch.setup = function () {
	createCanvas(800, 600);
};

sketch.draw = function () {
	background(100);
	fill(255, 0, 0);
	noStroke();
	rectMode(CENTER);
	rect(mouseX, mouseY, 50, 50);
};

sketch.mousePressed = function () {
	console.log('here');
};