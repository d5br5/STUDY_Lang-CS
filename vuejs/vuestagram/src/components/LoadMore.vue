<template>
	<button @click="loadMore1" v-if="$store.state.step === 0">더보기</button>
</template>

<script>
import { mapActions } from "vuex";
export default {
	name: "LoadMore",
	methods: {
		...mapActions(["loadMore"]),
		// ...mapActions({ loadMore2: "loadMore" }),
	},
};
</script>

<style></style>
