
function getName() {
	login = document.getElementById("login").value;
	alert("Hi, " + login);
	return login;
}




function submitAnswers(event, answers) {
	event.preventDefault();


	var total = answers.length;
	var score = 0;
	var choice = []
	wrongAnswers = []


	for (var i = 1; i <= total; i++) {

		choice[i] = document.forms["quizForm"]["q" + i].value;
	}



	for (i = 1; i <= total; i++) {
		if (choice[i] == null || choice[i] == '') {
			alert('you missed question ' + i);
			return false;
		}
	}



	for (i = 1; i <= total; i++) {
		if (choice[i] == answers[i - 1]) {
			score++;
		} else {
			wrongAnswers.push(i);
		}
	}

	//Display Result
	var results = document.getElementById('results');
	results.innerHTML = "<h3>You scored <span>" + score + "</span> out of <span>" + total + "</span></h3>"

	let wrongAnsEle = document.getElementById('wrong-answers');
	if (wrongAnswers.length > 0) {
		wrongAnsEle.innerHTML = `<h3>Wrong Answers: </h3>
	<ul>
	${wrongAnswers.map((ans) => `<li>Question ${ans}</li>`).join('')}
	</ul>`;
	}

	setTimeout(() => {
		window.scrollTo(0, 0);
	})

	console.log(wrongAnswers);
}

