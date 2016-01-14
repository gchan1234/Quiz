$(document).ready(function(){

//Disappear after the inital start
	$("#start-button").click(function(){
	$(".contentWords").hide();
	


	 var quizArray = [
	 { q: "What's the tallest peak in South America?", g: ["Huascaran", "Aconcaugua", "Fitz Roy", "Ojos del Salado"], a: "Aconcaugua"},//, correct: 0 }, 
	 { q: "What is Sydney's tallest structure?", g: ["Central Station Clock Tower", "Queen Victoria Building", "Sydney Harbour Bridge", "Sydney Tower"], a: "Sydney Tower"},
	 { q: "When was the Opera House officially opened?", g: ["1970", "1975", "1973", "1963"], a: "1973"}
	 ];

	 //console.log(quizArray);
	 var questionNum = 0;
	 var questionTotal = quizArray.length;
	 var choiceTotal = quizArray[questionNum].g.length;
	 var numCorrect = 0;

	 function questionDisplay() {
		$(".question").append("<h1>" + quizArray[questionNum].q + "</h1>");
}

	function answersDisplay() {
	for(var i=0; i<choiceTotal; i++) {
		$(".answer-list").append("<li><input type='radio' name='answers' value=" + quizArray[questionNum].g[i] + '>' + " "  + quizArray[questionNum].g[i] + "</li>");
	}
}

	function buttonDisplay() {
	$(".next-button").html("<button type='button' class='btn btn-success btn-lg' id='next-button'>Next</button>");
}

	function display(){
	questionDisplay();
	answersDisplay();
	buttonDisplay();
	console.log(quizArray[questionNum].a);
	}

	function resultsDisplay() {
		$(".next-button").html("<h1>Congratulations, you have answered " + numCorrect + " out of " + questionTotal + " questions correctly!");
	}

	function checkCorrect() {
		console.log($('input[name="answers"]:checked').val());
		if($('input[name="answers"]:checked').val() === quizArray[questionNum].a) {
				numCorrect = numCorrect + 1;
			}
		questionNum++;
		console.log(numCorrect);
	}

	function checkInput() {
		if ($('input[name="answers"]:checked').length == 0) {
			alert("You must select one answer.");
			return 1;
		} else {
			return -1;
		}
	}

	//Program starts
	display();

	$(".next-button").click(function(){
		console.log(checkInput())
		if(checkInput() != 1){
		checkCorrect();
		$(".question h1").hide();
		$(".answers li").hide();
		$(".next-button button").hide();
		if(questionNum != questionTotal) {
		display();
		}else{
		resultsDisplay();
		}
	} else {
		return;
	}
	})
})





});

//var choiceTotal = melissaquestions[questionNum].g.length; for (var i=0; i<choiceTotal; i++) { displays the answer choices $('.answers').append("<input type='radio' class='option' id='option' name='option' value=" + i + ">" + " " + melissaquestions[questionNum].g[i] + "<br>"); }