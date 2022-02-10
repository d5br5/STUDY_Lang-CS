<template>
	<div class="header">
		<ul class="header-button-left" v-if="step !== 0" @click="stepBack">
			<li>Cancel</li>
		</ul>
		<ul class="header-button-right" v-if="step !== 0" @click="stepNext">
			<li>{{ step === 1 ? "next" : "done" }}</li>
		</ul>
		<img src="./assets/logo.png" class="logo" />
	</div>

	<Container
		:instaData="instaData"
		:step="step"
		:newImage="newImage"
		@onDescChange="setDesc"
	/>

	<button @click="loadMore" v-if="step === 0">더보기</button>
	<div class="footer" v-if="step === 0">
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
import instaData from "./assets/data";
import axios from "axios";
const loadURL = (id) => `https://codingapple1.github.io/vue/more${id}.json`;

export default {
	name: "App",
	components: { Container },
	data() {
		return { instaData, loadnum: 0, step: 0, newImage: "", description: "" };
	},
	methods: {
		async loadMore() {
			const { data } = await axios.get(loadURL(this.loadnum));
			if (this.loadnum === 1) {
				this.loadnum = 0;
			} else {
				this.loadnum = 1;
			}
			this.instaData.push(data);
		},
		uploadFile(e) {
			let file = e.target.files;
			this.newImage = URL.createObjectURL(file[0]);
			this.$refs.imageUploader.value = "";
			this.step = 1;
		},
		stepBack() {
			if (this.step === 1 || this.step === 2) this.step--;
		},
		stepNext() {
			if (this.step === 2) {
				const newPost = {
					name: "dohyung Kim",
					userImage: this.newImage,
					postImage: this.newImage,
					likes: 0,
					date: Date.now(),
					liked: false,
					content: this.description,
					filter: "perpetua",
				};
				this.instaData.unshift(newPost);
				this.step = 0;
				this.description = "";
				this.newImage = "";
				return;
			}
			if (this.step === 0 || this.step === 1) this.step++;
		},
		setDesc(desc) {
			this.description = desc;
		},
	},
};
</script>

<style>
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
