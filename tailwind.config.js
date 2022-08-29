/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			sm: "320px",
			md: "768px",
			lg: "1280px",
			xl: "1920px",
		},
		extend: {
			fontSize: {
				h1: "140px",
				h2: "48px",
				h3: "20px",
				h4: "16px",
				h5: "12px",
				p: "16px",
			},
			fontWeight: {
				bold: "700",
				semiBold: "600",
				medium: "500",
				regular: "400",
			},

			colors: {
				chromeYellow: "#FFC93E",
				brown: "#725114",
				navyBlue: "#111D5E",
				darkblue: "#0A142F",
				shadowGrey: "rgba(10, 20, 47, 0.8)",
			},
		},
	},
	plugins: [],
};
