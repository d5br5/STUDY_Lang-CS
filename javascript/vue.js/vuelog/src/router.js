import { createWebHistory, createRouter } from "vue-router";
import Lists from "./components/Lists.vue";
import Home from "./components/Home.vue";
import Detail from "./components/Detail.vue";
import Comment from "./components/Comment.vue";
import Author from "./components/Author.vue";
import DetailMain from "./components/DetailMain.vue";

const routes = [
	{
		path: "/list",
		component: Lists,
	},
	{
		path: "/",
		component: Home,
	},
	{
		path: "/detail/:page",
		component: Detail,
		children: [
			{
				path: "",
				component: DetailMain,
			},
			{
				path: "author",
				component: Author,
				// navigation guard
				beforeEnter: () => {
					// @params
					// to : destination
					// from : departure
					// next : what we are doing
				},
			},
			{
				path: "comment",
				component: Comment,
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

// global navigation guard
// router.beforeEach((to, from) => { })

export default router;
