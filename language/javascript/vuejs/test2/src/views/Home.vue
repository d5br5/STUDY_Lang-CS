<template>
	<div>
		<h1>Welcome to {{ title }}!</h1>
		<input type="text" v-model="input1" />
		<button @click="getData">get</button>
		<select class="form-control" v-model="region" @change="changeRegion">
			<option :key="i" :value="d.v" v-for="(d, i) in options">{{ d.t }}</option>
		</select>
		<table class="table table-bordered" v-show="tableShow">
			<tr :key="i" v-for="(d, i) in options">
				<td>{{ d.v }}</td>
				<td>{{ d.t }}</td>
			</tr>
		</table>
	</div>
</template>
<script>
export default {
	data() {
		return {
			title: "개발자의 품격",
			input1: "abc",
			options: [
				{ v: "S", t: "seoul" },
				{ v: "J", t: "buton" },
				{ v: "X", t: "dexton" },
			],
			region: "X",
			tableShow: false,
		};
	},
	watch: {
		input1() {
			console.log(1);
		},
	},
	methods: {
		getData() {
			alert(this.input1);
		},
		changeRegion() {
			alert(this.region);
			this.tableShow = true;
		},
	},
	beforeCreate() {
		console.log("before created");
	},
	created() {
		console.log("created");
	},
	beforeMount() {
		console.log("before mounted");
	},
	mounted() {
		console.log("mounted");
	},
	beforeUpdate() {
		console.log("before updated");
	},
	updated() {
		console.log("updated");
	},
	beforeDestroy() {
		console.log("before destory");
	},
	destroyed() {
		console.log("destroy");
	},
};
</script>
