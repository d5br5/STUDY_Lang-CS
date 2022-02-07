<template>
	<Modal :roomdata="roomdata" :selected="selected" :modalState="modalState" />
	<Card v-for="(v, i) in roomdata" :key="i" :v="v" :i="i" />
	<!--
	<div class="black-bg" v-if="modalState">
		<div class="white-bg" @click="modalState = false">
			<img :src="roomdata[selected].image" width="500" alt="" />
			<h4>{{ roomdata[selected].title }}</h4>
			<p>{{ roomdata[selected].content }}</p>
			<p>{{ roomdata[selected].price }}원 입니다.</p>
			<Discount />
		</div>
	</div>
	<div>
		<div :key="i" v-for="(v, i) in products">
			<h2 @click="modalState = true">{{ v }}</h2>
			<button @click="countUp(i)">허위매물신고</button>
			<span>신고 수 : {{ reported[i] }}</span>
		</div>
	</div>
	-->
</template>

<script>
import roomdata from "./assets/oneroom";
import Modal from "./components/Modal.vue";
import Card from "./components/Card.vue";

export default {
	name: "App",
	components: { Modal, Card },
	data() {
		return {
			products: ["역삼동 빌라", "강남동 원룸", "천호동 원룸"],
			reported: [0, 0, 0],
			selected: 0,
			modalState: false,
			roomdata,
		};
	},
	methods: {
		countUp(index) {
			this.reported[index]++;
		},
		clickDetail(index) {
			this.selected = index;
			this.modalState = true;
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
	padding: 200px 100px;
}
.white-bg {
	width: 50%;
	background: white;
	border-radius: 8px;
	padding: 20px;
	margin: 0 auto;
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
}
</style>
