import Vue from 'vue'
import VueRouter from 'vue-router'

import DraftTable from '../components/DraftTable.vue';
import Profile from '../components/Profile.vue';
import Favorites from '../components/Favorites.vue';

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
		},
		{
			path: "/favorites",
			name: "Favorites",
			component: Favorites,
			props: true
		}
	],
	linkActiveClass: 'active'
})

export default router