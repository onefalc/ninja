const quiz = [
	{ name: "Superman", realName: "Clark Kent" },
	{ name: "Wonder Woman", realName: "Diana Prince"},
	{ name: "Batman", realName: "Bruce Wayne"}
];

const game = {
	start(quiz) {
		this.questions = [...quiz];
		this.score = 0;

		// Main game loop
		for (const question of this.questions) {
			this.question = question;
			this.ask();
		}

		// End of main game loop
		this.gameOver();
	},

	ask() {
		const question = `What is ${this.question.name}'s real name?`;
		const response = prompt(question);
		this.check(response);
	},

	check(response) {
		const answer = this.question.realName;
		if (response.toLowerCase() === answer.toLowerCase()) {
			alert('Correct!');
			this.score++;
		}
		else {
			alert(`Wrong! The correct answer was ${answer}`);
		}
	},

	gameOver() {
		alert(`Game over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`)
	}
}

// At the end of the game, report the player's score
game.start(quiz);