<template>
	<!-- 저번시간에 만든거 -->
	<div>
		<Post
			v-for="(v, i) in $store.state.instaData"
			:key="i"
			:post="v"
			v-show="$store.state.step === 0"
		/>
		<!-- 업로드된 이미지 -->
		<div
			:class="`upload-image ${$store.state.newFilter}`"
			v-show="$store.state.step === 2 || $store.state.step === 1"
			:style="{ backgroundImage: `url(${$store.state.newImage})` }"
		/>
		<!-- 필터선택페이지 -->
		<div class="filters" v-show="$store.state.step === 1">
			<FilterBox
				v-for="(f, i) in $store.state.filterList"
				:filterName="f"
				:key="i"
			/>
		</div>
		<!-- 글작성페이지 -->
		<div class="write" v-show="$store.state.step === 2">
			<input
				class="write-box"
				placeholder="Write!"
				:value="$store.state.description"
				@input="onChangeDesc($event)"
			/>
		</div>
	</div>
</template>

<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue";

export default {
	name: "postbox",
	components: { Post, FilterBox },
	methods: {
		onChangeDesc(e) {
			// this.$emit("onDescChange", e.target.value);
			this.$store.commit("changeDesc", e.target.value);
		},
	},
	// mounted() {
	// 	this.emitter.on("fire", (filter) => {
	// 		this.nowClass = filter;
	// 	});
	// },
};
</script>

<style>
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
