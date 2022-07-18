import React from "react";
import ReactDOM from "react-dom/client";

import { createStore, combineReducers } from "redux";
import timelineReducer, {
	addTimeline,
	removeTimeline,
	editTimeline,
	increaseNextPage,
} from "./timeline/state";
import friendReducer, { addFriend, removeFriend, editFriend } from "./friend/state";
import FriendMain from "./friend/container/FriendMain";
import TimelineMain from "./timeline/container/TimelineMain";

const reducer = combineReducers({ timeline: timelineReducer, friend: friendReducer });
const store = createStore(reducer);
store.subscribe(() => {
	const state = store.getState();
	console.log(state);
});

store.dispatch(addTimeline({ id: 1, desc: "good coding" }));
store.dispatch(addTimeline({ id: 2, desc: "redux good" }));
store.dispatch(increaseNextPage());
store.dispatch(editTimeline({ id: 2, desc: "redux fuck" }));
store.dispatch(removeTimeline({ id: 1, desc: "good coding" }));

store.dispatch(addFriend({ id: 1, name: "IU" }));
store.dispatch(addFriend({ id: 2, name: "Sonny" }));
store.dispatch(editFriend({ id: 2, name: "suzi" }));
store.dispatch(removeFriend({ id: 1, name: "IU" }));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<div>
		<FriendMain />
		<TimelineMain />
	</div>
);
