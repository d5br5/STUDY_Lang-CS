import React from "react";
import {connect} from "react-redux";
import {useState} from "react";
import {actionCreator} from "../store";

function AddNumber({onBtnClick, state}) {
	const [size, setSize] = useState(0);

	return (
		<div>
			<h1>Add Number</h1>
			<input
				type="button"
				value="+"
				onClick={() => {
					console.log(size);
					onBtnClick(size);
				}}
			/>
			<input
				type="text"
				value={size}
				onChange={(e) => setSize(parseInt(e.target.value))}
			/>
		</div>
	);
}

function mapStateToProps(state, ownProps) {
	return {state};
}

function mapDispatchToProps(dispatch, ownProps) {
	return {onBtnClick: (size) => dispatch(actionCreator.addValue(size))};
}
export default connect(mapStateToProps, mapDispatchToProps)(AddNumber);
