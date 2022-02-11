<template>
	<div
		:class="`filter-item ${filterName}`"
		:style="{ backgroundImage: `url(${newImg})` }"
		@click="fire"
	>
		{{ filterName }}
		<!-- <slot name="a"></slot> -->
	</div>
</template>

<script>
export default {
	name: "filterbox",
	props: {
		newImg: String,
		filterName: String,
	},
	methods: {
		fire() {
			this.emitter.emit("fire", this.filterName);
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
