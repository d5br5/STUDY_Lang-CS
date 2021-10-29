import {connect} from "react-redux";

function DisplayNumber({value}) {
	return (
		<div>
			<h1>Display Number</h1>
			<input type="text" value={value} readOnly />
		</div>
	);
}

function mapStateToProps(state, ownProps) {
	const {value} = state;
	return {value};
}

export default connect(mapStateToProps)(DisplayNumber);
