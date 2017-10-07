import randomColor from 'randomcolor';

export default class State {
	public color: string;

	constructor() {
		this.color = randomColor();
	}
}
