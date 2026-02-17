const questions = [
	{
		question: "What does HTML stand for?",
		options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"],
		correctAnswer: "Hyper Text Markup Language"
	},
	{
		question: "Which CSS property is used to change text color?",
		options: ["font-style", "text-color", "color", "background-color"],
		correctAnswer: "color"
	},
	{
		question: "Which method is used to print output in the browser console?",
		options: ["console.write()", "print()", "console.log()", "document.log()"],
		correctAnswer: "console.log()"
	},
	{
		question: "Which of the following is used to create a server in Node.js?",
		options: ["http.createServer()", "node.createServer()", "server.make()", "create.nodeServer()"],
		correctAnswer: "http.createServer()"
	},
	{
		question: "Which SQL command is used to retrieve data from a table?",
		options: ["GET", "SELECT", "FETCH", "RETRIEVE"],
		correctAnswer: "SELECT"
	}
];

const questionNoElement = document.getElementById("question-no");
const currentQuestionElement = document.getElementById("current-question");
const nextButton = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;
let hasAnswered = false;

function renderQuestion() {
	const currentQuestion = questions[currentQuestionIndex];
	questionNoElement.textContent = `${currentQuestionIndex + 1} / ${questions.length}`;
	nextButton.textContent = currentQuestionIndex === questions.length - 1 ? "Show Result" : "Next";
	nextButton.disabled = true;
	hasAnswered = false;

	currentQuestionElement.innerHTML = `
		<h2>${currentQuestion.question}</h2>
		<ul class="options-list">
			${currentQuestion.options
				.map(
					(option, index) => `
						<li>
							<button type="button" class="option-btn" data-index="${index}">${option}</button>
						</li>
					`
				)
				.join("")}
		</ul>
		<p id="status-text" class="status-text"></p>
	`;

	const optionButtons = currentQuestionElement.querySelectorAll(".option-btn");
	optionButtons.forEach((button) => {
		button.addEventListener("click", () => handleAnswerSelection(Number(button.dataset.index)));
	});
}

function handleAnswerSelection(selectedOptionIndex) {
	if (hasAnswered) {
		return;
	}

	const currentQuestion = questions[currentQuestionIndex];
	const selectedAnswer = currentQuestion.options[selectedOptionIndex];
	const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
	const optionButtons = currentQuestionElement.querySelectorAll(".option-btn");
	const statusText = document.getElementById("status-text");

	hasAnswered = true;
	nextButton.disabled = false;

	if (isCorrect) {
		score += 1;
		statusText.textContent = "Correct answer";
		statusText.classList.add("status-correct");
	} else {
		statusText.textContent = `Wrong answer. Correct: ${currentQuestion.correctAnswer}`;
		statusText.classList.add("status-incorrect");
	}

	optionButtons.forEach((button, index) => {
		button.disabled = true;
		const optionText = currentQuestion.options[index];

		if (optionText === currentQuestion.correctAnswer) {
			button.classList.add("option-correct");
		}

		if (index === selectedOptionIndex && !isCorrect) {
			button.classList.add("option-incorrect");
		}

		if (index === selectedOptionIndex) {
			button.classList.add("option-selected");
		}
	});
}

function showResult() {
	questionNoElement.textContent = "Completed";
	currentQuestionElement.innerHTML = `
		<div class="result-card">
			<h2>Quiz Completed</h2>
			<p class="result-score">Your Score: ${score} / ${questions.length}</p>
			<p class="result-percent">${Math.round((score / questions.length) * 100)}%</p>
			<button id="restart">Restart Quiz</button>
		</div>
	`;
	nextButton.style.display = "none";

	const restartButton = document.getElementById("restart");
	restartButton.addEventListener("click", restartQuiz);
}

function restartQuiz() {
	currentQuestionIndex = 0;
	score = 0;
	nextButton.style.display = "inline-block";
	renderQuestion();
}

nextButton.addEventListener("click", () => {
	if (currentQuestionIndex < questions.length - 1) {
		currentQuestionIndex += 1;
		renderQuestion();
	} else {
		showResult();
	}
});

renderQuestion();