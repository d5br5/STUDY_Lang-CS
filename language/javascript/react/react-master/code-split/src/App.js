import { lazy, Suspense, useState } from "react";
import loadable from "@loadable/component";
// const SplitMe = lazy(() => import("./SplitMe"));
const SplitMe = loadable(() => import("./SplitMe"), {
	fallback: <div>loading...</div>,
});

function App() {
	const [visible, setVisible] = useState(false);
	const onClick = () => setVisible(true);
	const onMouseOver = () => {
		SplitMe.preload();
	};
	return (
		<div>
			<div>happy</div>
			<div onClick={onClick} onMouseOver={onMouseOver}>
				visible
			</div>
			{/* <Suspense fallback={<div>loading...</div>}> */}
			{visible && <SplitMe />}
			{/* </Suspense> */}
		</div>
	);
}

export default App;
