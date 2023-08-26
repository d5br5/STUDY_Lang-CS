import { ChangeEvent, useState } from "react";
import Happy from "../components/Happy";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { increment, incrementByAmount } from "../modules/counter/store";
const Intro = () => {
	const [num, setNum] = useState(1);
	const [targetValue, setTargetValue] = useState("");
	const count = useSelector((state: RootState) => state.counter.value);
	const dispatch = useDispatch();
	return (
		<div>
			<div>Intro</div>
			<Happy />
			<div>{num}</div>
			<div onClick={() => setNum((num) => num + 1)}>click</div>
			<div>count : {count}</div>
			<button onClick={() => dispatch(increment())}>increase</button>
			<input
				type="text"
				value={targetValue}
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setTargetValue(e.target.value)
				}
			/>
			<button
				onClick={() => {
					dispatch(incrementByAmount(Number(targetValue)));
					setTargetValue("");
				}}
			>
				increase by this
			</button>
		</div>
	);
};
export default Intro;
