import { ActionContext, ActionTree } from 'vuex';

import { COLOR } from './mutation-types';
import State from './state';

// ActionTree<[current state], [root state]>
const actions: ActionTree<State, State> = {
	updateColor({ commit }: ActionContext<State, State>, newColor: string): void {
		commit(COLOR, newColor);
	}
};

export default actions;
