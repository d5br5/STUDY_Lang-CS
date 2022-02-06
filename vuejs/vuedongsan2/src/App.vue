<template>
	<div>
		<div :key="i" v-for="(v, i) in products">
			<h2>{{ v }}</h2>
			<button @click="countUp(i)">허위매물신고</button>
			<span>신고 수 : {{ reported[i] }}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: "App",
	components: {},
	data() {
		return {
			products: ["역삼동 빌라", "강남동 원룸", "천호동 원룸"],
			reported: [0, 0, 0],
		};
	},
	methods: {
		countUp(index) {
			this.reported[index]++;
		},
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
