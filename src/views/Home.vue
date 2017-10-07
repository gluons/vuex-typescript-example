<template lang="pug">
v-app#home
	v-toolbar.purple(dark)
		v-toolbar-title #[blank-link(url='https://github.com/vuejs/vuex/') Vuex] with #[blank-link(url='https://www.typescriptlang.org/') TypeScript] example
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Home extends Vue {}
</script>
