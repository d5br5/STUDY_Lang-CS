<template>
	<div class="black-bg" v-if="modalState">
		<div class="white-bg">
			<img :src="roomdata[selected].image" width="500" alt="" />
			<h4>{{ roomdata[selected].title }}</h4>
			<p>{{ roomdata[selected].content }}</p>
			<p>{{ roomdata[selected].price }}원 입니다.</p>
			<Discount />
		</div>
		<!-- <button @click="modalState = false">close</button> -->
	</div>
</template>

<script>
import Discount from "./Discount.vue";

export default {
	name: "Modal",
	props: {
		roomdata: Array,
		modalState: Boolean,
		selected: Number,
	},
	components: { Discount },
};
</script>

<style></style>
