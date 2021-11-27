import {createStore} from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
	// if (action.type === "ADD") {
	// 	return count + 1;
	// } else if (action.type === "MINUS") {
	// 	return count - 1;
	// } else {
	// 	return count;
	// }
	switch (action.type) {
		case "ADD":
			return count + 1;
		case "MINUS":
			return count - 1;
		default:
			return count;
	}
};

const countStore = createStore(countModifier);

add.addEventListener("click", () => countStore.dispatch({type: "ADD"}));

minus.addEventListener("click", () => countStore.dispatch({type: "MINUS"}));

const onChange = () => {
	number.innerText = countStore.getState();
};

countStore.subscribe(onChange);
