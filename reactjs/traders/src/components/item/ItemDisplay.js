import {connect} from "react-redux";
import Item from "./Item";
import NoItem from "./NoItem";
import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
	margin: 30px auto;
`;

function ItemDisplay({state: {items, noResult, keyword}}) {
	return !noResult ? (
		<Container>
			{items?.map((item) => (
				<Item key={item.pid} item={item} />
			))}
		</Container>
	) : (
		<NoItem keyword={keyword} />
	);
}

function mapStateToProps(state) {
	return {state};
}

export default connect(mapStateToProps, null)(ItemDisplay);
