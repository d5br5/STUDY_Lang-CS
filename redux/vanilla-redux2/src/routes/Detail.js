import React from "react";
import {connect} from "react-redux";
import {useParams} from "react-router";
import {Link} from "react-router-dom";

const Detail = ({toDos}) => {
	const {id} = useParams();

	const toDo = toDos.find((a) => a.id === parseInt(id));

	return (
		<>
			<h1>{toDo?.text}</h1>
			<h2>createdAt: {toDo?.id}</h2>
			<Link to="/">
				<button>go home</button>
			</Link>
		</>
	);
};

function mapStateToProps(state, ownProps) {
	return {toDos: state};
}

export default connect(mapStateToProps)(Detail);
