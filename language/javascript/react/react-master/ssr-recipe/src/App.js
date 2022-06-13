import { Route } from "react-router-dom";
import Menu from "./components/Menu";
import RedPage from "./pages/RedPage";
import BluePage from "./pages/BluePage";

function App() {
	return (
		<div>
			<Menu />
			<hr />
			<Route path="/red" element={<RedPage />} />
			<Route path="/blue" element={<BluePage />} />
		</div>
	);
}

export default App;
