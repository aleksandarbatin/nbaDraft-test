import Vue from 'vue'
import VueRouter from 'vue-router'

import DraftTable from '../components/DraftTable.vue';
import Profile from '../components/Profile.vue';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: "/",
			name: "Home",
			component: DraftTable,
			props: true
		},
		{
			path: "/profile/:playerId",
			name: "Profile",
			component: Profile,
			props: true
		}
	],
	linkActiveClass: 'active'
})

export default router