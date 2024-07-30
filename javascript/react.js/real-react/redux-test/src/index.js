import React from "react";
import ReactDOM from "react-dom/client";
import FriendMain from "./friend/container/FriendMain";
import TimelineMain from "./timeline/container/TimelineMain";

import { Provider } from "react-redux";
import store from "./common/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<div>
			<FriendMain ageLimit={30} />
			<FriendMain ageLimit={15} />
			<TimelineMain />
		</div>
	</Provider>
);
