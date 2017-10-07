<template lang="pug">
v-app#home
	v-toolbar.purple(dark)
		v-toolbar-title #[blank-link(url='https://github.com/vuejs/vuex/') Vuex] with #[blank-link(url='https://www.typescriptlang.org/') TypeScript] example
	main
		v-content
			v-container(fluid, grid-list-md)
				v-layout(row, wrap, align-content-center, justify-space-around)
					v-flex(xs12)
						sketch-picker(:value='colour', @input='updateColor').picker-center
					v-flex(xs12, sm6)
						color-box
					v-flex(xs12, sm6)
						color-box
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Getter } from '@/decorators';

@Component({
	name: 'Home'
})
export default class Home extends Vue {
	@Getter('colour') colour: string;

	updateColor(newColor) {
		let newColorHex: string = newColor.hex;

		this.$store.dispatch('updateColor', newColorHex);
	}
}
</script>

<style scoped>
.picker-center {
	margin: 0 auto;
}
</style>
