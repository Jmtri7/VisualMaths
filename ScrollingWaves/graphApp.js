var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");

var amp1 = 255 * Math.random();
var amp2 = 255 * Math.random();
var slide1 = 2 * Math.PI * Math.random();
var slide2 = 2 * Math.PI * Math.random();
var color1 = "rgb(" + Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random()) + ")";
var color2 = "rgb(" + Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random()) + ")";;
var widthFit = c.width / (2 * Math.PI);

ctx.fillStyle = color1;
for(var i = 0; i <= 2 * Math.PI; i+= 2 * Math.PI / 100) {
		ctx.fillRect(i * widthFit, 50 * Math.sin(i + slide1) + (c.height / 2), 5, 5);
}

ctx.fillStyle = color2;
for(var i = 0; i <= 2 * Math.PI; i+= 2 * Math.PI / 100) {
		ctx.fillRect(i * widthFit, 100 * Math.sin(i + slide2) + (c.height / 2), 5, 5);
}

setInterval(function(){
	ctx.clearRect(0, 0, c.width, c.height);

	ctx.fillStyle = color1;
	slide1 += .003;
	for(var i = 0; i <= 2 * Math.PI; i+= 2 * Math.PI / 100) {
			ctx.fillRect(i * 80, amp1 * Math.sin(i + slide1) + (c.height / 2), 5, 5);
	}

	ctx.fillStyle = color2;
	slide2 += .015;
	for(var i = 0; i <= 2 * Math.PI; i+= 2 * Math.PI / 100) {
			ctx.fillRect(i * 80, amp2 * Math.sin(i + slide2) + (c.height / 2), 5, 5);
	}

}, 16);

// function wave(amp, slide, color) {
// 	this.amp = amp;
// 	this.slide = slide;
// 	this.color = color;

// 	this.draw = function() {
// 		ctx.fillStyle = this.color;
// 		this.slide += .015;
// 		for(var i = 0; i <= 2 * Math.PI; i+= 2 * Math.PI / 100) {
// 				ctx.fillRect(i * 80, this.amp * Math.sin(i + this.slide2) + (c.height / 2), 5, 5);
// 		}
// 	}
// }

// var wave1 = new wave(250, 0, "blue");
