<template>
	<div>Detail</div>
	<div>number {{ page }}</div>
	<div>
		<h3>{{ article.title }}</h3>
		<h4>{{ article.date }}</h4>
		<p>{{ article.content }}</p>
	</div>
</template>

<script>
import articles from "../assets/articles";

export default {
	name: "detail",
	data() {
		const pageNum = this.$route.params.page;
		return {
			page: pageNum,
			article: articles[pageNum],
		};
	},
};
</script>

<style></style>
