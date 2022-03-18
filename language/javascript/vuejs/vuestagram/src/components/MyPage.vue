<template>
	dd
	<div style="padding: 10px">
		<h4>팔로워</h4>
		<input type="text" placeholder="" @input="onInputChange($event)" />
		<div class="post-header" v-for="(user, i) in filteredFollower" :key="i">
			<div class="profile" :style="`background-image:url(${user.image})`"></div>
			<span class="profile-name">{{ user.name }}</span>
		</div>
	</div>
</template>

<script>
import { onMounted, toRefs, reactive, ref, watch, computed } from "vue";
import axios from "axios";
import { useStore } from "vuex";

export default {
	name: "myPage",
	props: {
		one: Number,
	},

	/*
	@ params: props, context
	*/
	setup(props) {
		let follower = ref([]);
		let filteredFollower = ref([]);

		let test = reactive({ name: "kim" });
		let { one: newOne } = toRefs(props);

		console.log(newOne.value);

		watch(newOne, () => {});

		let result = computed(() => {
			return 10;
		});

		console.log(result.value);

		onMounted(async () => {
			const { data } = await axios.get("/follower.json");
			follower.value = data;
			filteredFollower.value = data;
		});

		let store = useStore();
		console.log(store.state.name);

		function onInputChange(e) {
			const text = e.target.value;
			filteredFollower.value = follower.value.filter((v) =>
				v.name.includes(text)
			);
		}

		return { test, newOne, onInputChange, filteredFollower };
	},
};
</script>

<style scoped></style>
