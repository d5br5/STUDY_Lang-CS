import {connect} from "react-redux";
import {searchItem, moveTop} from "../../asset/API";
import {actionCreator} from "../../asset/store";
import styled from "styled-components";

const Container = styled.div``;

const Btn = styled.button`
	width: 35px;
	height: 35px;
	margin: 0 7px;
	border-radius: 2px;
	font-weight: 700;
	cursor: ${(props) => (props.disabled ? "" : "pointer")};
	color: ${(props) => (props.disabled ? "white" : "gray")};
	border: ${(props) => (props.disabled ? "none" : "1px solid gray")};
	&:hover {
		background-color: ${(props) => !props.disabled && "rgba(255,80,88,0.8)"};
		color: ${(props) => !props.disabled && "white"};
		border: none;
	}
	transition: all ease 0.5s;
`;

const PageBtn = styled(Btn)`
	background-color: ${(props) =>
		props.disabled ? "rgb(255, 80, 88)" : "white"};
`;
const ChunkBtn = styled(Btn)`
	background-color: white;
`;

function PageRouter({state, onPage, onChunk}) {
	const {
		searched,
		page,
		pageChunk,
		totalPage,
		totalPageChunk,
		keyword,
		sort,
		noResult,
	} = state;

	const pageList = Array.from(
		{length: pageChunk === totalPageChunk - 1 ? totalPage % 10 : 10},
		(v, i) => pageChunk * 10 + i
	);

	if (!searched || noResult) return null;

	return (
		<Container>
			<ChunkBtn disabled={pageChunk === 0} onClick={movePrevChunk}>
				{"<"}
			</ChunkBtn>
			{pageList.map((p) => (
				<PageBtn key={p} disabled={page === p} onClick={() => moveToPage(p)}>
					{p + 1}
				</PageBtn>
			))}
			<ChunkBtn
				disabled={pageChunk === totalPageChunk - 1}
				onClick={moveNextChunk}
			>
				{">"}
			</ChunkBtn>
		</Container>
	);

	async function movePrevChunk() {
		onChunk(
			pageChunk - 1,
			await searchItem(keyword, sort, 10 * (pageChunk - 1))
		);
		moveTop();
	}

	async function moveNextChunk() {
		onChunk(
			pageChunk + 1,
			await searchItem(keyword, sort, 10 * (pageChunk + 1))
		);
		moveTop();
	}

	async function moveToPage(p) {
		onPage(p, await searchItem(keyword, sort, p));
		moveTop();
	}
}

function mapStateToProps(state) {
	return {state};
}

function mapDispatchToProps(dispatch) {
	return {
		onPage: (page, data) => dispatch(actionCreator.paging(page, data)),
		onChunk: (chunk, data) => dispatch(actionCreator.chunking(chunk, data)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(PageRouter);
