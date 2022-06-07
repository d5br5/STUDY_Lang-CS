import styled from "styled-components";
import NewsItem from "./NewsItem";
import { useState, useEffect } from "react";
import axios from "axios";
import usePromise from "../lib/usePromise";

const Block = styled.div`
	box-sizing: border-box;
	padding-bottom: 3rem;
	width: 768px;
	margin: 0 auto;
	margin-top: 2rem;
`;

const sampleArticle = {
	title: "제목",
	description: "내용",
	url: "https://google.com",
	urlToImage: "https://via.plaveholder.com/160",
};

const NewsList = ({ category }) => {
	const [loading, response, error] = usePromise(() => {
		const API_KEY = "7b8f077a806f43c78156b93f99203990";
		const link = `https://newsapi.org/v2/top-headlines?country=kr${
			category === "all" ? "" : `&category=${category}`
		}&apiKey=${API_KEY}`;
		return axios.get(link);
	}, [category]);

	if (loading) return <Block>대기 중..</Block>;

	if (!response) return null;

	if (error) return <Block>에러 발생!</Block>;

	const { articles } = response.data;

	return (
		<Block>
			{articles.map((a) => (
				<NewsItem key={a.url} article={a} />
			))}
		</Block>
	);
};

export default NewsList;
