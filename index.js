//Array of colors
var buttonColors= ["blue", "green", "red", "yellow"];

var sequence = [];

//Add randomly generated colors to the game sequence
function nextSequence(randomNumber, sequence, colors) {
	return sequence.push(colors[randomNumber]);
}

//Generate random number
function randomNumber () {
	var number = Math.floor(Math.random()*4)
	return number;
}


//Detect clicked buttons
$(".btn").click(function(event) {
	$("#" + event.target.id).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
})

