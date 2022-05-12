import React, { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
	render() {
		const { name } = this.props;
		return <div>안녕하세요, 제 이름은 {name}입니다.</div>;
	}
}

MyComponent.defaultProps = {
	name: "기본 이름",
};

MyComponent.propTypes = {
	name: PropTypes.string,
};

export default MyComponent;
