<template>
	<div class="header">
		<ul
			class="header-button-left"
			v-if="$store.state.step !== 0"
			@click="$store.commit('goBack')"
		>
			<li>Cancel</li>
		</ul>
		<ul
			class="header-button-right"
			v-if="$store.state.step !== 0"
			@click="$store.commit('goNext')"
		>
			<li>{{ $store.state.step === 1 ? "next" : "done" }}</li>
		</ul>
		<img src="../assets/logo.png" class="logo" />
	</div>
</template>

<script>
export default {
	name: "InstaHeader",
};
</script>

<style>
.logo {
	width: 22px;
	margin: auto;
	display: block;
	position: absolute;
	left: 0;
	right: 0;
	top: 13px;
}
.header {
	width: 100%;
	height: 40px;
	background-color: white;
	padding-bottom: 8px;
	position: sticky;
	top: 0;
}
.header-button-left {
	color: skyblue;
	float: left;
	width: 50px;
	padding-left: 20px;
	cursor: pointer;
	margin-top: 10px;
}
.header-button-right {
	color: skyblue;
	float: right;
	width: 50px;
	cursor: pointer;
	margin-top: 10px;
}
</style>
