import React, { useState, useRef, useCallback } from "react";
import Try from "./Try";
import { TryInfo } from "./types";

const getNumbers = (): number[] => {
	const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const array = [];
	for (let i = 0; i < 4; i++) {
		const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
		array.push(chosen);
	}
	return array;
};

const NumberBaseball = () => {
	const [answer, setAnswer] = useState(getNumbers());
	const [result, setResult] = useState("");
	const [value, setValue] = useState<string>("");
	const [tries, setTries] = useState<TryInfo[]>([]);
	const inputEl = useRef<HTMLInputElement>(null);

	const onSubmitForm = useCallback(
		(e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			const input = inputEl.current;
			if (value === answer.join("")) {
				setTries([...tries, { try: value, result: "home run!" }]);
				setResult("Home Run!");
				alert(`게임을 다시 시작합니다. 정답은 ${answer.join("")}이었습니다.`);
				setValue("");
				setAnswer(getNumbers());
				setTries([]);
				if (input) {
					input.focus();
				}
			} else {
				const answerArray = value.split("").map((v) => parseInt(v));
				let strike = 0;
				let ball = 0;
				for (let i = 0; i < 4; i++) {
					if (answerArray[i] === answer[i]) {
						strike++;
					} else if (answer.includes(answerArray[i])) {
						ball++;
					}
				}
				setTries([
					...tries,
					{ try: value, result: `${strike} strike ${ball} ball` },
				]);
				setValue("");
				if (input) {
					input.focus();
				}
			}
		},
		[tries, value, answer]
	);

	const onChangeForm = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	}, []);

	return (
		<div>
			<h1>{result}</h1>
			<form onSubmit={onSubmitForm}>
				<input ref={inputEl} value={value} onChange={onChangeForm} />
				<button>입력</button>
			</form>
			<div>시도 : {tries.length}</div>
			<ul>
				{tries.map((v, i) => (
					<Try key={`${i + 1}차 시도 : ${v.try}`} tryInfo={v} />
				))}
			</ul>
		</div>
	);
};

export default NumberBaseball;
