import { useState, useMemo, useCallback, useRef } from "react";

const getAverage = (numbers) => {
	console.log("평균값 계산 중...");
	if (numbers.length === 0) return 0;
	const sum = numbers.reduce((a, b) => a + b);
	return sum / numbers.length;
};

const Average = () => {
	const [list, setList] = useState([]);
	const [number, setNumber] = useState("");

	const onChange = useCallback((e) => {
		setNumber(e.target.value);
	}, []);

	const onInsert = useCallback(
		(e) => {
			setList([...list, parseInt(number)]);
			setNumber("");
			inputEl.current.focus();
		},
		[number, list]
	);
	const inputEl = useRef(null);
	const avg = useMemo(() => getAverage(list), [list]);

	return (
		<div>
			<input type="text" value={number} onChange={onChange} ref={inputEl} />
			<button onClick={onInsert}>등록</button>
			<ul>
				{list.map((v, i) => (
					<li key={i}>{v}</li>
				))}
			</ul>
			<div>
				<b>평균값 : </b> {avg}
			</div>
		</div>
	);
};

export default Average;
