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


//variables for scores, week counter for promotion
var weekCount = 0;
var confidenceCount = 0;
var brownieCount = 0;

//Add event listeners to start game

// menuMusic.play();
// menuNoise.play();
//loops menu sounds
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

