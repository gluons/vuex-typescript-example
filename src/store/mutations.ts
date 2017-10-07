import { MutationTree } from 'vuex';

import { COLOR } from './mutation-types';
import State from './state';

const mutations: MutationTree<State> = {
	[COLOR](state: State, newColor: string): void {
		state.color = newColor;
	}
};

export default mutations;
