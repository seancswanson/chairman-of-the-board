console.log('JS loaded');

//variables for sound and document selectors
var menuMusic = new Audio('../assets/audio/menu.wav');
var menuNoise = new Audio('../assets/audio/office.wav');


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

