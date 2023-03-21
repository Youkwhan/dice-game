// display the dice we got from rolling
function displayDice(randomNumber1, randomNumber2) {
	document
		.querySelector(".dice .img1")
		.setAttribute("src", `./images/dice${randomNumber1}.png`);

	document
		.querySelector(".dice .img2")
		.setAttribute("src", `./images/dice${randomNumber2}.png`);
}

// Generates a number between 1-6
function rollDice() {
	return Math.ceil(Math.random() * 6);
}

// Checks who won the game
function checkWinner(randomNumber1, randomNumber2) {
	if (randomNumber1 > randomNumber2) {
		document.querySelector("h1").textContent = "Player 1 Wins!";
	} else if (randomNumber1 < randomNumber2) {
		document.querySelector("h1").textContent = "Player 2 Wins!";
	} else {
		document.querySelector("h1").textContent = "Draw!";
	}
}

// runs the game on reload
function main() {
	let randomNumber1 = rollDice();
	let randomNumber2 = rollDice();
	displayDice(randomNumber1, randomNumber2);
	checkWinner(randomNumber1, randomNumber2);
}
main();
