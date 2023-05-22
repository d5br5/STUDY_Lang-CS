import React from "react";
import NumberBaseball from "./ETC/NumberBaseball";
import GuGuDan from "./ETC/GuGuDan";
import RSP from "./ETC/RSP";
import TicTacToe from "./ETC/TicTacToe";
import WordRelay from "./ETC/WordRelay";
import ResponseCheck from "./ETC/ResponseCheck";
import Lotto from "./ETC/Lotto";
import { useLocation, useNavigate, Routes, Route } from "react-router";

const GameMatcher = () => {
	const location = useLocation();
	const navigate = useNavigate();
	let urlSearchParams = new URLSearchParams(location.search.slice(1));

	return (
		<Routes>
			<Route path="number-baseball" element={<NumberBaseball />}></Route>
		</Routes>
	);
};

export default GameMatcher;
