<template>
	<Header />
	<Container />
	<LoadMore />
	<Footer />
</template>

<script>
import Container from "./components/Container.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import LoadMore from "./components/LoadMore.vue";

export default {
	name: "App",
	components: { Container, Header, Footer, LoadMore },
};
</script>

<style>
@import "./assets/cssgram.css";
body {
	margin: 0;
}

#app {
	box-sizing: border-box;
	font-family: "consolas";
	margin-top: 60px;
	width: 100%;
	max-width: 460px;
	margin: auto;
	position: relative;
	border-right: 1px solid #eee;
	border-left: 1px solid #eee;
}
</style>
