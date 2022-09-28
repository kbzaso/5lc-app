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
					primary: '#facc15',
					secondary: '#f43f5e',
					accent: '#2dd4bf',
					neutral: '#4b5563',
					'base-100': '#000',
					info: '#3ABFF8',
					success: '#36D399',
					warning: '#FBBD23',
					error: '#F87272'
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
