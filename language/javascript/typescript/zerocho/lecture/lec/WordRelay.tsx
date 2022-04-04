import React, { useState, useCallback, useRef } from "react";

const WordRelay = () => {
	const [word, setWord] = useState<string>("김도형");
	const [value, setValue] = useState<string>("");
	const [result, setResult] = useState<string>("");
	const inputEl = useRef<HTMLInputElement>(null);

	const onSubmitForm = useCallback(
		(e: React.FormEvent) => {
			e.preventDefault();
			const input = inputEl.current;
			if (word[word.length - 1] === value[0]) {
				setResult("딩동댕");
				setWord(value);
				setValue("");
				if (input) {
					input.focus();
				}
			} else {
				setResult("땡");
				setValue("");
				if (input) {
					input.focus();
				}
			}
		},
		[value, word]
	);
	const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.currentTarget.value);
	}, []);

	return (
		<div>
			<div>{word}</div>
			<form onSubmit={onSubmitForm}>
				<input ref={inputEl} value={value} onChange={onChange} />
				<button>입력!</button>
			</form>
			<div>{result}</div>
		</div>
	);
};

export default WordRelay;
