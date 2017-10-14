import { createDecorator } from 'vue-class-component';

// From vuejs/vue-class-component#56
export default function Getter(getterType: string) {
	return createDecorator((options, key) => {
		options.computed = !options.computed ? {} : options.computed;
		options.computed[key] = function () {
			return this.$store.getters[getterType];
		};
	});
}
