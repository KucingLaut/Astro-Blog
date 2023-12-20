/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			boxShadow: {
				'border-thick': '0px 0px 0px 4px',
				'border-thin': '0px 0px 0px 2px',
			},
		},
	},
	plugins: [require("daisyui"), require('@tailwindcss/typography')],
	daisyui: {
		themes: [
			{
				light: {
					"primary": "#006CAC",
					"secondary": "#00544f",
					"accent": "#00d6c9",
					"neutral": "#fbfbfb",
					"base-100": "#fbfbfb",
					"info": "#00c7b5",
					"success": "#22c55e",
					"warning": "#fcd34d",
					"error": "#f43f5e",
				},
				dark: {
					"primary": "#00ffe6",
					"secondary": "#52da84",
					"accent": "#ece141",
					"neutral": "#161718",
					"base-100": "#161718",
					"info": "#00c7b5",
					"success": "#22c55e",
					"warning": "#fcd34d",
					"error": "#f43f5e",
				}
			},
		],
		darkTheme: "dark", // name of one of the included themes for dark mode
		base: true, // applies background color and foreground color for root element by default
		styled: true, // include daisyUI colors and design decisions for all components
		utils: true, // adds responsive and modifier utility classes
		prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
		logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
		themeRoot: ":root", // The element that receives theme color CSS variables
	},
}
