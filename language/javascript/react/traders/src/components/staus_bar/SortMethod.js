import {connect} from "react-redux";
import {actionCreator} from "../../asset/store";
import {searchItem} from "../../asset/API";
import * as constant from "../../asset/constant";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	line-height: 10px;
	color: rgb(213, 213, 213);
`;

const SortBtn = styled.button`
	color: ${(props) => (props.disabled ? "red" : "gray")};
	cursor: pointer;
	background-color: white;
	border: none;
`;

function SortMethod({state, onSort}) {
	const {sort, keyword, searched} = state;
	if (!searched) return null;
	return (
		<Container>
			<SortBtn disabled={sort === constant.DATE} onClick={sortNew}>
				최신순
			</SortBtn>
			|
			<SortBtn disabled={sort === constant.PRICE_ASC} onClick={sortAsc}>
				저가순
			</SortBtn>
			|
			<SortBtn disabled={sort === constant.PRICE_DESC} onClick={sortDesc}>
				고가순
			</SortBtn>
		</Container>
	);

	async function sortNew() {
		onSort(constant.DATE, await searchItem(keyword, constant.DATE, 0));
	}

	async function sortAsc() {
		onSort(
			constant.PRICE_ASC,
			await searchItem(keyword, constant.PRICE_ASC, 0)
		);
	}

	async function sortDesc() {
		onSort(
			constant.PRICE_DESC,
			await searchItem(keyword, constant.PRICE_DESC, 0)
		);
	}
}
function mapStateToProps(state) {
	return {state};
}

function mapDispatchToProps(dispatch) {
	return {
		onSort: (order, data) => dispatch(actionCreator.sorting(order, data)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SortMethod);
