<template>
	<Discount />
	<button @click="onSort">가격순 정렬</button>
	<button @click="onSortReset">되돌리기</button>
	<transition name="fade">
		<!-- <div class="start" :class="{ end: modalState }"> -->
		<Modal
			@closeModal="onModalClose"
			:room="sorted[selected]"
			:modalState="modalState"
		/>
	</transition>

	<Card
		@openModal="onModalOpen"
		v-for="(v, i) in sorted"
		:key="i"
		:v="v"
		:i="i"
	/>
</template>

<script>
import roomdata from "./assets/oneroom";
import Modal from "./components/Modal.vue";
import Card from "./components/Card.vue";
import Discount from "./components/Discount.vue";

export default {
	name: "App",
	components: { Modal, Card, Discount },
	data() {
		return {
			products: ["역삼동 빌라", "강남동 원룸", "천호동 원룸"],
			reported: [0, 0, 0],
			selected: 0,
			modalState: false,
			original: [...roomdata],
			sorted: roomdata,
		};
	},
	methods: {
		countUp(index) {
			this.reported[index]++;
		},
		doConsole(value) {
			console.log(value);
		},
		onModalOpen(index) {
			// $event => onModalOpen
			this.selected = index;
			this.modalState = true;
		},
		onModalClose() {
			this.modalState = false;
		},
		onSort() {
			this.sorted.sort((a, b) => a.price - b.price);
		},
		onSortReset() {
			this.sorted = [...this.original];
		},
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

body {
	margin: 0;
}

div {
	box-sizing: border-box;
}

/* modal */

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

/* animation */

.start {
	opacity: 0;
	transition: all 1s;
}

.end {
	opacity: 1;
}

.fade-enter-from {
	transform: translateY(-1000px);
}

.fade-enter-active {
	transition: all 1s;
}

.fade-enter-to {
	transform: translateY(0px);
}

.fade-leave-from {
	opacity: 1;
}

.fade-leave-active {
	transition: all 1s;
}

.fade-leave-to {
	opacity: 0;
}
</style>
