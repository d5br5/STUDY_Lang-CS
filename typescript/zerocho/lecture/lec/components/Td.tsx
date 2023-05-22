import React, { Dispatch, FC, useCallback } from "react";
import { CLICK_CELL } from "../TicTacToe";
import { clickCell } from "../TicTacToe";

interface Props {
	dispatch: Dispatch<any>;
	rowIndex: number;
	cellIndex: number;
	cellData: string;
	children: string;
}

const Td: FC<Props> = ({ rowIndex, cellIndex, cellData, dispatch }) => {
	const onClickTd = useCallback(() => {
		if (cellData) {
			return;
		}
		dispatch(clickCell(rowIndex, cellIndex));
	}, [cellData]);
	return <td onClick={onClickTd}>{cellData}</td>;
};

export default Td;
