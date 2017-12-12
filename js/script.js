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
var weekLi = $("#week");
var confidenceLi = $("#confidence");
var brownieLi = $("#brownie-points");
// selectors for action buttons
var actionsDiv = $("#actions-div");
//variables for scores, week counter for promotion
var weekCount = 0;
var confidenceCount = 0;
var brownieCount = 0;
// Starts job position at mail clerk.
var jobIndex = 0;
// For referencing scenario
var sceneIndex = 0;
// For referencing choice made
var actionIndex;

// For button for next scene 
var nextScene = $('<button class="action-button" id="nextButton">Next scene</button>');

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
    mailRoomClerk(sceneIndex);
}

function openInstructions() {
    instructionDiv.show();
    exitInstructions.on("click", function() {
        instructionDiv.hide();
    })
}

//grab random scenario from first obect array
function mailRoomClerk(sceneIndex) {
    // var scenario = Math.floor(Math.random() * jobPositions[0].scenarios.length)-1;
    // grabs the text from a scenario nested in the current job title object
    $(scenarioP).text(jobPositions[0].scenarios[sceneIndex].text);
    console.log(jobPositions[0].scenarios[sceneIndex].text);
    // for each possible choice, make a button for it.
    for (var i = 0; i < jobPositions[0].scenarios[sceneIndex].outcomes.length; i++) {
        console.log(i);
        var choice = $('<button class=action-button>' + jobPositions[0].scenarios[sceneIndex].outcomes[i].action + '</button>');
        // add tht button to the actionsDiv
        $(actionsDiv).append(choice);
    };
    var actionButtons = $(".action-button");
    // on action click I want to return the index of that button and then 
    // populate the correlated outcome text by calling it with the button 
    $(actionButtons).on("click", function() {
        actionIndex = $(actionButtons).index(this);
        takeAction();
    });
}


// After any action is taken, displays the result
function takeAction() {
    console.log(actionIndex);
    actionsDiv.html("");
    var result = $('<p id="result-text">' + jobPositions[0].scenarios[sceneIndex].outcomes[actionIndex].result + '</p>');
    $(resultDiv).append(result)
    var confidence = jobPositions[0].scenarios[sceneIndex].outcomes[actionIndex].confidence;
    var confidenceMessage = $('<p class="inline-score" id="result-text">' + 'Confidence +' + confidence + '</p>');
    var brownie = jobPositions[0].scenarios[sceneIndex].outcomes[actionIndex].brownie;
    var brownieMessage = $('<p class="inline-score" id="result-text">' + 'Brownie Points +' + jobPositions[0].scenarios[sceneIndex].outcomes[actionIndex].brownie + '</p>');
    if (jobPositions[0].scenarios[sceneIndex].outcomes[actionIndex].confidence >= 0 && jobPositions[0].scenarios[sceneIndex].outcomes[actionIndex].brownie > 0) {
        console.log("1st if");
        $(resultDiv).append(confidenceMessage).append(brownieMessage);
        updateScores(confidence, brownie);
    } else if (jobPositions[0].scenarios[sceneIndex].outcomes[actionIndex].confidence >= 0) {
        console.log("1st else if");
        $(resultDiv).append(confidenceMessage);
        updateScores(confidence, brownie);
    } else if (jobPositions[0].scenarios[sceneIndex].outcomes[actionIndex].confidence < 0 && jobPositions[0].scenarios[sceneIndex].outcomes[actionIndex].brownie < 0) {
        console.log("2nd else if");
        confidenceMessage = $('<p class="inline-score" id="result-text">' + 'Confidence ' + jobPositions[0].scenarios[sceneIndex].outcomes[actionIndex].confidence + '</p>');
        brownieMessage = $('<p class="inline-score" id="result-text">' + 'Brownie Points ' + jobPositions[0].scenarios[sceneIndex].outcomes[actionIndex].brownie + '</p>');
        $(resultDiv).append(confidenceMessage).append(brownieMessage);
        updateScores(confidence, brownie);
    } else {
        console.log("else");
        confidenceMessage = $('<p class="inline-score" id="result-text">' + 'Confidence ' + jobPositions[0].scenarios[sceneIndex].outcomes[actionIndex].confidence + '</p>');
        $(resultDiv).append(confidenceMessage);
        updateScores(confidence, brownie);
    };
    actionsDiv.append(nextScene);
    sceneIndex++;
    nextScene.on("click", function(){
    	resultDiv.html("");
    	this.remove();
    	mailRoomClerk(sceneIndex);
    });
};

// Updates week, confidence, brownie points score
function updateScores(confidence, brownie){
	var newConfidence = confidenceCount + confidence;
	var newBrownie = brownieCount + brownie;
	weekCount++;
	$(weekLi).text("Week: " + weekCount) 
	$(confidenceLi).text("Confidence: " + newConfidence);
	$(brownieLi).text("Brownie Points: " + newBrownie);
}

// menuMusic.play();
// menuNoise.play();
// loops menu sounds
menuMusic.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false)
menuNoise.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false)
//Add office ambient, jazz sound to start screen

//Add click noise to buttons

//Show scenario, result, action button divs on start game function