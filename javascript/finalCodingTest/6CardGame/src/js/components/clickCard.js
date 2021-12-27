class Card {
	constructor() {
		this.board = document.querySelector(".list-card");
		this.cardEl = [];
		this.processing = false;
	}

	setup() {
		this.bindEvents();
	}

	bindEvents() {
		this.board.addEventListener("click", (e) => {
			if (this.processing) return;
			const cPath = e.composedPath();
			const elem = cPath.find((element) => element.tagName === "LI");
			if (!elem) return;

			if (this.cardEl[0] === elem) {
				this.cardEl.pop();
			} else if (this.cardEl.length < 2) {
				this.cardEl.push(elem);
			}
			elem.classList.toggle("on");

			if (this.cardEl.length === 2) {
				this.processing = true;
				setTimeout(() => {
					if (this.cardEl[0].dataset.name === this.cardEl[1].dataset.name) {
						this.cardEl[0].style.visibility = "hidden";
						this.cardEl[1].style.visibility = "hidden";
					} else {
						this.cardEl[0]?.classList.toggle("on");
						this.cardEl[1]?.classList.toggle("on");
					}
					this.cardEl = [];
					this.processing = false;
				}, 500);
			}
		});
	}
}

export default Card;
