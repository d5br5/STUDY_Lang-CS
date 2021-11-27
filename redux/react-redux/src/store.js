import {createStore} from "redux";

const originState = {value: 0};

const ADD = "ADD";

const reducer = (state = originState, action) => {
	switch (action.type) {
		case ADD:
			return {...state, value: state.value + action.value};
		default:
			return state;
	}
};

const addValue = (value) => ({type: ADD, value});

const store = createStore(reducer);

export const actionCreator = {addValue};

export default store;
