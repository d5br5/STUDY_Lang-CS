import ItemDisplay from "./item/ItemDisplay";
import PageRouter from "./page_route/PageRouter";
import SearchBox from "./search/SearchBox";
import StatusBar from "./staus_bar/StatusBar";
import Welcome from "./Welcome";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 1000px;
	margin: 30px auto;
	text-align: center;
`;

function PaintFactory() {
	return (
		<Container>
			<SearchBox />
			<Welcome />
			<StatusBar />
			<ItemDisplay />
			<PageRouter />
		</Container>
	);
}

export default PaintFactory;
