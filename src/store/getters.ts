import { GetterTree } from 'vuex';

import State from './state';

// GetterTree<[current state], [root state]>
const getters: GetterTree<State, State> = {
	/*
	 * It's just color with new name.
	 * Example for using getters.
	 */
	colour(state: State): string {
		return state.color;
	}
};

export default getters;
