import Vue from 'vue';
import Vuetify from 'vuetify';
import Vuex from 'vuex';

// Stylesheets
import 'vuetify/dist/vuetify.min.css';

// Components
import * as components from './components';

// Views
import Home from './views/Home.vue';

Vue.use(Vuex);
Vue.use(Vuetify);

Object.keys(components).forEach(name => {
	Vue.component(name, components[name]);
});

new Vue({
	el: '#app',
	render: h => h(Home)
});
