// loops menu sounds
menuMusic.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false)
menuNoise.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false)

document.addEventListener("DOMContentLoaded", loadGame);

function loadGame() {
    jobIndex = 0;
    sceneIndex = 0;
    actionIndex = 0;
    menuMusic.play();
    menuNoise.play();
    startScreen.slideDown();
    gameScreen.hide();
    instructionDiv.hide();
    buttons.on("click", function(){
        menuClick.play();
    });
    playButton.on("click", startGame);
    instructionsButton.on("click", openInstructions);
}

function startGame() {
    menuMusic.pause();
    menuNoise.pause();
    startScreen.hide();
    header.fadeOut();
    gameScreen.fadeIn();
    careerBegin(jobIndex, sceneIndex);
}

function openInstructions() {
    instructionDiv.fadeIn();
    exitInstructions.on("click", function() {
        instructionDiv.fadeOut();
    })
}