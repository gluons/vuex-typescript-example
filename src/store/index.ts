import Vue from 'vue';
import Vuex, { Store } from 'vuex';

import State from './state';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const debug: boolean = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);

export default new Store<State>({
	state: new State(),
	mutations,
	actions,
	getters,
	strict: debug
});
