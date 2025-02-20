import { createStore } from "vuex";
import axios from "axios";

import instaData from "./assets/data";
import filterList from "./assets/filterList";

const store = createStore({
	state() {
		return {
			name: "kim",
			age: 20,
			instaData,
			filterList,
			loadnum: 0,
			step: 3,
			newImage: "",
			description: "",
			newFilter: "",
		};
	},
	mutations: {
		changeName(state) {
			state.name = "park";
		},
		getold(state, payload = 1) {
			state.age += payload;
		},
		changeDesc(state, payload) {
			state.description = payload;
		},
		changeFilter(state, payload) {
			state.newFilter = payload;
		},
		goNext(state) {
			if (state.step === 2) {
				const newPost = {
					name: "Dohyung Kim",
					userImage: state.newImage,
					postImage: state.newImage,
					likes: 0,
					date: Date.now(),
					liked: false,
					content: state.description,
					filter: state.newFilter,
				};
				state.instaData.unshift(newPost);
				state.step = 0;
				state.description = "";
				state.newImage = "";
				state.newFilter = "";
				return;
			}
			if (state.step === 0 || state.step === 1) {
				state.step++;
			}
		},
		goBack(state) {
			if (state.step === 1 || state.step === 2) state.step--;
		},
		loadNumChange(state) {
			if (state.loadnum === 1) {
				state.loadnum = 0;
			} else {
				state.loadnum = 1;
			}
		},
		instaDataPush(state, payload) {
			state.instaData.push(payload);
		},
		uploadFile(state, payload) {
			state.newImage = URL.createObjectURL(payload);
			state.step = 1;
		},
		likeToggle(state, payload) {
			const data = state.instaData[payload];
			if (data.liked) {
				data.likes--;
			} else {
				data.likes++;
			}
			data.liked = !data.liked;
		},
	},
	//ajax
	actions: {
		async loadMore(context) {
			const loadURL = (id) =>
				`https://codingapple1.github.io/vue/more${id}.json`;
			const { data } = await axios.get(loadURL(context.state.loadnum));
			context.commit("loadNumChange");
			context.commit("instaDataPush", data);
		},
	},
});

export default store;
