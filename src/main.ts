import Vue from 'vue';
import Vuetify from 'vuetify';

// Vuex store
import store from './store';

// Stylesheets
import 'vuetify/dist/vuetify.min.css';

// Components
import { Sketch } from 'vue-color';
import * as components from './components';

// Views
import Home from './views/Home.vue';

Vue.use(Vuetify);

Object.keys(components).forEach(name => {
	Vue.component(name, components[name]);
});
Vue.component('sketch-picker', Sketch);

new Vue({
	el: '#app',
	store,
	render: h => h(Home)
});
