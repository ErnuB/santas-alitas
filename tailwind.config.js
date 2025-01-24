/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'rojo': '#e30613',
				'azul': '#2daae1',
				'amarillo': '#fff378',
				'negro': '#1d1d1b',
			},
			fontFamily: {
				'chunkfive' : ['chunkfive-ex', "sans-serif"],
				'grobold' : ['grobold', "sans-serif"],
				'highvoltage' : ['highvoltage', "sans-serif"],
				'kenyan-coffee' : ['kenyan-coffee', "sans-serif"],
				'fira' : ["'Fira Sans Extra Condensed'", "sans-serif"],
			}
		}
	},

	plugins: []
};
