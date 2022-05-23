import TodoListItem from "./TodoListItem";
import "./TodoList.scss";

const TodoList = ({ todos, onRemove, onToggle }) => {
	return (
		<div className="TodoList">
			{todos.map((a) => (
				<TodoListItem
					key={a.id}
					todo={a}
					onRemove={onRemove}
					onToggle={onToggle}
				/>
			))}
		</div>
	);
};

export default TodoList;
