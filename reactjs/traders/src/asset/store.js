import {createStore} from "redux";
import * as constant from "./constant";

const originalState = {
	keyword: "",
	page: 0,
	totalPage: 0,
	pageChunk: 0,
	totalPageChunk: 0,
	sort: constant.DATE,
	items: [],
	searched: false,
	noResult: false,
	totalItem: 0,
};

const reducer = (state = originalState, action) => {
	switch (action.type) {
		case constant.PAGE:
			const {
				payload: {page, data: pagingData},
			} = action;
			return {...state, page, items: pagingData.list};
		case constant.SEARCH:
			const {
				payload: {keyword, data: searchData},
			} = action;
			const pageLength = Math.ceil(searchData.num_found / 16);
			console.log(searchData);
			return {
				...state,
				keyword,
				items: searchData.list,
				totalPage: pageLength,
				pageChunk: 0,
				totalPageChunk: Math.ceil(pageLength / 10),
				searched: true,
				noResult: pageLength <= 0,
				page: 0,
				totalItem: searchData.num_found,
			};
		case constant.SORT:
			const {
				payload: {order, data: sortData},
			} = action;
			return {
				...state,
				page: 0,
				pageChunk: 0,
				items: sortData.list,
				sort: order,
			};
		case constant.CHUNK:
			const {
				payload: {chunk, data: chunkData},
			} = action;
			return {
				...state,
				page: chunk * 10,
				items: chunkData.list,
				pageChunk: chunk,
			};
		default:
			return state;
	}
};

const searching = (keyword, data) => ({
	type: constant.SEARCH,
	payload: {keyword, data},
});

const paging = (page, data) => ({
	type: constant.PAGE,
	payload: {page, data},
});

const sorting = (order, data) => ({
	type: constant.SORT,
	payload: {order, data},
});

const chunking = (chunk, data) => ({
	type: constant.CHUNK,
	payload: {chunk, data},
});

const store = createStore(reducer);

export const actionCreator = {searching, paging, sorting, chunking};
export default store;
