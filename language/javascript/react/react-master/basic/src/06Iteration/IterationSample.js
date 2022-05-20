const IterationSample = () => {
	const names = ["눈사람", "얼음", "눈", "바람"];
	return (
		<ul>
			{names.map((a, i) => (
				<li key={i}>{a}</li>
			))}
		</ul>
	);
};

export default IterationSample;
