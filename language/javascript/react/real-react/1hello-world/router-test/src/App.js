import { useEffect, useState } from "react";

const Home = () => <h2>여기는 홈페이지입니다.</h2>;
const Page1 = () => <h2>page1</h2>;
const Page2 = () => <h2>page2</h2>;

function App() {
	const [pageName, setPageName] = useState("");
	useEffect(() => {
		window.onpopstate = function (e) {
			setPageName(e.state);
		};
	}, []);

	function onClick1() {
		const pageName = "page1";
		window.history.pushState(pageName, "", "/page1");
		setPageName(pageName);
	}

	function onClick2() {
		const pageName = "page2";
		window.history.pushState(pageName, "", "/page2");
		setPageName(pageName);
	}

	return (
		<div>
			<button onClick={onClick1}>page1</button>
			<button onClick={onClick2}>page2</button>
			{!pageName && <Home />}
			{pageName === "page1" && <Page1 />}
			{pageName === "page2" && <Page2 />}
		</div>
	);
}

export default App;
