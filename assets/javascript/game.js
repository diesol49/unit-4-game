// VARIABLES
var crystals = {
	crystal1:
	{
	  name: "Blue",
	  value: 0
	},
	crystal2:
	{
	  name: "Gold",
	  value: 0
	},
	crystal3:
	{
	  name: "Green",
	  value: 0
	},
	crystal4:
	{
	  name: "Red",
	  value: 0
	}
};

// SCORE
var userNumber = 0;
var targetNumber = 0;

// WINS & LOSSES
var wins = 0;
// MAKE THEM APPEAR IN THE DIV
$("#wins").html("<h3>WINS: " + wins + "</h3>");

var losses = 0;
// LOSSES WILL APPEAR IN THIS DIV
$("#losses").html("<h3>LOSSES: " + losses + "</h3>");


// GENERATE RANDOM NUMBERS
var getRandom = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

// RESET GAME
var startGame = function() {

	// RESET THE NUMBER
	userNumber = 0;

	// TARGET SCORE IS BETWEEN 19-120
	targetNumber = getRandom(19, 120);

	// NEED TO HAVE RANDOM VALUES FOR EACH CRYSTAL. BETWEEN 1-12
	crystals.crystal1.value = getRandom(1, 12);
	crystals.crystal2.value = getRandom(1, 12);
	crystals.crystal3.value = getRandom(1, 12);
	crystals.crystal4.value = getRandom(1, 12);

	// SHOW THESE IN THE DIV
	$("#yourNumber").html("<h3>CURRENTLY: " + userNumber + "</h3>");
	$("#targetNumber").html("<h3>LAND ON THIS NUMBER: " + targetNumber + "</h3>");

	$("#gameStatus").empty();

};

// CHECK IF USER WON
var checkWin = function() {

	// IF GREATER, THAN USER LOST
	if (userNumber > targetNumber) {
		
		losses ++;
		// UPDATE THE SITE
		$("#losses").html("<h3>LOSSES: " + losses + "</h3>");
		// THIS WILL LET THE USER KNOW THEY LOST
		$("#gameStatus").html("<h2>UH OH! CLICK HERE TO TRY AGAIN!</h2>");
	}

	// IF SCORES ARE THE SAME, THAN THATS A WIN
	else if (userNumber === targetNumber) {
		
		wins ++;
		// LET THEM KNOW THEY WON
		$("#wins").html("<h3>WINS: " + wins + "</h3>");
	
		$("#gameStatus").html("<h2>GOOD JOB! YOU DID IT! CLICK HERE TO PLAY AGAIN</h2>");
	}
};

// MAKE CRYSTALS HAVE VALUES
var values = function(clickedCrystal) {

	// CHANGE THE NUMBER
	userNumber += clickedCrystal.value;

	// UPATE THE USER'S CURRENT SCORE
	$("#yourNumber").html("<h3>CURRENTLY: " + userNumber + "</h3>");

	checkWin();
};


startGame();

$("#gameStatus").click(function() {
	startGame();
})

$("#crystal1").click(function() {
	values(crystals.crystal1);
});

$("#crystal2").click(function() {
	values(crystals.crystal2);
});

$("#crystal3").click(function() {
	values(crystals.crystal3);
});

$("#crystal4").click(function() {
	values(crystals.crystal4);
});