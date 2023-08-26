import React from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import Intro from "./pages/Intro";

const App = () => (
	<BrowserRouter>
		<div>
			<Link to={"/"}>Home</Link>
			<Link to={"/intro"}>Intro</Link>
		</div>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/intro" element={<Intro />} />
		</Routes>
	</BrowserRouter>
);

export default App;
