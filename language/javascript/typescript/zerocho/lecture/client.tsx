import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

import MineSearch from "./lec/MineSweeper/MineSearch";

ReactDOM.render(
	<Provider store={store}>
		<MineSearch />
	</Provider>,
	document.querySelector("#root")
);
