(() => {
	const carouselUI = document.querySelector(".carousel-list");
	const imageInput = document.querySelector("#image-upload-input");
	const prevButton = document.querySelector(".prev-btn");
	const nextButton = document.querySelector(".next-btn");

	function moveNext() {
		const items = document.querySelectorAll(".carousel-item");
		if (items.length < 1) return;

		const curr = document.querySelector(".now");
		const next = curr.nextElementSibling;
		carouselUI.appendChild(curr);
		curr.classList.remove("now");
		next.classList.add("now");
		changeTransform();
	}

	function movePrev() {
		const items = document.querySelectorAll(".carousel-item");
		if (items.length < 1) return;

		const curr = document.querySelector(".now");
		const last = carouselUI.lastElementChild;

		carouselUI.insertBefore(last, curr);
		curr.classList.remove("now");
		last.classList.add("now");
		changeTransform();
	}

	function createTag(url) {
		const list = document.createElement("li");
		const img = document.createElement("img");
		list.classList.add("carousel-item");
		img.src = url;
		list.appendChild(img);

		const items = document.querySelectorAll(".carousel-item");
		items.forEach((item) => {
			item.classList.remove("now");
		});
		list.classList.add("now");

		return list;
	}

	function uploadImg(value) {
		const items = document.querySelectorAll(".carousel-item");
		if (!value.files) return;

		const reader = new FileReader();
		reader.onload = (e) => {
			const imgUrl = e.target.result;
			carouselUI.insertBefore(createTag(imgUrl), items[0]);
			changeTransform();
		};
		reader.readAsDataURL(value.files[0]);
	}

	function changeTransform() {
		const items = document.querySelectorAll(".carousel-item");
		items.forEach((item, index) => {
			let degree = 360 / items.length;
			if (items.length < 1) return;
			if (index === 0) {
				item.style.transform = "rotateY(0deg) translateZ(250px)";
			} else {
				item.style.transform = `rotateY(${
					degree * index
				}deg) translateZ(250px) rotateY(-${degree * index}deg)`;
			}

			if (items.length >= 5) {
				if (index === 0) {
					item.style.transform = "rotateY(0deg) translateZ(250px)";
				} else if (index === 1) {
					item.style.transform =
						"rotateY(72deg) translateZ(250px) rotateY(-72deg)";
				} else if (index === 2) {
					item.style.transform =
						"rotateY(144deg) translateZ(250px) rotateY(-144deg) translateX(400px)";
				} else if (index === items.length - 2) {
					item.style.transform =
						"rotateY(216deg) translateZ(250px) rotateY(-216deg) translateX(-400px)";
				} else if (index === items.length - 1) {
					item.style.transform =
						"rotateY(288deg) translateZ(250px) rotateY(-288deg)";
				} else {
					item.style.transform = `rotateY(${
						degree * index
					}deg) translateZ(250px) rotateY(-${degree * index}deg)`;
				}
			}
		});
	}

	nextButton.addEventListener("click", moveNext);
	prevButton.addEventListener("click", movePrev);
	imageInput.addEventListener("change", (e) => {
		uploadImg(e.target);
	});
	window.onload = () => {
		changeTransform();
	};
})();
