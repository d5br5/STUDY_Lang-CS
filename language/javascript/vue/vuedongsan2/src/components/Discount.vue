<template>
	<div class="discount">
		<h4>지금 사시면 {{ price }}% 할인!</h4>
	</div>
</template>

<script>
export default {
	name: "discount",
	data() {
		return {
			price: 3,
			timer: null,
		};
	},
	mounted() {
		this.timer = setInterval(() => {
			this.price--;
		}, 1000);
	},
	updated() {
		if (this.price <= 0) clearInterval(this.timer);
	},
};
</script>

<style>
.discount {
	background: #eee;
	padding: 10px;
	margin: 10px;
	border-radius: 5px;
}
</style>
