import { PayloadAction } from "@reduxjs/toolkit";
import { call, delay, put, takeLatest } from "redux-saga/effects";
import {
	CounterState,
	increment,
	incrementFailure,
	incrementSuccess,
} from "./store";

function* incrementSaga(action: PayloadAction<CounterState>) {
	try {
		yield call(increment);
		yield delay(1000);
		yield put({
			type: incrementSuccess,
		});
	} catch (err) {
		yield put({ type: incrementFailure });
	}
}

export function* watchIncrement() {
	yield takeLatest(increment.type, incrementSaga);
}
