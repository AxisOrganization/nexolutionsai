import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			// Enhanced font families with fallbacks
			fontFamily: {
				jakarta: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
				inter: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
				instrument: ['Instrument Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
				display: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
				heading: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
				body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
			},
			// Advanced font sizes with responsive scaling
			fontSize: {
				'xs': ['0.75rem', { lineHeight: '1rem' }],
				'sm': ['0.875rem', { lineHeight: '1.25rem' }],
				'base': ['1rem', { lineHeight: '1.5rem' }],
				'lg': ['1.125rem', { lineHeight: '1.75rem' }],
				'xl': ['1.25rem', { lineHeight: '1.75rem' }],
				'2xl': ['1.5rem', { lineHeight: '2rem' }],
				'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
				'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
				'5xl': ['3rem', { lineHeight: '3.25rem' }],
				'6xl': ['3.75rem', { lineHeight: '4rem' }],
				'7xl': ['4.5rem', { lineHeight: '4.75rem' }],
				'8xl': ['6rem', { lineHeight: '6.25rem' }],
				'9xl': ['8rem', { lineHeight: '8.25rem' }],
				// Responsive display sizes
				'display-sm': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.02em' }],
				'display-md': ['3rem', { lineHeight: '3.25rem', letterSpacing: '-0.02em' }],
				'display-lg': ['4.5rem', { lineHeight: '4.75rem', letterSpacing: '-0.025em' }],
				'display-xl': ['6rem', { lineHeight: '6.25rem', letterSpacing: '-0.025em' }],
				'display-2xl': ['8rem', { lineHeight: '8.25rem', letterSpacing: '-0.03em' }],
			},
			// Enhanced color system
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))',
					variant: 'hsl(var(--primary-variant))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Enhanced Nexolutions brand colors
				nexo: {
					pink: 'hsl(var(--nexo-pink))',
					purple: 'hsl(var(--nexo-purple))',
					'dark-card': 'hsl(var(--nexo-dark-card))',
					'gray-300': 'hsl(var(--nexo-gray-300))',
					'gray-400': 'hsl(var(--nexo-gray-400))',
					'gray-700': 'hsl(var(--nexo-gray-700))',
				},
				// Semantic colors for advanced design
				bg: {
					DEFAULT: 'hsl(var(--background))',
					card: 'hsl(var(--background-card))',
					muted: 'hsl(var(--background-muted))',
					subtle: 'hsl(var(--background-subtle))',
				},
				text: {
					DEFAULT: 'hsl(var(--foreground))',
					muted: 'hsl(var(--foreground-muted))',
					subtle: 'hsl(var(--foreground-subtle))',
				},
				interactive: {
					hover: 'hsl(var(--hover))',
					active: 'hsl(var(--active))',
					focus: 'hsl(var(--focus))',
				},
			},
			// Enhanced border radius
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				xs: '0.125rem',
				xl: '0.75rem',
				'2xl': '1rem',
				'3xl': '1.5rem',
				'4xl': '2rem',
			},
			// Advanced spacing system
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'128': '32rem',
				'144': '36rem',
				'160': '40rem',
				'176': '44rem',
				'192': '48rem',
			},
			// Enhanced shadows
			boxShadow: {
				'elegant': '0 10px 30px -10px hsl(326 100% 58% / 0.3)',
				'glow': '0 0 40px hsl(326 65% 67% / 0.4)',
				'card': '0 4px 6px -1px hsl(0 0% 0% / 0.5)',
				'soft': '0 2px 4px -1px hsl(0 0% 0% / 0.3)',
			},
			// Advanced background images
			backgroundImage: {
				'gradient-primary': 'linear-gradient(135deg, hsl(326 100% 58%), hsl(280 100% 70%))',
				'gradient-subtle': 'linear-gradient(180deg, hsl(0 0% 0%), hsl(220 13% 9%))',
				'gradient-hero': 'linear-gradient(135deg, hsl(326 100% 58%) 0%, hsl(280 100% 70%) 50%, hsl(260 100% 80%) 100%)',
				'shimmer': 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
			},
			// Enhanced keyframes
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.9)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'glow-pulse': {
					'0%, 100%': { boxShadow: '0 0 20px hsl(326 100% 58% / 0.3)' },
					'50%': { boxShadow: '0 0 30px hsl(326 100% 58% / 0.6)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
			},
			// Enhanced animations
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'scale-in': 'scale-in 0.4s ease-out',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'shimmer': 'shimmer 2s linear infinite',
				'slide-in-right': 'slide-in-right 0.3s ease-out',
			},
			// Enhanced transitions
			transitionTimingFunction: {
				'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
				'bounce-soft': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
			},
			// Typography enhancements
			letterSpacing: {
				'tighter': '-0.05em',
				'tight': '-0.025em',
				'normal': '0em',
				'wide': '0.025em',
				'wider': '0.05em',
				'widest': '0.1em',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
