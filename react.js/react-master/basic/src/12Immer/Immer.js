import { useRef, useCallback, useState } from "react";
import produce from "immer";

const Immer = () => {
	const nextId = useRef(1);
	const [form, setForm] = useState({ name: "", username: "" });
	const [data, setData] = useState({ array: [], uselessValue: null });

	const onChange = useCallback((e) => {
		const { name, value } = e.target;
		setForm(produce((draft) => (draft[name] = value)));
	}, []);

	const onSubmit = useCallback(
		(e) => {
			e.preventDefault();
			const info = {
				id: nextId.current,
				name: form.name,
				username: form.username,
			};

			setData(produce((draft) => draft.array.push(info)));

			setForm({
				name: "",
				username: "",
			});
			nextId.current += 1;
		},
		[form.name, form.username]
	);

	const onRemove = useCallback((id) => {
		setData(
			produce((draft) =>
				draft.array.splice(
					draft.array.findIndex((info) => info.id === id),
					1
				)
			)
		);
	}, []);

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					type="text"
					name="username"
					placeholder="아이디"
					value={form.username}
					onChange={onChange}
				/>
				<input type="text" name="name" placeholder="이름" value={form.name} onChange={onChange} />
				<button type="submit"> 등록</button>
			</form>
			<div>
				<ul>
					{data.array.map((a) => (
						<li key={a.id} onClick={() => onRemove(a.id)}>
							{a.username} ({a.name})
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Immer;
