import type {
	GetServerSideProps,
	InferGetServerSidePropsType,
	NextPage,
} from "next";
import Head from "next/head";
import Seo from "../components/Seo";
import axios from "axios";
import { useRouter } from "next/router";

const Home: NextPage = ({
	results,
}: InferGetServerSidePropsType<GetServerSideProps>) => {
	const router = useRouter();
	const onClick = (id: number) => {
		router.push(
			{
				pathname: `/movies/${id}`,
				query: {
					id,
					title: "potato",
				},
			},
			`/movies/${id}`
		);
	};
	return (
		<div>
			<Head>
				<Seo title={"Home"} />
			</Head>
			<div>
				{results?.map((a: { title: string; id: number }) => (
					<div key={a.id} onClick={() => onClick(a.id)}>
						{a.title}
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;

export async function getServerSideProps({}: GetServerSideProps) {
	const {
		data: { results },
	} = await axios.get("http://localhost:3000/api/movies");
	return { props: { results } };
}
