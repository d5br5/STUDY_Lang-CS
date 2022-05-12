const form = document.querySelector("#question-form");

(() => {
	fetch("../data/data.json")
		.then((res) => res.json())
		.then((data) => makeQuestions(data));
})();

function makeQuestions(data) {
	const {questions} = data;
	const {answers} = data;

	questions.forEach((q) => {
		let answerArr = answers.filter((a) => a.question === q.pk);
		form.appendChild(setElement(q, answerArr));
	});

	const questionItem = document.querySelectorAll(".question-item");
	const firstQ = questionItem[0];
	firstQ.classList.add("on");

	const buttonBoxes = document.querySelectorAll(".button-box");
	const firstBB = buttonBoxes[0];
	const lastBB = buttonBoxes[buttonBoxes.length - 1];

	firstBB.innerHTML = `<button type="button" class="next-btn">다음</button>`;
	firstBB.classList.add("style-center");
	lastBB.innerHTML = `<button type="button" class="previous-btn">이전</button><button type="submit" class="previous-btn">제출</button>`;

	//

	const prevButtons = document.querySelectorAll(".previous-btn");
	const nextButtons = document.querySelectorAll(".next-btn");

	for (let prevButton of prevButtons) {
		prevButton.addEventListener("click", () => {
			let current = document.querySelector(".question-item.on");
			movePrev(current);
		});
	}
	for (let nextButton of nextButtons) {
		nextButton.addEventListener("click", () => {
			const inp = document.querySelectorAll(".question-item.on input");
			let isChecked = false;
			inp.forEach((item) => {
				if (item.checked) {
					let current = document.querySelector(".question-item.on");
					isChecked = true;
					moveNext(current);
				}
			});
			if (!isChecked) {
				alert("보기를 선택해 주세요.");
			}
		});
	}

	const statusBar = document.querySelectorAll(".status-bar");
	statusBar.forEach((item, index) => {
		item.style.width = `${(Number(index) + 1) * 10}%`;
	});
}

function setElement(question, answerArr) {
	const questionItem = document.createElement("div");
	questionItem.classList.add("question-item");

	const tempContainer = document.createElement("div");

	for (let idx in answerArr) {
		let answer = answerArr[idx];
		tempContainer.innerHTML += `
            <li class="answer-item">
                <input type="radio" id="answer-${answer.pk}" name="question-${
			question.pk
		}" value="${answer.developer}" />
                <label for="answer-${answer.pk}">${Number(idx) + 1}. ${
			answer.content
		}</label>
            </li>
        `;
	}

	questionItem.innerHTML = `
        <div class="status-box">
			<span>${question.pk}/10</span>
		    <div class="status-bar"></div>
		</div>
		<div class="question-box">
			<h2>Q. ${question.content}</h2>
			<ol class="answer-list">
				${tempContainer.innerHTML}
			</ol>
		</div>
		<div class="button-box">
			<button type="button" class="previous-btn">이전</button>
			<button type="button" class="next-btn">다음</button>
		</div>
    `;

	tempContainer.remove();
	return questionItem;
}

function moveNext(curr) {
	curr.classList.remove("on");
	let next = curr.nextElementSibling;
	if (next) {
		next.classList.add("on");
	}
}

function movePrev(curr) {
	curr.classList.remove("on");
	let prev = curr.previousElementSibling;
	if (prev) {
		prev.classList.add("on");
	}
}
