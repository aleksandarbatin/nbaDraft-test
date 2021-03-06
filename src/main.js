// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import axios from 'axios';
import Router from './config/routes.js';
import vSelect from 'vue-select';

Vue.component('v-select', vSelect);

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router: Router
})
