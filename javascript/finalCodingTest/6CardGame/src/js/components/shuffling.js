class Shuffling {
	constructor() {
		this.data = ["mura", "gary", "binky", "licat", "javadog"];
		this.parent = document.querySelector(".list-card");
	}

	setup() {
		this.shufflingCards();
	}

	shufflingCards() {
		let dataDouble = this.data.concat(this.data);
		while (dataDouble.length > 0) {
			const randomNum = Math.floor(Math.random() * dataDouble.length);
			this.generateCards(dataDouble[randomNum]);
			dataDouble.splice(randomNum, 1);
		}
	}

	generateCards(dataStr) {
		const elem = document.createElement("li");
		elem.classList.add(dataStr);
		elem.dataset.name = dataStr;
		this.parent.appendChild(elem);
	}
}
export default Shuffling;
