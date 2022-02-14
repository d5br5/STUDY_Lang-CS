<template>
	<div
		:class="`filter-item ${filterName}`"
		:style="{ backgroundImage: `url(${$store.state.newImage})` }"
		@click="changeFilter(filterName)"
	>
		{{ filterName }}
	</div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
	name: "filterbox",
	props: {
		filterName: String,
	},
	methods: {
		...mapMutations(["changeFilter"]),
		onFilterChange(filter) {
			this.$store.commit("changeFilter", filter);
		},
	},
};
</script>

<style>
.filter-item {
	width: 100px;
	height: 100px;
	margin: 10px 10px 10px auto;
	padding: 8px;
	display: inline-block;
	color: white;
	background-size: cover;
	background-position: center;
	cursor: pointer;
}
</style>
