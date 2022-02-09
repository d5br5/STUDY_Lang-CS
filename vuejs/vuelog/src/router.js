import { createWebHistory, createRouter } from "vue-router";
import Lists from "./components/Lists.vue";
import Home from "./components/Home.vue";
import Detail from "./components/Detail.vue";

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
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
