import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, RootState } from "./reducer";
import { Dispatch } from "redux";

let box: JSX.IntrinsicElements["div"] = <div></div>;

function App() {
	const store = useSelector((state: RootState) => state);
	const dispatch: Dispatch = useDispatch();
	let [user, setUser] = useState<string | number>("");
	return (
		<div className="App">
			{box}
			<Profile name="2" />
			<button onClick={() => dispatch(add())}></button>
		</div>
	);
}

function Profile({ name }: { name: string }): JSX.Element {
	return <div>profile</div>;
}

export default App;
