import {connect} from "react-redux";
import styled from "styled-components";
import logo from "../img/logo.png";

const Container = styled.div`
	width: 300px;
	margin: 270px auto 0;
`;

const Logo = styled.img`
	width: 40%;
`;

const Title = styled.div`
	font-weight: 700;
	font-size: 30px;
	margin: 15px 0 10px;
`;

const Desc = styled.div``;

function Welcome({state: {searched}}) {
	return (
		!searched && (
			<Container>
				<Logo src={logo} />
				<Title>Welcome</Title>
				<Desc>원하는 상품을 검색해보세요</Desc>
			</Container>
		)
	);
}

function mapStateToProps(state, _) {
	return {state};
}

export default connect(mapStateToProps, null)(Welcome);
