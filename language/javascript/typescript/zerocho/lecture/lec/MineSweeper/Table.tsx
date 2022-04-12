import React from "react";
import { TableContext } from "./MineSearch";
import { useContext } from "react";
import Tr from "./Tr";

const Table = () => {
	const { tableData } = useContext(TableContext);
	return (
		<div>
			{tableData.map((tr, i) => (
				<Tr key={i} rowIndex={i} />
			))}
		</div>
	);
};

export default Table;
