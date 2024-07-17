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
				'ikea': '#007afc',
				'cake': {
					DEFAULT: '#FF73A9',
					50: '#FFFFFF',
					100: '#FFFFFF',
					200: '#FFEDF4',
					300: '#FFC5DB',
					400: '#FF9CC2',
					500: '#FF73A9',
					600: '#FF3B87',
					700: '#FF0364',
					800: '#CA004E',
					900: '#920038',
					950: '#76002D'
				},

			},
			fontFamily: {
				'pandore': ['"Pandore"', ...defaultTheme.fontFamily.sans],
				'noto-sans': ['"Noto Sans JP Variable"', ...defaultTheme.fontFamily.sans],
				'mullish': ['"Mulish Variable"', ...defaultTheme.fontFamily.sans],
				'cursive': ["'Kalam', cursive", ...defaultTheme.fontFamily.sans]
			},
			transitionProperty: {
				'height': 'height',
				'max-h': 'max-height',
				'spacing': 'margin, padding',
				'position': 'top, right, bottom, left'
			},
			fontSize: {
				'h1': ['clamp(2rem, 2.75vw + 1rem, 4rem)', '1.2'],
				'h2': ['clamp(1.8rem, 1rem + 2.25vw, 3.1748rem)', '1.2'],
				'h3': ['clamp(1.6rem, 1rem + 1.75vw, 2.5198rem)', '1.2'],
				'h4': ['clamp(1.4rem, 1rem + 1.25vw, 2rem)', '1.2'],
				'h5': ['clamp(1.2rem, 1rem + .75vw, 1.5874rem)', '1.2'],
				'h6': ['clamp(1rem, 1rem + .25vw, 1.25rem)', '1.2'],
				'lead': ['clamp(1.125rem, 1rem + .5vw, 1.35rem)', '1.2'],
				'small': ['clamp(.8rem, .8rem + .125vw, 1rem)', '1.2'],
			}
		},
	},
	plugins: [],
}