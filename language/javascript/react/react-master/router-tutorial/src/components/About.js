import { useLocation, useSearchParams } from "react-router-dom";

const About = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const location = useLocation();

	console.log(searchParams);
	console.log(setSearchParams);
	console.log(location);

	const detail = searchParams.get("detail");
	const mode = searchParams.get("mode");

	const onToggleDetail = () => {
		setSearchParams({ mode, detail: detail === "true" ? false : true });
	};

	const onIncreaseMode = () => {
		const nextMode = mode === null ? 1 : parseInt(mode) + 1;
		setSearchParams({ mode: nextMode, detail });
	};

	return (
		<div>
			<h1>소개</h1>
			<p>예제 프로젝트</p>
			<div>쿼리스트링 : {location.search}</div>
			<p>detail : {detail}</p>
			<p>mode : {mode}</p>
			<button onClick={onToggleDetail}>Toggle Detail</button>
			<button onClick={onIncreaseMode}>Mode++</button>
		</div>
	);
};

export default About;
