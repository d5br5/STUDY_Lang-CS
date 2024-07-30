import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Profile from "./components/Profile";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Layout from "./components/Layout";

function App() {
	return (
		<>
			<Menu />
			<Routes>
				<Route element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/profile/:username" element={<Profile />} />
					<Route path="/articles" element={<Articles />}>
						<Route path=":id" element={<Article />} />
					</Route>
				</Route>
				<Route path="*" element={<div>Not Fount</div>} />
			</Routes>
		</>
	);
}

export default App;
