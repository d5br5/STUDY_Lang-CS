import store from "../../common/store";
import { useEffect, useReducer } from "react";
import { addTimeline } from "../state";
import TimelineList from "../component/TimelineList";
import { getNextTimeline } from "../../common/mockData";

export default function TimelineMain() {
	const [, forceUpdate] = useReducer((v) => v + 1, 0);
	useEffect(() => {
		let prevFriends = store.getState().timeline.timelines;
		const unsubscribe = store.subscribe(() => {
			const friends = store.getState().timeline.timelines;
			if (prevFriends !== friends) {
				forceUpdate();
			}
			prevFriends = friends;
		});

		return () => unsubscribe();
	}, []);
	function onAdd() {
		const timeline = getNextTimeline();
		store.dispatch(addTimeline(timeline));
	}
	console.log("TimelineMain render");
	const timelines = store.getState().timeline.timelines;
	return (
		<div>
			<button onClick={onAdd}>add timeline</button>
			<TimelineList timelines={timelines} />
		</div>
	);
}
