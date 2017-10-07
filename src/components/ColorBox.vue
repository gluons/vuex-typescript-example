<template lang="pug">
v-card(raised, hover)
	v-card-text
		.color-box(:data-color='colour', :style='boxStyle')
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Getter } from '@/decorators';

@Component({
	name: 'ColorBox'
})
export default class ColorBox extends Vue {
	@Getter('colour') colour: string;

	get boxStyle() {
		return {
			'background-color': this.colour
		};
	}
}
</script>

<style scoped>
.color-box {
	width: 150px;
	height: 150px;
	margin: 0 auto;
}
</style>
