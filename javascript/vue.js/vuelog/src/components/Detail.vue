<template>
	<div>Detail</div>
	<div>number {{ page }}</div>
	<div>
		<h3>{{ article.title }}</h3>
		<h4>{{ article.date }}</h4>
		<p>{{ article.content }}</p>
	</div>
	<router-view />
</template>

<script>
export default {
	name: "detail",
	data() {
		const pageNum = this.$route.params.page;
		return {
			page: pageNum,
			article: this.articles[pageNum],
		};
	},
	props: {
		articles: Array,
	},
};
</script>

<style></style>
