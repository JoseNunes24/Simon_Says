//Array of colors
var buttonColors= ["blue", "green", "red", "yellow"];

var sequence = [];
var playerSequence = [];

var audio_blue = new Audio('sounds/blue.mp3')
var audio_green = new Audio("sounds/green.mp3")
var audio_red = new Audio("sounds/red.mp3")
var audio_yellow = new Audio("sounds/yellow.mp3")
var audio_wrong = new Audio("sounds/wrong.mp3")


beginGame();

function beginGame () {
	$(document).keydown(function () {
		nextSequence(randomNumber(), sequence, buttonColors);
		animateButton(sequence[sequence.length-1]);
	});	
}

//Add randomly generated colors to the game sequence
function nextSequence(number, sequence, colors) {
	return sequence.push(colors[number]);
}

//Generate random number
function randomNumber () {
	var number = Math.floor(Math.random()*4)
	return number;
}

//Animate button pressing
function animateButton(animatedClass) {
	$("#" + animatedClass).addClass("pressed");

	setTimeout(function() {
		$("#" + animatedClass).removeClass("pressed");}, 100)
}

//Play audio
function playAudio(color) {
	switch(color) {
		case "blue":
			audio_blue.play();
			break;
		case "green":
			audio_green.play();
			break;
		case "red":
			audio_red.play();
			break;
		case "yellow":
			audio_yellow.play();
			break;
		case "wrong":
			audio_wrong.play();
			break;
		default:;
	}
}

//Detect clicked buttons
$(".btn").click(function(event) {
	animateButton(event.target.id);
	playerSequence.push(event.target.id);
	
	if (event.target.id !== sequence[playerSequence.length - 1]) {


		playAudio("wrong");
		beginGame();
	}
	playAudio(event.target.id);

	if (playerSequence.length === sequence.length) {
		nextSequence(randomNumber(), sequence, buttonColors);
		setTimeout(function() {animateButton(sequence[sequence.length-1])}, 1000);
		playerSequence = [];
	}
			
	
	//alert(sequence[]);
})

