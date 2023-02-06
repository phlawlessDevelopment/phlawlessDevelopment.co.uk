/** @type {import('tailwindcss').Config} */
const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	theme: {
		extend: {
			colors: {
				brand: {
					50: '#9130ff',
					100: '#8c10ff'
				}
			}
		}
	},

	plugins: [require('flowbite/plugin')],
	darkMode: 'class'
};

module.exports = config;
