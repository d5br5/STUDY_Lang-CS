import produce from "immer";

const originalState = [
	{
		id: 1,
		todo: "전개 연산자와 불변성 유지",
		checked: true,
	},
	{ id: 2, todo: "Immer로 불변성 유지", checked: false },
];

const nextState = produce(originalState, (draft) => {
	const todo = draft.find((t) => t.id === 2);
	todo.checked = true;
	draft.push({
		id: 3,
		todo: "immer 적용",
		checked: false,
	});
	draft.splice(
		draft.findIndex((t) => t.id === 1),
		1
	);
});
