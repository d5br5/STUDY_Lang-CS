enum Shoes {
	Nike = "나이키",
	Adidas = 10,
}

var myShoes = Shoes.Nike;

enum Answer {
	Yes = "Y",
	No = "N",
}

function askQuestion(answer: Answer) {
	if (answer === Answer.Yes) {
		console.log("right");
	}

	if (answer === Answer.No) {
		console.log("오답입니다");
	}
}

askQuestion(Answer.Yes);
