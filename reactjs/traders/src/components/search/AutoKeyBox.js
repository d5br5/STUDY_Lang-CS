import {connect} from "react-redux";
import {searchItem} from "../../asset/API";
import * as constant from "../../asset/constant";
import {actionCreator} from "../../asset/store";
import styled from "styled-components";

const AutoKeys = styled.div`
	width: 382px;
	display: ${(props) => (props.disabled ? "none" : "flex")};
	flex-direction: column;
	position: absolute;
	top: 50px;
	left: 8px;
	z-index: 1000;
	background-color: white;
	border: 1px gray solid;
	padding: 10px 0;
`;

const Key = styled.div`
	width: 100%;
	padding: 7px 25px;
	color: rgb(247, 47, 51);
	cursor: pointer;
	font-size: 14px;
	text-align: left;
`;

function AutoKeyBox({autoKeyList, setKeyword, onSearch, setAutoKeyList}) {
	return (
		<AutoKeys disabled={autoKeyList.length <= 0}>
			{autoKeyList.map((key, i) => (
				<Key
					key={i}
					onMouseDown={async (e) => {
						e.preventDefault();
						setKeyword("");
						onSearch(key.name, await searchItem(key.name, constant.DATE, 0));
						setAutoKeyList([]);
					}}
				>
					{key.name}
				</Key>
			))}
		</AutoKeys>
	);
}

function mapStateToProps(state) {
	return {state};
}

function mapDispatchToProps(dispatch) {
	return {
		onSearch: (keyword, data) =>
			dispatch(actionCreator.searching(keyword, data)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(AutoKeyBox);
