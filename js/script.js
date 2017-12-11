console.log('JS loaded');

//variables for sound 
var menuMusic = new Audio('../assets/audio/menu.wav');
var menuNoise = new Audio('../assets/audio/office.wav');
//variables for document selectors

//** Starting Screen Selectors
var startScreen = $("#start-screen");
var chairmanTitle = $("#chairman-title");
var playButton = $("#start");
var instructionsButton = $("#info");
var instructionDiv = $("#instructions-div");
var exitInstructions = $("#return-to-menu");
//** Game selectors 
var gameScreen = $("#game-div");
var scenarioDiv = $("#scenario-div");
var scenarioP = $("#scenario-text");
var resultDiv = $("#result-div");
var resultP = $("#result-text");
var actionsDiv = $("#actions");
var actionButtons = $(".action-button");
var scoresDiv = $("#scores");
var weekP = $("#week");
var confidenceP = $("#confidence");
var brownieP = $("#brownie-points");
// selectors for action buttons
var actionsDiv = $("#actions-div");
var actionButtons = $(".action-button");
//** individual action buttons,
//** 1>TopLeft, 2>TopRight,
//** 3>BottomLeft, 4>BottomRight
var action0 = $("#action0");
var action1 = $("#action1");
var action2 = $("#action2");
var action3 = $("#action3");
//variables for scores, week counter for promotion
var weekCount = 0;
var confidenceCount = 0;
var brownieCount = 0;

//Add event listeners to start game
document.addEventListener("DOMContentLoaded", loadGame);

function loadGame() {
	gameScreen.hide();
	instructionDiv.hide();
	playButton.on("click", startGame);
	instructionsButton.on("click", openInstructions);
}

function startGame() {
	startScreen.hide();
	gameScreen.show();
}

function openInstructions(){
	instructionDiv.show();
	exitInstructions.on("click", function(){
		instructionDiv.hide();
	})
}


// menuMusic.play();
// menuNoise.play();
// loops menu sounds
menuMusic.addEventListener('ended', function(){
	this.currentTime=0;
	this.play();
}, false )
menuNoise.addEventListener('ended', function(){
	this.currentTime=0;
	this.play();
}, false )
//Add office ambient, jazz sound to start screen

//Add click noise to buttons

//Show scenario, result, action button divs on start game function

