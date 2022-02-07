<template>
	<div class="black-bg" v-if="modalState">
		<div class="white-bg" @click="modalState = false">
			<h4>상세 페이지임</h4>
			<p>상세페이지 내용임</p>
		</div>
	</div>

	<div>
		<div :key="i" v-for="(v, i) in products">
			<h2 @click="modalState = true">{{ v }}</h2>
			<button @click="countUp(i)">허위매물신고</button>
			<span>신고 수 : {{ reported[i] }}</span>
		</div>
	</div>
	<div>
		<div :key="i" v-for="(v, i) in roomdata">
			<img :src="v.image" alt="" class="roomImg" />
			<h2>{{ v.title }}</h2>
			<h3>{{ v.price }}원</h3>
			<p>{{ v.content }}</p>
		</div>
	</div>
</template>

<script>
import roomdata from "./assets/oneroom";

export default {
	name: "App",
	components: {},
	data() {
		return {
			products: ["역삼동 빌라", "강남동 원룸", "천호동 원룸"],
			reported: [0, 0, 0],
			modalState: false,
			roomdata,
		};
	},
	methods: {
		countUp(index) {
			this.reported[index]++;
		},
	},
};
</script>

<style>
body {
	margin: 0;
}

div {
	box-sizing: border-box;
}
.black-bg {
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	padding: 20px;
}
.white-bg {
	width: 100%;
	background: white;
	border-radius: 8px;
	padding: 20px;
}

.roomImg {
	width: 500px;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
