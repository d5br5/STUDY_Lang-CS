<template>
	<div v-for="(article, i) in articles" :key="i">
		<!-- <router-link :to="`/detail/${i}`" class="nav-link active"> -->
		<h3 @click="$router.push(`/detail/${i}`)">{{ article.title }}</h3>
		<!-- </router-link> -->
		<h4>{{ article.date }}</h4>
	</div>
</template>

<script>
export default {
	name: "lists",
	data() {
		return {};
	},
	props: {
		articles: Array,
	},
};
</script>

<style scoped>
div {
	margin: 60px auto;
}
</style>
