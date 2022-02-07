<template>
	<!--
  <div :key="i" v-for="(v, i) in roomdata" @click="clickDetail(i)">
  -->
	<div :key="i" v-for="(v, i) in roomdata">
		<img :src="v.image" alt="" class="roomImg" />
		<h2>{{ v.title }}</h2>
		<h3>{{ v.price }}원</h3>
		<p>{{ v.content }}</p>
	</div>
</template>

<script>
export default {
	name: "card",
	props: {
		v: Object,
		i: Number,
	},
};
</script>

<style></style>
