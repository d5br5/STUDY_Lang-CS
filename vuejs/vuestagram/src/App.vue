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
		<img src="./assets/logo.png" class="logo" />
	</div>
	<Container @onDescChange="setDesc" />

	<button @click="loadMore" v-if="$store.state.step === 0">더보기</button>

	<div class="footer" v-if="$store.state.step === 0">
		<ul class="footer-button-plus">
			<input
				@change="uploadFile"
				ref="imageUploader"
				accept="image/*"
				type="file"
				id="file"
				class="inputfile"
			/>
			<label for="file" class="input-plus">+</label>
		</ul>
	</div>
</template>

<script>
import Container from "./components/Container.vue";
import axios from "axios";
const loadURL = (id) => `https://codingapple1.github.io/vue/more${id}.json`;

export default {
	name: "App",
	components: { Container },
	methods: {
		async loadMore() {
			const { data } = await axios.get(loadURL(this.$store.state.loadnum));
			this.$store.commit("loadNumChange");
			this.$store.commit("instaDataPush", data);
		},
		uploadFile(e) {
			let file = e.target.files;
			this.$store.commit("uploadFile", file[0]);
			this.$refs.imageUploader.value = "";
		},
		setDesc(desc) {
			this.$store.commit("changeDesc", desc);
		},
		onFilterChange(filter) {
			this.$store.commit("changeFilter", filter);
		},
	},
};
</script>

<style>
@import "./assets/cssgram.css";
body {
	margin: 0;
}
ul {
	padding: 5px;
	list-style-type: none;
}
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
.footer {
	width: 100%;
	position: sticky;
	bottom: 0;
	padding-bottom: 10px;
	background-color: white;
}
.footer-button-plus {
	width: 80px;
	margin: auto;
	text-align: center;
	cursor: pointer;
	font-size: 24px;
	padding-top: 12px;
}
.sample-box {
	width: 100%;
	height: 600px;
	background-color: bisque;
}
.inputfile {
	display: none;
}
.input-plus {
	cursor: pointer;
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
