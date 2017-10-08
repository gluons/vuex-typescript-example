module.exports = {
	entry: './src/main.ts',
	html: {
		title: 'Vuex with TypeScript example',
		template: './index.ejs'
	},
	presets: [
		require('poi-preset-typescript')()
	],
	homepage: '.'
};
