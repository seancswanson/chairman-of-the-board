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
var jobLi = $("#job");
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
var actionIndex = 0;

// For button for next scene 
var nextScene = $('<button class="action-button" id="nextButton">Next scene</button> or ');

// For button for promotions
var promotionButton = $('<button class="action-button" id="promotionButton">Try for promotion?</button>');
var confidenceButton = $('<button class="action-button" id="use-confidence">Use confidence points, i\'ll take my chances.</button>');
var brownieButton = $('<button class="action-button" id="use-brownie">Use brownie points!</button>');
var nextJob = $('<button class="action-button" id="next-job">Start your new job!</button>');
var startOver = $('<button class="action-button" id="start-over">Reincarnate as the ' + jobPositions[jobIndex].title + '</button>');
//Add event listeners to start game
document.addEventListener("DOMContentLoaded", loadGame);

// var scenarioArray = jobPositions[jobIndex].scenarios[sceneIndex];

function loadGame() {
    menuMusic.play();
    menuNoise.play();
    gameScreen.hide();
    instructionDiv.hide();
    playButton.on("click", startGame);
    instructionsButton.on("click", openInstructions);
}

function startGame() {
    menuMusic.pause();
    menuNoise.pause();
    startScreen.hide();
    gameScreen.show();
    careerBegin(jobIndex, sceneIndex);
}

function openInstructions() {
    instructionDiv.show();
    exitInstructions.on("click", function() {
        instructionDiv.hide();
    })
}
//** randomize scenarios
// function shuffle(scenarioArray) {
//   var m = scenarioArray.length, t, i;

//   // While there remain elements to shuffle…
//   while (m) {

//     // Pick a remaining element…
//     i = Math.floor(Math.random() * m--);

//     // And swap it with the current element.
//     t = scenarioArray[m];
//     scenarioArray[m] = scenarioArray[i];
//     scenarioArray[i] = t;
//   }

//   return scenarioArray;
// }

//grab random scenario from first obect array
function careerBegin(jobIndex, sceneIndex) {
    // shuffle(scenarioArray);
    // var scenario = Math.floor(Math.random() * jobPositions[0].scenarios.length)-1;
    if (sceneIndex <= 3) {
        // grabs the text from a scenario nested in the current job title object
        $(jobLi).text(jobPositions[jobIndex].title);
        $(scenarioP).text(jobPositions[jobIndex].scenarios[sceneIndex].text);
        // console.log(jobPositions[0].scenarios[sceneIndex].text);
        // for each possible choice, make a button for it.
        for (var i = 0; i < jobPositions[jobIndex].scenarios[sceneIndex].outcomes.length; i++) {
            var choice = $('<button class=action-button>' + jobPositions[jobIndex].scenarios[sceneIndex].outcomes[i].action + '</button>');
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
    } else {
        tryPromotion();
    }
}


// After any action is taken, displays the result
function takeAction() {
    actionsDiv.html("");
    var result = $('<p id="result-text">' + jobPositions[jobIndex].scenarios[sceneIndex].outcomes[actionIndex].result + '</p>');
    $(resultDiv).append(result);
    var confidence = jobPositions[jobIndex].scenarios[sceneIndex].outcomes[actionIndex].confidence;
    var confidenceMessage = $('<p class="inline-score" id="result-text">' + 'Confidence +' + confidence + '</p>');
    var brownie = jobPositions[jobIndex].scenarios[sceneIndex].outcomes[actionIndex].brownie;
    var brownieMessage = $('<p class="inline-score" id="result-text">' + 'Brownie Points +' + jobPositions[jobIndex].scenarios[sceneIndex].outcomes[actionIndex].brownie + '</p>');
    if (confidence >= 0 && brownie > 0) {
        $(resultDiv).append(confidenceMessage).append(brownieMessage);
        updateData(confidence, brownie);
    } else if (confidence >= 0) {
        $(resultDiv).append(confidenceMessage);
        updateData(confidence, brownie);
    } else if (confidence < 0 && brownie < 0) {
        confidenceMessage = $('<p class="inline-score" id="result-text">' + 'Confidence ' + confidence + '</p>');
        brownieMessage = $('<p class="inline-score" id="result-text">' + 'Brownie Points ' + brownie + '</p>');
        $(resultDiv).append(confidenceMessage).append(brownieMessage);
        updateData(confidence, brownie);
    } else {
        confidenceMessage = $('<p class="inline-score" id="result-text">' + 'Confidence ' + confidence + '</p>');
        $(resultDiv).append(confidenceMessage);
        updateData(confidence, brownie);
    };
    actionsDiv.append(nextScene).append(promotionButton);
    nextScene.on("click", function() {
        resultDiv.html("");
        this.remove();
        actionsDiv.html("");
        promotionButton.remove();
        careerBegin(jobIndex, sceneIndex);
    });
    promotionButton.on("click", tryPromotion);
};

// Updates week, confidence, brownie points score
function updateData(confidence, brownie) {
    sceneIndex++;
    weekCount++;
    confidenceCount = confidenceCount + confidence;
    brownieCount = brownieCount + brownie;
    $(weekLi).text("Week: " + weekCount)
    $(confidenceLi).text("Confidence: " + confidenceCount);
    $(brownieLi).text("Brownie Points: " + brownieCount);
}

function tryPromotion() {
    $(scenarioP).html("");
    $(resultDiv).html("");
    $(actionsDiv).html("");
    actionsDiv.append(confidenceButton).append(brownieButton);
    confidenceButton.on("click", confidencePromotion);
    brownieButton.on("click", browniePromotion);
    $(scenarioP).append("Would you like to try for a promotion? You have two ways to move up.");
    $(scenarioP).append("<p>a) Use confidence points to take your chances.</p><p>b) Use brownie points- if you have enough then it will be an instant win... or else you get sent back to the beginning!</p>");
}

function confidencePromotion() {
    console.log("confidence promotion check");
    if (jobIndex === 0) {
        var minConfidence = Math.floor(Math.random() * 150);
    } else if (jobIndex === 1) {
        var minConfidence = Math.floor(Math.random() * 300);
    } else if (jobIndex === 2) {
        var minConfidence = Math.floor(Math.random() * 400);
    } else if (jobIndex === 3) {
        var minConfidence = Math.floor(Math.random() * 500);
    } else {
        var minConfidence = Math.floor(Math.random() * 800);
    };
    console.log(minConfidence);
    if (confidenceCount > minConfidence) {
        console.log("You got promoted!");
        jobIndex++;
        sceneIndex = 0;
        $(actionsDiv).html("");
        $(scenarioP).html("");
        $(scenarioP).append("You got promoted to: " + jobPositions[0].title);
        $(scenarioP).append("<p>Congratulations on your level up! You will start your new job next week and be reporting to a new manager.</p><p> Keep up the good work!</p>");
        $(actionsDiv).append(nextJob);
        nextJob.on("click", function() {
            this.remove();
            careerBegin(jobIndex, sceneIndex);
        });
    } else {
        console.log("You didn't get promoted.");
        sceneIndex = 0;
        $(actionsDiv).html("");
        $(scenarioP).html("");
        $(scenarioP).append("<p>You dropped the ball and didn't land your promotion.</p><p>So sorry your path to be the Chairman was thwarted! You will relive the last weeks worked and groundhog day your way to success.</p><p>The chance for corporate glory is nigh!</p>");
        $(actionsDiv).append(startOver);
        startOver.on("click", function() {
            this.remove();
            careerBegin(jobIndex, sceneIndex);
        });
    }

}

function browniePromotion() {
    console.log("brownie promotion");
    if (brownieCount === 1) {
        console.log("You got promoted!");
        jobIndex++;
        brownieCount = brownieCount - 1;
        sceneIndex = 0;
        $(actionsDiv).html("");
        $(scenarioP).html("");
        $(scenarioP).append("You got promoted to: " + jobPositions[0].title);
        $(scenarioP).append("<p>Congratulations on your level up! Your old manager is giving you mad props and is giddy to help your career climb.</p><p> Keep up the good work!</p>");
        $(actionsDiv).append(nextJob);
        nextJob.on("click", function() {
            this.remove();
            careerBegin(jobIndex, sceneIndex);
        });
    } else {
        console.log("You didn't get promoted.");
        sceneIndex = 0;
        brownieCount = 0;
        $(actionsDiv).html("");
        $(scenarioP).html("");
        $(scenarioP).append("<p>You dropped the ball and didn't land your promotion.</p><p>So sorry your path to be the Chairman was thwarted! You will relive the last weeks worked and groundhog day your way to success.</p><p>The chance for corporate glory is nigh!</p>");
        $(actionsDiv).append(startOver);
        startOver.on("click", function() {
            this.remove();
            careerBegin(jobIndex, sceneIndex);
        });
    }
}

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