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
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				surface: {
					DEFAULT: 'hsl(var(--surface))',
					subtle: 'hsl(var(--surface-subtle))',
					muted: 'hsl(var(--surface-muted))'
				},
				brand: {
					50:  '#EEF2FF',
					100: '#E0E7FF',
					200: '#C7D2FE',
					300: '#A5B4FC',
					400: '#818CF8',
					500: '#6366F1',
					600: '#4F46E5',
					700: '#4338CA',
					800: '#3730A3',
					900: '#312E81',
					950: '#1E1B4B'
				},
				violet: {
					50:  '#F5F3FF',
					100: '#EDE9FE',
					200: '#DDD6FE',
					300: '#C4B5FD',
					400: '#A78BFA',
					500: '#8B5CF6',
					600: '#7C3AED',
					700: '#6D28D9',
					800: '#5B21B6',
					900: '#4C1D95'
				},
				/* Legacy aliases — kept so non-redesigned sub-pages continue to render with the new palette */
				vibe: {
					background: {
						primary: 'hsl(var(--background))',
						secondary: 'hsl(var(--surface-subtle))',
						tertiary: 'hsl(var(--surface-muted))'
					},
					text: {
						primary: 'hsl(var(--foreground))',
						secondary: 'hsl(var(--muted-foreground))'
					},
					accent: {
						blue: '#6366F1',
						purple: '#8B5CF6',
						green: '#10B981'
					},
					dark: {
						background: {
							primary: 'hsl(var(--background))',
							secondary: 'hsl(var(--surface))',
							tertiary: 'hsl(var(--surface-muted))'
						},
						accent: '#818CF8',
						text: {
							primary: 'hsl(var(--foreground))',
							secondary: 'hsl(var(--muted-foreground))'
						}
					}
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'2xl': 'calc(var(--radius) + 4px)',
				'3xl': 'calc(var(--radius) + 8px)'
			},
			boxShadow: {
				'card': '0 1px 2px 0 rgb(15 23 42 / 0.04), 0 1px 3px 0 rgb(15 23 42 / 0.04)',
				'elevated': '0 4px 6px -1px rgb(15 23 42 / 0.06), 0 10px 20px -3px rgb(15 23 42 / 0.06)',
				'pop': '0 10px 30px -8px rgb(15 23 42 / 0.12), 0 6px 12px -4px rgb(15 23 42 / 0.08)',
				'glow-brand': '0 0 0 1px rgb(99 102 241 / 0.15), 0 8px 24px -8px rgb(99 102 241 / 0.4)',
				'glow-violet': '0 0 0 1px rgb(139 92 246 / 0.15), 0 8px 24px -8px rgb(139 92 246 / 0.4)',
				'inner-line': 'inset 0 0 0 1px rgb(255 255 255 / 0.06)'
			},
			backgroundImage: {
				'brand-gradient': 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
				'brand-gradient-soft': 'linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(139,92,246,0.12) 100%)',
				'brand-mesh': 'radial-gradient(at 20% 0%, rgba(139,92,246,0.35) 0px, transparent 50%), radial-gradient(at 80% 100%, rgba(99,102,241,0.45) 0px, transparent 50%), linear-gradient(135deg, #4338CA 0%, #6D28D9 100%)',
				'grid-slate': 'linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(8px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-soft': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'pulse-light': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.96)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(8px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-6px)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
				'fade-in-soft': 'fade-in-soft 0.6s ease-out',
				'pulse-light': 'pulse-light 2s ease-in-out infinite',
				'scale-in': 'scale-in 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
				'slide-in-right': 'slide-in-right 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
				'float': 'float 4s ease-in-out infinite',
				'shimmer': 'shimmer 2.5s linear infinite'
			},
			fontFamily: {
				'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
				'display': ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']
			},
			transitionTimingFunction: {
				'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
				'out-back': 'cubic-bezier(0.34, 1.56, 0.64, 1)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
