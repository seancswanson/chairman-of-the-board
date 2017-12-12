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
	mailRoomClerk();
}

function openInstructions(){
	instructionDiv.show();
	exitInstructions.on("click", function(){
		instructionDiv.hide();
	})
}

//grab random scenario from first obect array
function mailRoomClerk(){
	// var scenario = Math.floor(Math.random() * jobPositions[0].scenarios.length)-1;
	// grabs the text from a scenario nested in the current job title object
	$(scenarioP).text(jobPositions[0].scenarios[0].text);
	// for each possible choice, make a button for it.
	for(var i = 0; i<jobPositions[0].scenarios[0].outcomes.length; i++){
		console.log(i);
		var choice = $('<button class=action-button>'+jobPositions[0].scenarios[0].outcomes[i].action+'</button>');
	// add tht button to the actionsDiv
	$(actionsDiv).append(choice);
	};
	var actionButtons = $(".action-button");
	// on action click I want to return the index of that button and then 
	// populate the correlated outcome text by calling it with the action index... 
	$(actionButtons).on("click", function(){
		$(this).on("click", function(){
					actionIndex = $(this).index(actionButtons);
					console.log(actionIndex);
		})
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

