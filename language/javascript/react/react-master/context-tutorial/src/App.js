import ColorBox from "./components/ColorBox";
import SelectColors from "./components/SelectColors";
import { ColorProvider } from "./context/color";

function App() {
	return (
		<ColorProvider>
			<ColorBox />
			<SelectColors />
		</ColorProvider>
	);
}

export default App;
