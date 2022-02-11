<template>
	<div class="footer" v-if="$store.state.step === 0">
		<ul class="footer-button-plus">
			<input
				@change="uploadFile"
				ref="imageUploader"
				accept="image/*"
				type="file"
				id="file"
				class="inputfile"
			/>
			<label for="file" class="input-plus">+</label>
		</ul>
	</div>
</template>

<script>
export default {
	name: "InstaFooter",
	methods: {
		uploadFile(e) {
			let file = e.target.files;
			this.$store.commit("uploadFile", file[0]);
			this.$refs.imageUploader.value = "";
		},
	},
};
</script>

<style>
.footer {
	width: 100%;
	position: sticky;
	bottom: 0;
	padding-bottom: 10px;
	background-color: white;
}
.footer-button-plus {
	width: 80px;
	margin: auto;
	text-align: center;
	cursor: pointer;
	font-size: 24px;
	padding-top: 12px;
}
.inputfile {
	display: none;
}
.input-plus {
	cursor: pointer;
}
</style>
