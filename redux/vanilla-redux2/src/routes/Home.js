import {useState} from "react";
import {connect} from "react-redux";
import ToDo from "../Components/ToDo";
import {actionCreators} from "../stores";

const Home = ({toDos, addToDo}) => {
	const [text, setText] = useState("");

	function onChange(e) {
		setText(e.target.value);
	}

	function onSubmit(e) {
		e.preventDefault();
		setText("");
		addToDo(text);
	}

	return (
		<>
			<h1>To Do</h1>
			<form onSubmit={onSubmit}>
				<input type="text" value={text} onChange={onChange} />
				<button>Add</button>
			</form>
			<ul>
				{toDos.map((a, i) => (
					<ToDo key={i} {...a} />
				))}
			</ul>
		</>
	);
};

function mapStateToProps(state, ownProps) {
	return {toDos: state};
}

function mapDispatchToProps(dispatch) {
	return {
		addToDo: (text) => dispatch(actionCreators.addToDo(text)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
