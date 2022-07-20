import { actions } from "../state";
import TimelineList from "../component/TimelineList";
import { getNextTimeline } from "../../common/mockData";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function TimelineMain() {
	const dispatch = useDispatch();
	const timelines = useSelector((state) => state.timeline.timelines);
	const isLoading = useSelector((state) => state.timeline.isLoading);
	const error = useSelector((state) => state.timeline.error);
	const text = useSelector((state) => state.timeline.text);
	const [currentText, setCurrentText] = useState("");
	function onChangeText(e) {
		const text = e.target.value;
		dispatch(actions.trySetText(text));
		setCurrentText(text);
	}
	function onAdd() {
		const timeline = getNextTimeline();
		dispatch(actions.addTimeline(timeline));
	}
	function onLike(e) {
		const id = Number(e.target.dataset.id);
		const timeline = timelines.find((item) => item.id === id);
		dispatch(actions.requestLike(timeline));
	}

	return (
		<div>
			<button onClick={onAdd}>add timeline</button>
			<TimelineList timelines={timelines} onLike={onLike} />
			{!!isLoading && <p>전송 중...</p>}
			{!!error && <p>에러 발생 : {error}</p>}
			<input type={"text"} value={currentText} onChange={onChangeText} />
			{!!text && <p>{text}</p>}
		</div>
	);
}
