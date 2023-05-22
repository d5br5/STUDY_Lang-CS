import React, {
	useEffect,
	useState,
	useCallback,
	useRef,
	useMemo,
} from "react";
import Ball from "./components/Ball";

const getWinNumbers = (): number[] => {
	const candidate: number[] = Array(45)
		.fill(null)
		.map((v, i) => i + 1);
	const shuffle: number[] = [];
	while (candidate.length > 0) {
		shuffle.push(
			candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
		);
	}
	const bonusNumber: number = shuffle[shuffle.length - 1];
	const winNumbers: number[] = shuffle
		.slice(0, 6)
		.sort((a: number, b: number) => b - a);
	return [...winNumbers, bonusNumber];
};

const Lotto = () => {
	const lottoNumbers = useMemo(() => getWinNumbers(), []);
	const [winNumbers, setWinNumbers] = useState(lottoNumbers);
	const [winBalls, setWinBalls] = useState<number[]>([]);
	const [bonus, setBonus] = useState<number | null>(null);
	const [redo, setRedo] = useState(false);
	const timeouts = useRef<number[]>([]);

	const onClickRedo = useCallback(
		(e: React.MouseEvent<HTMLButtonElement>) => {
			setWinNumbers(getWinNumbers());
			setWinBalls([]);
			setBonus(null);
			setRedo(false);
			timeouts.current = [];
		},
		[winNumbers]
	);

	useEffect(() => {
		for (let i = 0; i < winNumbers.length - 1; i++) {
			timeouts.current[i] = window.setTimeout(() => {
				setWinBalls((prev) => [...prev, winNumbers[i]]);
			}, (i + 1) * 1000);
		}
		timeouts.current[6] = window.setTimeout(() => {
			setBonus(winNumbers[6]);
			setRedo(true);
		}, 7000);

		return () => {
			timeouts.current.forEach((v) => {
				clearTimeout(v);
			});
		};
	}, [timeouts.current]);

	return (
		<div>
			<div>당첨 숫자</div>
			<div id="결과창">
				{winBalls.map((v) => (
					<Ball key={v} number={v} />
				))}
			</div>
			<div>보너스!</div>
			{bonus && <Ball number={bonus} />}
			{redo && <button onClick={onClickRedo}>한 번 더!</button>}
		</div>
	);
};

export default Lotto;
