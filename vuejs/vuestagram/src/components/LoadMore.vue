<template>
	<button @click="$store.dispatch('loadMore')" v-if="$store.state.step === 0">
		더보기
	</button>
</template>

<script>
export default {
	name: "LoadMore",
};
</script>

<style></style>
