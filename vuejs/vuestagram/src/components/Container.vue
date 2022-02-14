<template>
	<!-- 저번시간에 만든거 -->
	<div>
		{{ name }}
		<Post
			v-for="(v, i) in instaData"
			:key="i"
			:post="v"
			v-show="step === 0"
			@click="likeToggle(i)"
		/>
		<!-- 업로드된 이미지 -->
		<div
			:class="`upload-image ${newFilter}`"
			v-show="step === 2 || step === 1"
			:style="{ backgroundImage: `url(${newImage})` }"
		/>
		<!-- 필터선택페이지 -->
		<div class="filters" v-show="step === 1">
			<FilterBox v-for="(f, i) in filterList" :filterName="f" :key="i" />
		</div>
		<!-- 글작성페이지 -->
		<div class="write" v-show="step === 2">
			<input
				class="write-box"
				placeholder="Write!"
				:value="description"
				@input="onChangeDesc($event)"
			/>
		</div>

		<div v-if="step === 3">
			<MyPage :one="1" />
		</div>
	</div>
</template>

<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue";
import MyPage from "./MyPage.vue";
import { mapState, mapMutations } from "vuex";

export default {
	name: "postbox",
	components: { Post, FilterBox, MyPage },
	data() {
		return {
			counter: 0,
		};
	},
	methods: {
		onChangeDesc(e) {
			// this.$emit("onDescChange", e.target.value);
			this.$store.commit("changeDesc", e.target.value);
		},
		likeToggle(index) {
			this.$store.commit("likeToggle", index);
		},
		...mapMutations(["likeToggle"]),
		...mapMutations({ myNameMutation: "likeToggle" }),
	},
	computed: {
		name2() {
			return this.$store.state.name;
		},
		...mapState([
			"step",
			"description",
			"newImage",
			"filterList",
			"instaData",
			"newFilter",
		]),
		...mapState({ myname: "name" }),
	},
	// mounted() {
	// 	this.emitter.on("fire", (filter) => {
	// 		this.nowClass = filter;
	// 	});
	// },
};
</script>

<style>
ul {
	padding: 5px;
	list-style-type: none;
}
.upload-image {
	width: 100%;
	height: 450px;
	background: cornflowerblue;
	background-size: cover;
}
.filters {
	overflow-x: scroll;
	white-space: nowrap;
}
.filter-1 {
	width: 100px;
	height: 100px;
	background-color: cornflowerblue;
	margin: 10px 10px 10px auto;
	padding: 8px;
	display: inline-block;
	color: white;
	background-size: cover;
}
.filters::-webkit-scrollbar {
	height: 5px;
}
.filters::-webkit-scrollbar-track {
	background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
	background: #888;
	border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
	background: #555;
}
.write-box {
	border: none;
	width: 90%;
	height: 100px;
	padding: 15px;
	margin: auto;
	display: block;
	outline: none;
}
</style>
