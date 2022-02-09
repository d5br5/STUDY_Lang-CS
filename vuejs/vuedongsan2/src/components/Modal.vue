<template>
	<div class="black-bg" v-if="modalState">
		<div class="white-bg">
			<img :src="room.image" width="500" alt="" />
			<h4>{{ room.title }}</h4>
			<p>{{ room.content }}</p>
			<!-- <input type="text" @input="inputChange" /> -->
			<input v-model.number="month" />
			<!-- <input type="range" min="1" max="12" v-model="month" /> -->
			<!-- <textarea v-model="month" id="" cols="30" rows="10"></textarea>
			<select v-model="month" id="">
				<option value=""></option>
			</select> -->
			<p>{{ month }}개월 선택 : {{ room.price * month }}원 입니다.</p>

			<button @click="$emit('closeModal')">close</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "Modal",
	data() {
		return { month: 1 };
	},
	props: {
		// props : readOnly
		modalState: Boolean,
		room: Object,
	},

	methods: {
		closeModal() {
			this.$emit("closeModal");
		},
		inputChange(e) {
			this.month = e.target.value || 0;
		},
		resetInput() {
			console.log("resetttt");
			this.month = 1;
		},
	},
	updated() {
		if (this.month === 2) {
			alert("2개월은 안팝니다.");
			this.month = 3;
		}
	},
	watch: {
		month(after) {
			if (isNaN(after)) {
				alert("문자 입력 금지");
				this.resetInput();
			}
			if (after > 12) {
				alert("no more than 12");
				this.resetInput();
			}
		},
	},
};
</script>

<style></style>
