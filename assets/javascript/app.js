$(document).ready(function() {

//Create click actions
$("#start").on("click", function(event){
	generateHTML();
	showTimer();

});

$(".quiz").on("click", ".answer", function(event){
	selectedAnswer = $(this).index();
	//console.log($(this).index());
	if(selectedAnswer === questions[i].correctAnswer) {
		clearInterval(clock);
		generateWin();
	}
	else {
		clearInterval(clock);
		generateLoss();
	}
});

$(".quiz").on("click", "#reset", function(event){
	resetGame();
});

});

//Create functions
function generateHTML() {
	trivia ="<p class='header'>Time Remaining: <span class='timer'>10</span></p><br>"+
	"<p>"+questions[i].question+"</p><br>"+
	"<p class='answer'>"+questions[i].choices[0]+"</p>"+
	"<p class='answer'>"+questions[i].choices[1]+"</p>"+
	"<p class='answer'>"+questions[i].choices[2]+"</p>"+
	"<p class='answer'>"+questions[i].choices[3]+"</p>";
	$(".quiz").html(trivia);
}

function generateWin() {
	win++;
	trivia = "<p class='header'>"+questions[i].question+"</p>"
	+"<div class='win'> Correct! The answer is: " 
	+questions[i].choices[questions[i].correctAnswer-4]+"</div>"
	+"<img class='image col-sm-8 col-sm-offset-2' src="+questions[i].image+">";
	$(".quiz").html(trivia);
	setTimeout(displayNext, 3000);
}

function generateLoss() {
	loss++;
	trivia = "<p class='header'>"+questions[i].question+"</p>"
	+"<div class='loss'> Wrong! The correct answer is: "
	+questions[i].choices[questions[i].correctAnswer-4]+"</div>"
	+"<img class='image col-sm-8 col-sm-offset-2' src="+questions[i].image+">";
	$(".quiz").html(trivia);
	setTimeout(displayNext, 3000);
}

function timeOut() {
	unanswered++;
	trivia = "<p class='header'>"+questions[i].question+"</p>"
	+"<div class='blank'>You are too slow!!! The correct answer was: "
	+questions[i].choices[questions[i].correctAnswer-4]+"</div>"
	+"<img class='image col-sm-8 col-sm-offset-2' src="+questions[i].image+">";
	$(".quiz").html(trivia);
	setTimeout(displayNext, 3000);
}

function score() {
	trivia = "<p class='header'>Here are your results!" + "</p>" 
	+ "<p>Correct Answers: " + win + "</p>" 
	+ "<p>Wrong Answers: " + loss + "</p>" 
	+ "<p>Unanswered: " + unanswered + "</p>" 
	+"<img class='image col-sm-2 col-sm-offset-1' src="+questions[0].image+">"
	+"<img class='image col-sm-2' src="+questions[1].image+">"
	+"<img class='image col-sm-2' src="+questions[2].image+">"
	+"<img class='image col-sm-2' src="+questions[3].image+">"
	+"<img class='image col-sm-2' src="+questions[4].image+">"
	+ "<button id='reset' class='btn btn-primary btn-lg btn-block'>Restart Game</button>";
	$(".quiz").html(trivia);
}

function displayNext() {
	if (i < 4) {
	i++;
	generateHTML();
	counter = 10;
	showTimer();
	}
	else {
		score();
	}
}

function showTimer() {
	clock = setInterval(countDown, 1000);
	function countDown() {
		if (counter === 0) {
			clearInterval(clock);
			timeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function resetGame() {
	i = 0;
	win = 0;
	loss = 0;
	unanswered = 0;
	counter = 10;
	generateHTML();
	showTimer();
}

//Declare variables
var trivia;
var clock;
var counter = 10;
var i = 0;
var win = 0;
var loss = 0;
var unanswered = 0;

var questions = [{
    question: "What fast food originated from Los Angeles?",
    choices: ["A. In and Out","B. Pizza Hut","C. Chipotle","D. McDonalds"],
    correctAnswer: 4,
    image:"assets/images/in_and_out.jpg"
  }, {
    question: "What food would you find in Japan?",
    choices: ["A. Beef Noodle Soup","B. Orange Chicken","C. Sushi","D. Bibimbap"],
    correctAnswer: 6,
    image:"assets/images/sushi.jpg"
  }, {
    question: "What do you call Italian ice cream?",
    choices: ["A. Sorbet", "B. Sherbet","C. Ice Cream","D. Gelato"],
    correctAnswer: 7,
    image: "assets/images/gelato.jpg"
  }, {
    question: "What is a Singaporean dish?",
    choices: ["A. Pho", "B. Hainan Chicken", "C. Spring Rolls","D. Nasi Goreng"],
    correctAnswer: 5,
    image: "assets/images/hainan.jpg"
  }, {
    question: "Where did Boba Tea come from?",
    choices: ["A. United States","B. Taiwan","C. China","D. South Korea"],
    correctAnswer: 5,
    image: "assets/images/boba.jpg"
  }];