import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const initialValue: { count: number; user: string } = { count: 0, user: "kim" };

const counterSlice = createSlice({
	name: "counter",
	initialState: initialValue,
	reducers: {
		add(state) {
			state.count += 1;
		},
		minus(state) {
			state.count -= 1;
		},
		myadd(state, action: PayloadAction<number>) {
			state.count += action.payload;
		},
	},
});

let store = configureStore({
	reducer: {
		counter1: counterSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export const { add, minus, myadd } = counterSlice.actions;
