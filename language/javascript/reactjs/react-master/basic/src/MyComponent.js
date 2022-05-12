import PropTypes from "prop-types";

const MyComponent = ({ name = "basic", children }) => {
	return (
		<div>
			나의 새롭고 멋진 컴포넌트 {name} <div>{children}</div>
		</div>
	);
};

MyComponent.propTypes = {
	name: PropTypes.string.isRequired,
};

export default MyComponent;
