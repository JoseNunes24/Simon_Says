//Array of colors
var buttonColors= ["blue", "green", "red", "yellow"];

var sequence = [];
var playerSequence = [];

var audio_blue = new Audio('sounds/blue.mp3')
var audio_green = new Audio("sounds/green.mp3")
var audio_red = new Audio("sounds/red.mp3")
var audio_yellow = new Audio("sounds/yellow.mp3")
var audio_wrong = new Audio("sounds/wrong.mp3")


var started = false;
var level = 0;

$(document).keydown(function () {
	if (!started) {
		nextSequence();
	}
});


//Generate random number
function randomNumber () {
	var number = Math.floor(Math.random()*4)
	return number;
}

function nextSequence() {
		started = true;
		level ++;
		playerSequence = [];
		$("#level-title").text("Level " + level);

		var newColor = randomNumber();
		sequence.push(buttonColors[newColor]);
		

		setTimeout(function() {animateButton(buttonColors[newColor])}, 1000);
		setTimeout(function() {playAudio(buttonColors[newColor])}, 1000);
		
}

//Animate button pressing
function animateButton(animatedClass) {
	$("#" + animatedClass).addClass("pressed");

	setTimeout(function() {
		$("#" + animatedClass).removeClass("pressed");}, 100)
}

//Play audio
function playAudio(color) {
	var audio = new Audio("sounds/" + color + ".mp3");
  	audio.play();
}

//Detect clicked buttons
$(".btn").click(function(event) {
	animateButton(event.target.id);
	playerSequence.push(event.target.id);
	
	if (event.target.id !== sequence[playerSequence.length - 1]) {

		playAudio("wrong");
		$("body").addClass("game-over");
		$("#level-title").text("Game Over, Press Any Key to Restart");
		setTimeout(function() {$("body").removeClass("game-over")}, 200);
		reset();
	}
	playAudio(event.target.id);

	if (playerSequence.length === sequence.length) {
		nextSequence();
		
	}		
})

function reset() {
	started=false;
	level=0;
	sequence=[];
}

