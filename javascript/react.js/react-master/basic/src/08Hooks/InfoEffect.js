import { useEffect, useState } from "react";

const Info = () => {
	useEffect(() => {
		console.log("effect");
		return () => {
			console.log("cleanup");
		};
	}, []);
	return <div>테스트입니다.</div>;
};

export default Info;
