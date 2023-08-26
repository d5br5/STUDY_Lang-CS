import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { watchIncrement } from "./increment.saga";
import { all, fork } from "redux-saga/effects";

export interface CounterState {
	value: number;
}

const initialState: CounterState = {
	value: 0,
};

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.value += action.payload;
		},
		incrementSuccess: (state) => {
			state.value = 1000;
		},
		incrementFailure: (state) => {
			state.value = -400;
		},
	},
});

export function* counterSaga() {
	yield all([fork(watchIncrement)]);
}

export const {
	increment,
	decrement,
	incrementByAmount,
	incrementSuccess,
	incrementFailure,
} = counterSlice.actions;
export default counterSlice.reducer;
