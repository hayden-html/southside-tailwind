/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'atlantic': {
					DEFAULT: '#004FA6',
					50: '#5FABFF',
					100: '#4AA0FF',
					200: '#218BFF',
					300: '#0076F8',
					400: '#0062CF',
					500: '#004FA6',
					600: '#00346E',
					700: '#001A36',
					800: '#000000',
					900: '#000000',
					950: '#000000'
				},
				'bumble': '#fbd40f',
			},
			fontFamily: {
				'pandore': ['"Pandore"', ...defaultTheme.fontFamily.sans],
				'noto-sans': ['"Noto Sans JP Variable"', ...defaultTheme.fontFamily.sans],
				'mullish': ['"Mulish Variable"', ...defaultTheme.fontFamily.sans],
			},
			transitionProperty: {
				'height': 'height',
				'max-h': 'max-height',
				'spacing': 'margin, padding',
				'position': 'top, right, bottom, left'
			}
		},
	},
	plugins: [],
}