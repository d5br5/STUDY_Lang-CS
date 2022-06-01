import { useRouter } from "next/router";

const MovieDetail = () => {
	const router = useRouter();
	console.log(router);
	return <div>detail</div>;
};

export default MovieDetail;
