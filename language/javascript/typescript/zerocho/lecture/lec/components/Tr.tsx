import React, { Dispatch, FC, useMemo } from "react";
import Td from "./Td";

interface Props {
	dispatch: Dispatch<any>;
	rowIndex: number;
	rowData: string[];
}

const Tr: FC<Props> = ({ dispatch, rowIndex, rowData }) => {
	return (
		<tr>
			{Array(rowData.length)
				.fill(null)
				.map((td, i) =>
					useMemo(
						() => (
							<Td
								key={i}
								dispatch={dispatch}
								rowIndex={rowIndex}
								cellIndex={i}
								cellData={rowData[i]}
							>
								{""}
							</Td>
						),
						[rowData[i]]
					)
				)}
		</tr>
	);
};

export default Tr;
