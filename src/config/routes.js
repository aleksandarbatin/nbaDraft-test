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
			component: DraftTable
		},
		{
			path: "/profile",
			component: Profile
		}
	],
	linkActiveClass: 'active'
})

export default router