import {connect} from "react-redux";
import {numCommas} from "../../asset/API";
import styled from "styled-components";

const Container = styled.div`
	padding-left: 5px;
`;

const Keyword = styled.span`
	font-weight: 700;
	color: red;
	margin-right: 1px;
`;

const Count = styled.span`
	color: gray;
`;

function SearchResult({state: {keyword, searched, totalItem}}) {
	return (
		searched && (
			<Container>
				<Keyword>{keyword}</Keyword>의 검색결과{" "}
				<Count>{numCommas(totalItem)}개</Count>
			</Container>
		)
	);
}

function mapStateToProps(state) {
	return {state};
}

export default connect(mapStateToProps, null)(SearchResult);
