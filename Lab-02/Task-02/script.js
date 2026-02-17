const form = document.getElementById("calculator-form");
const numberOneInput = document.getElementById("num1");
const numberTwoInput = document.getElementById("num2");
const operationSelect = document.getElementById("operation");
const resultBox = document.getElementById("result-box");
const resultValue = document.getElementById("result-value");
const resultMessage = document.getElementById("result-message");

function calculateResult(firstNumber, secondNumber, operation) {
	if (operation === "+") {
		return firstNumber + secondNumber;
	}

	if (operation === "-") {
		return firstNumber - secondNumber;
	}

	if (operation === "*") {
		return firstNumber * secondNumber;
	}

	if (operation === "/") {
		return firstNumber / secondNumber;
	}

	return null;
}

function setResultBoxState(state) {
	resultBox.classList.remove("positive", "negative", "zero", "neutral", "error");
	resultBox.classList.add(state);
}

form.addEventListener("submit", (event) => {
	event.preventDefault();

	const firstNumber = Number(numberOneInput.value);
	const secondNumber = Number(numberTwoInput.value);
	const operation = operationSelect.value;

	if (numberOneInput.value.trim() === "" || numberTwoInput.value.trim() === "") {
		setResultBoxState("error");
		resultValue.textContent = "Invalid";
		resultMessage.textContent = "Please enter both numbers.";
		return;
	}

	if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
		setResultBoxState("error");
		resultValue.textContent = "Invalid";
		resultMessage.textContent = "Please enter valid numeric values.";
		return;
	}

	if (operation === "/" && secondNumber === 0) {
		setResultBoxState("error");
		resultValue.textContent = "Error";
		resultMessage.textContent = "Division by zero is not allowed.";
		return;
	}

	const result = calculateResult(firstNumber, secondNumber, operation);

	if (result === null) {
		setResultBoxState("error");
		resultValue.textContent = "Error";
		resultMessage.textContent = "Please select a valid operation.";
		return;
	}

	resultValue.textContent = Number.isInteger(result) ? String(result) : result.toFixed(2);
	resultMessage.textContent = `${firstNumber} ${operation} ${secondNumber} = ${resultValue.textContent}`;

	if (result > 0) {
		setResultBoxState("positive");
	} else if (result < 0) {
		setResultBoxState("negative");
	} else {
		setResultBoxState("zero");
	}
});
