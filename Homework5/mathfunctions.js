var difficulty = 0
var lives = 3
var score = 0;
var num1 = 0;
var num2 = 0;
var offset = 11;
var operators = ['+','-','*','/'];
var nameArray = new Array();
var scoreArray = new Array();
var highScores = [];
var questions = [];
var highScoreIndex = 0;
var questionIndex = 0;
var numQ = 100;


function play(){
	document.getElementById("userResponse").disabled = false;
	document.getElementById("submit").disabled=false;
	document.getElementById("play").disabled=true;
	questionIndex = Math.floor((Math.random()*(numQ-1)));
	
	for(var i = 0; i < numQ; i++){
		num1 = Math.floor((Math.random()*offset)+1);
		num2 = Math.floor((Math.random()*offset)+1);
		var index = Math.floor(Math.random()*3);
		var question = "What's "+num1+operators[index]+num2+"?";
		
	if (index == 0){
		var jsonData = {"question": question, "answer": num1+num2};
		questions.push(jsonData);
		
	}
	else if(index == 1){
		var jsonData = {"question": question, "answer": num1-num2};
		questions.push(jsonData);
		
	}
	else if(index == 2){
		var jsonData = {"question": question, "answer": num1*num2};
		questions.push(jsonData);
		
	}
	else{
		var jsonData = {"question": question, "answer": num1/num2};
		questions.push(jsonData);
		
	}
		
	}
	
	if(difficulty%5 == 0){
		window.alert("Good luck questions will get harder :)");
	}
	document.getElementById("answer").value = questions[questionIndex].answer;
	document.getElementById("gamelab").innerHTML= questions[questionIndex].question;
	
}

function checkAnswer(){
	
	questionIndex = Math.floor((Math.random()*(numQ-1)));
	document.getElementById("gamelab").innerHTML= questions[questionIndex].question;
	var prev = document.getElementById("answer").value;
	
	document.getElementById("answer").value = questions[questionIndex].answer;
	
	var response = document.getElementById("userResponse").value;
	
	if(response == prev){
		window.alert("Correct!");
		difficulty = difficulty+1;
		score = score+1;
		document.getElementById("score").innerHTML = "Score: " + score;
		if(difficulty%5 == 0){
			window.alert("Difficulty Increasing...");
			difficulty = difficulty+1;
			offset = offset+10;
		}

	}
	else{
		window.alert("Incorrect");
		lives = lives-1;
		document.getElementById("lives").innerHTML = "Lives: " + lives;
		if(lives == 0){
			livesOut();
		}
		
	
	}
	
	document.getElementById("userResponse").value = "";
}
function livesOut(){
	document.getElementById("gamelab").innerHTML = "You Lose, please enter high score name below";
	document.getElementById("play").disabled = true;
	var highScoreText = document.getElementById("highscore");
	var highScoreButton = document.getElementById("subhighscore");
	highScoreText.style.visibility = "visible";
	highScoreButton.style.visibility = "visible";
	document.getElementById("submit").disabled= true;
	document.getElementById("userResponse").disabled = true;
	
}
function submitScore(){
	
	var scoreString = "";
	var name = document.getElementById("highscore").value;
	var jsonData = {"name": name, "score": score};
	highScores.push(jsonData);
	var length = highScores.length;
	for(var i = 0; i < length; i++){
		
		if(length-i-2 >= 0 && highScores[length-i-1].score > highScores[length-i-2].score){
			
			var temp = highScores[length-i-1];
			highScores[length-i-1] = highScores[length-i-2];
			highScores[length-i-2] = temp;
			
		}
		
	}
	
	score = 0;
	lives = 3;
	difficulty = 0;
	document.getElementById("gamelab").innerHTML = "Questions appear here";
	document.getElementById("score").innerHTML = "Score: " + score;
	document.getElementById("lives").innerHTML = "Lives: " + lives;
	document.getElementById("highscore").style.visibility = "hidden";
	document.getElementById("subhighscore").style.visibility = "hidden";
	document.getElementById("highscore").innerHTML = "";
	document.getElementById("scorehead").style.visibility="visible";
	document.getElementById("scorelab").style.visibility="visible";
	for (var i = 0; i < highScores.length; i++){
		scoreString = scoreString + highScores[i].name + ":" + highScores[i].score + "<br>";
	}
	document.getElementById("scorelab").innerHTML = scoreString;
	document.getElementById("play").disabled=false;
	
	
}
function changeColor(txt){
	txt.style.background = "lightblue";
}
function changeBack(txt){
	txt.style.background = "white";
}

