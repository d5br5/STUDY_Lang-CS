import {
	createStore,
	MiddlewareAPI,
	Dispatch,
	AnyAction,
	compose,
	applyMiddleware,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "./reducers";

const initialState = {
	user: {
		isLoggingIn: false,
		data: null,
	},
	posts: [],
};

const firstMiddleware =
	(store: MiddlewareAPI) =>
	(next: Dispatch<AnyAction>) =>
	(action: AnyAction) => {
		console.log("logging", action);
		next(action);
	};

const thunkMiddleware =
	(store: MiddlewareAPI) => (next: Dispatch<any>) => (action: any) => {
		if (typeof action === "function") {
			return action(store.dispatch, store.getState);
		}
		return next(action);
	};

// const enhancer = compose(applyMiddleware(firstMiddleware));

const enhancer =
	process.env.NODE_ENV === "production"
		? compose(applyMiddleware(firstMiddleware, thunkMiddleware))
		: composeWithDevTools(applyMiddleware(firstMiddleware, thunkMiddleware));
const store = createStore(reducer, initialState, enhancer);

export default store;
