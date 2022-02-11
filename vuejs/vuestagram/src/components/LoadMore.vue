<template>
	<button @click="loadMore" v-if="$store.state.step === 0">더보기</button>
</template>

<script>
import axios from "axios";
const loadURL = (id) => `https://codingapple1.github.io/vue/more${id}.json`;
export default {
	name: "LoadMore",
	methods: {
		async loadMore() {
			const { data } = await axios.get(loadURL(this.$store.state.loadnum));
			this.$store.commit("loadNumChange");
			this.$store.commit("instaDataPush", data);
		},
	},
};
</script>

<style></style>
