<template>
	<div v-for="(article, i) in articles" :key="i">
		<router-link :to="`/detail/${i}`" class="nav-link active">
			<h3>{{ article.title }}</h3>
		</router-link>
		<h4>{{ article.date }}</h4>
	</div>
</template>

<script>
import articles from "../assets/articles";
export default {
	name: "lists",
	data() {
		return {
			articles,
		};
	},
};
</script>

<style scoped>
div {
	margin: 60px auto;
}
</style>
