const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			backgroundImage: {
				grupo: "url('/grupo.jpg')",
				bovedin: "url('/bovedin.jpg')"
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: null
					}
				}
			}
		}
	},

	plugins: [
		require('@tailwindcss/typography'),
		require('daisyui'),
		require('@tailwindcss/line-clamp')
	],
	daisyui: {
		styled: true,
		themes: [
			{
				mytheme: {
					primary: '#fde047',
					secondary: '#fdba74',
					accent: '#f3f4f6',
					neutral: '#1f2937',
					'base-100': '#000',
					info: '#3ABFF8',
					success: '#2dd4bf',
					warning: '#fb923c',
					error: '#e11d48'
				}
			}
		],
		base: true,
		utils: true,
		logs: true,
		rtl: false
	}
};

module.exports = config;
