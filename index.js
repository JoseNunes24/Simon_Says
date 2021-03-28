//Array of colors
var buttonColors= ["blue", "green", "red", "yellow"];

var sequence = [];
var playerSequence = [];


nextSequence(randomNumber(), sequence, buttonColors);

//Add randomly generated colors to the game sequence
function nextSequence(number, sequence, colors) {
	return sequence.push(colors[number]);
}

//Generate random number
function randomNumber () {
	var number = Math.floor(Math.random()*4)
	return number;
}


//Detect clicked buttons
$(".btn").click(function(event) {
	$("#" + event.target.id).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
	playerSequence.push(event.target.id);
	if (event.target.id === sequence[sequence.length - 1]) {
		nextSequence(randomNumber(), sequence, buttonColors);
	}
	else {
		alert("Game Over");
	}
	
	//alert(sequence[]);
})

