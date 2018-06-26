const quiz = [
	["Superman", "Clark Kent"],
	["Wonder Woman", "Diana Prince"],
	["Batman", "Bruce Wayne"]
];

function start(quiz) {
	let score = 0;

	// Main game loop
	for (const [question, answer] of quiz) {
		const response = ask(`What is ${question}'s real name?`);
		check(response, answer);
	}
	// End of main game loop

	gameOver();

	// Function declarations
	function ask(question) {
		return prompt(question);
	}

	function check(response, answer) {
		if (response.toLowerCase() === answer.toLowerCase()) {
			alert('Correct!');
			score++;
		}
		else {
			alert(`Wrong! The correct answer was ${answer}`);
		}
	}

	function gameOver() {
		alert(`Game over, you scored ${score} point${score !== 1 ? 's' : ''}`)
	}
}

// At the end of the game, report the player's score
start(quiz)