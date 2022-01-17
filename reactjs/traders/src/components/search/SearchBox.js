import {connect} from "react-redux";
import {useState} from "react";
import {actionCreator} from "../../asset/store";
import * as constant from "../../asset/constant";
import {searchItem, autoComplete} from "../../asset/API";
import AutoKeyBox from "./AutoKeyBox";
import styled from "styled-components";

const Form = styled.form`
	position: relative;
	width: 400px;
	margin: 10px auto;
`;

const Input = styled.input`
	width: 350px;
	border: 2px solid rgb(247, 47, 51);
	padding: 10px 15px;
	&:focus {
		outline: none;
	}
`;

const Clear = styled.button`
	position: absolute;
	top: 10px;
	right: 50px;
	background-color: white;
	border: none;
	cursor: pointer;
`;

const Submit = styled.button`
	position: absolute;
	right: 15px;
	top: 9px;
	background-color: white;
	border: none;
	cursor: pointer;
`;

function SearchBox({onSearch}) {
	const [keyword, setKeyword] = useState("");
	const [timer, setTimer] = useState(null);
	const [autoKeyList, setAutoKeyList] = useState([]);

	return (
		<Form>
			<Input
				type="text"
				value={keyword}
				placeholder="검색어를 입력하세요"
				onBlur={hideAutoKeys}
				onFocus={retryAutoComplete}
				onChange={keywordUpdate}
			/>

			<Submit type="submit" onClick={onKeywordSearch}>
				<img src={constant.LOOK_IMG_SRC} alt="" />
			</Submit>
			<Clear onClick={keywordReset}>
				<img src={constant.CLEAR_IMG_SRC} width={13} alt="" />
			</Clear>
			<AutoKeyBox
				autoKeyList={autoKeyList}
				setKeyword={setKeyword}
				setAutoKeyList={setAutoKeyList}
			/>
		</Form>
	);

	async function keywordUpdate(e) {
		setKeyword(e.target.value);
		if (timer) clearTimeout(timer);
		setTimer(
			setTimeout(async function () {
				const {keywords} = await autoComplete(e.target.value);
				setAutoKeyList(keywords);
			}, 100)
		);
	}
	async function retryAutoComplete(e) {
		const {keywords} = await autoComplete(e.target.value);
		setAutoKeyList(keywords);
	}

	async function onKeywordSearch(e) {
		e.preventDefault();
		if (keyword.length === 0) return;
		onSearch(keyword, await searchItem(keyword, constant.DATE, 0));
		if (timer) clearTimeout(timer);
		setKeyword("");
		setAutoKeyList([]);
	}

	function hideAutoKeys() {
		setAutoKeyList([]);
	}

	function keywordReset(e) {
		e.preventDefault();
		setKeyword("");
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onSearch: (keyword, data) =>
			dispatch(actionCreator.searching(keyword, data)),
	};
}

export default connect(null, mapDispatchToProps)(SearchBox);
