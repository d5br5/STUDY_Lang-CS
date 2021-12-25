const starImageSourceMap = {
	empty: "./src/assets/images/icon_empty_star.png",
	half: "./src/assets/images/icon_half_star.png",
	full: "./src/assets/images/icon_star.png",
};

class StarPoint {
	constructor() {
		this.starContentElement = document.querySelector(".content-star");
		this.starBackgroundElement =
			this.starContentElement.querySelector(".star-background");
		this.starImages = this.starBackgroundElement.querySelectorAll("img");
		this.starPointResetButton =
			this.starContentElement.querySelector(".icon-remove-star");
		this.lockedStarPoint = false; // 별점이 고정되어 있는가.
	}

	setup() {
		this.bindEvents();
	}

	// 별점을 고정된 상태로 만든다.
	lockStarPoint() {
		this.lockedStarPoint = true;
	}

	// 별점 고정 상태를 해제한다.
	unlockStarPoint() {
		this.lockedStarPoint = false;
	}

	isLockedStarPoint() {
		return this.lockedStarPoint;
	}

	renderStarPointImages(payload = {}) {
		// 초기값 할당
		const {drawableLimitIndex = -1, isOverHalf = false} = payload;

		// NodeList !== Array -> call 을 통해서 호출 객체를 배열에서 nodeList로 재할당
		Array.prototype.forEach.call(this.starImages, (img, index) => {
			let source =
				index < drawableLimitIndex
					? starImageSourceMap.full
					: starImageSourceMap.empty;
			if (drawableLimitIndex === index)
				source = isOverHalf ? starImageSourceMap.full : starImageSourceMap.half;

			img.src = source;
		});
	}

	resetStarPointImages() {
		this.renderStarPointImages();
	}

	bindEvents() {
		this.starBackgroundElement.addEventListener("mousemove", (e) => {
			// 별점이 고정된 상태라면 이벤트 핸들링 중지
			if (this.isLockedStarPoint()) return;

			// offsetX : 타겟 요소에서의 마우스 포인터의 X축 위치 반환
			const {target, offsetX: currentUserPoint} = e;
			const {point} = target.dataset;
			const index = parseInt(point, 10) - 1;

			// 요소의 좌표와 크기에 대한 정보
			const [starImageClientRect] = target.getClientRects();
			const starImageWidth = starImageClientRect.width;
			const isOverHalf = starImageWidth / 2 < currentUserPoint;
			this.renderStarPointImages({
				drawableLimitIndex: index,
				isOverHalf,
			});
		});

		this.starBackgroundElement.addEventListener("mouseout", () => {
			!this.isLockedStarPoint() && this.resetStarPointImages();
		});

		this.starBackgroundElement.addEventListener("click", () => {
			if (!this.isLockedStarPoint()) {
				this.lockStarPoint();
			} else {
				this.unlockStarPoint();
			}
		});

		this.starPointResetButton.addEventListener("click", () => {
			this.unlockStarPoint();
			this.resetStarPointImages();
		});
	}
}

export default StarPoint;
