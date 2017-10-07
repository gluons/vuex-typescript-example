<template lang="pug">
a(:href='url', target='_blank', rel='noopener noreferrer')
	slot
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
	name: 'BlankLink',
	props: {
		url: {
			type: String,
			required: true
		}
	}
})
export default class BlankLink extends Vue {}
</script>

<style lang="scss" scoped>
a {
	&, &:hover, &:visited {
		color: inherit;
		text-decoration: none;
	}
	&:hover {
		text-decoration: underline;
	}
}
</style>

