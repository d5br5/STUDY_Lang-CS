<template>
	<div id="app">
		<Headers />
		<b-badge>New</b-badge>
		<div id="content" class="content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import Headers from "./components/layout/Header.vue";

export default {
	name: "App",
	components: {
		Headers,
	},
};
</script>

<style></style>
