import React, { useState, useRef, useEffect } from "react";

function App() {
	const [age, setAge] = useState(20);
	const prevAgeRef = useRef(20);

	useEffect(() => {
		prevAgeRef.current = age;
		console.log("@1");
	}, [age]);

	const prevAge = prevAgeRef.current;
	console.log("@2");

	return (
		<div>
			<p>age : {age}</p>
			<p>prev : {prevAge}</p>
			<button
				onClick={() => {
					const age = Math.floor(Math.random() * 50 + 1);
					setAge(age);
				}}
			>
				나이 변경
			</button>
		</div>
	);
}

export default App;
