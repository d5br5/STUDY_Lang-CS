import React, { useState, useRef, useEffect } from "react";

interface RSPCoords {
	rock: string;
	sci: string;
	paper: string;
}

const rspCoords = {
	rock: "0",
	sci: "-142px",
	paper: "-284px",
} as const;

const scores = {
	sci: 1,
	rock: 0,
	paper: -1,
} as const;

type ImgCoord = typeof rspCoords[keyof typeof rspCoords];
type gameCard = keyof typeof rspCoords;

const computerChoice = (imgCoords: ImgCoord) => {
	return (Object.keys(rspCoords) as gameCard[]).find((k) => {
		return rspCoords[k] === imgCoords;
	})!;
};

const RSP = () => {
	const [result, setResult] = useState("");
	const [imgCoord, setImgCoord] = useState<ImgCoord>(rspCoords.rock);
	const [score, setScore] = useState(0);
	const interval = useRef<number>();

	const changeHand = () => {
		if (imgCoord === rspCoords.rock) {
			setImgCoord(rspCoords.sci);
		} else if (imgCoord === rspCoords.sci) {
			setImgCoord(rspCoords.paper);
		} else if (imgCoord === rspCoords.paper) {
			setImgCoord(rspCoords.rock);
		}
	};

	const onClickBtn =
		(choice: keyof typeof rspCoords) =>
		(e: React.MouseEvent<HTMLButtonElement>) => {
			clearInterval(interval.current);
			const myScore = scores[choice];
			const cpuScore = scores[computerChoice(imgCoord)];
			const diff = myScore - cpuScore;

			if (diff === 0) {
				setResult("비겼습니다.");
			} else if ([-1, 2].includes(diff)) {
				setResult("이겼습니다.");
				setScore((prev) => prev + 1);
			} else {
				setResult("졌습니다.");
				setScore((prev) => prev - 1);
			}
			setTimeout(() => {
				interval.current = window.setInterval(changeHand, 100);
			}, 1000);
		};

	useEffect(() => {
		interval.current = window.setInterval(changeHand, 100);
		return () => {
			clearInterval(interval.current);
		};
	}, []);

	return (
		<div>
			<div
				id="computer"
				style={{
					background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`,
				}}
			/>
			<div>
				<button id="rock" className="btn" onClick={onClickBtn("rock")}>
					바위
				</button>
				<button id="scissor" className="btn" onClick={onClickBtn("sci")}>
					가위
				</button>
				<button id="paper" className="btn" onClick={onClickBtn("paper")}>
					보
				</button>
			</div>
			<div>{result}</div>
			<div>현재 {score}점</div>
		</div>
	);
};

export default RSP;
