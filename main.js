const quiz = [
	["Superman", "Clark Kent"],
	["Wonder Woman", "Diana Prince"],
	["Batman", "Bruce Wayne"]
];

let score = 0;

for (const [question, answer] of quiz) {
	const response = prompt(`What is ${question}'s real name?`);
	if (response.toLowerCase() === answer.toLowerCase()) {
		alert('Correct!');
		score++;
	}
	else {
		alert(`Wrong! The correct answer was ${answer}`);
	}
}

// At the end of the game, report the player's score
alert(`Game over, you scored ${score} point${score !== 1 ? 's' : ''}`);