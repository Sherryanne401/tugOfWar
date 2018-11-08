var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var middle = 250;
var position = middle;

function draw(){
	//keep canvas empty
	ctx.clearRect(0, 0, 500, 100);

	//line as marker down in the middle of the screen
	ctx.beginPath();
	ctx.moveTo(middle, 0);
	ctx.lineTo(middle, 100);
	ctx.stroke();

	//red dot to play tug-of-war with
	ctx.beginPath();
	ctx.fillStyle = 'red';
	ctx.arc(position, 50, 5, 0, Math.PI * 2);
	ctx.fill();
}

draw();

//change the position of the red dot and run draw to update the screen
function move(distance){
	position = position + distance;
	draw();
}

//allows the players to move the dot when pressing arrow keys
//prevent the computer from scrolling the page up, down, left, or right
window.addEventListener('keydown', function(event){
	event.preventDefault;

	if (event.key === 'ArrowRight'){
		move(10);
	};
	if (event.key === 'ArrowLeft'){
		move(-10);
	};
});

//check winner + alert
function checkWinner(){
	if (position > middle) {
		alert("Right wins!");
	};
	if (position < middle) {
		alert("Left wins!");
	};
	if (position === middle) {
		alert("It's a draw!");
	}
};

setTimeout(checkWinner, 10000);
