import { useState } from "react";

const EventPractice = () => {
	const [form, setForm] = useState({
		username: "",
		message: "",
	});

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
		console.log(e);
	};

	return (
		<div>
			<h1>이벤트 연습</h1>
			<input type="text" onChange={handleChange} name="username" />
			<input type="text" onChange={handleChange} name="message" />

			<div>username : {form.username}</div>
			<div>message : {form.message}</div>
		</div>
	);
};

export default EventPractice;
