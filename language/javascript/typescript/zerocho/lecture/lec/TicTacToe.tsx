import React, { useEffect, useCallback, useReducer, Reducer } from "react";
import Table from "./components/Table";

type Winner = "O" | "X";

interface ReducerState {
	winner: Winner | "";
	turn: Winner;
	tableData: string[][];
	recentCell: [number, number];
}

const initialState: ReducerState = {
	winner: "",
	turn: "O",
	tableData: [
		["", "", ""],
		["", "", ""],
		["", "", ""],
	],
	recentCell: [-1, -1],
};

export const SET_WINNER = "SET_WINNER" as const;
export const CLICK_CELL = "CLICK_CELL" as const;
export const CHANGE_TURN = "CHANGE_TURN" as const;
export const RESET_GAME = "RESET_GAME" as const;

interface SetWinnerAction {
	type: typeof SET_WINNER;
	winner: Winner;
}

const setWinner = (winner: Winner): SetWinnerAction => {
	return { type: SET_WINNER, winner };
};

interface ClickCellAction {
	type: typeof CLICK_CELL;
	row: number;
	cell: number;
}

const clickCell = (row: number, cell: number): ClickCellAction => {
	return { type: CLICK_CELL, row, cell };
};

interface ChangeTurnAction {
	type: typeof CHANGE_TURN;
}

interface ResetGame {
	type: typeof RESET_GAME;
}

type ReducerActions =
	| SetWinnerAction
	| ClickCellAction
	| ChangeTurnAction
	| ResetGame;

const reducer = (state: ReducerState, action: ReducerActions): ReducerState => {
	switch (action.type) {
		case SET_WINNER:
			return {
				...state,
				winner: action.winner,
			};
		case CLICK_CELL:
			const tableData = [...state.tableData];
			tableData[action.row] = [...tableData[action.row]];
			tableData[action.row][action.cell] = state.turn;
			return {
				...state,
				tableData,
				recentCell: [action.row, action.cell],
			};
		case CHANGE_TURN:
			return {
				...state,
				turn: state.turn === "O" ? "X" : "O",
			};
		case RESET_GAME:
			return {
				...initialState,
			};
		default:
			return state;
	}
};

const TicTacToe = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { tableData, turn, winner, recentCell } = initialState;

	const onClickTable = useCallback(() => {
		dispatch(setWinner("O"));
	}, []);
	return (
		<div>
			<Table onClick={onClickTable} tableData={tableData} dispatch={dispatch} />
			{winner && <div>{winner}님의 승리</div>}
		</div>
	);
};

export default TicTacToe;
