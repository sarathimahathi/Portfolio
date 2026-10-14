/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Architectural Petrol Blue & Slate Cyan palette from reference image
        brand: {
          50: '#F0F7F9',
          100: '#DCEDF2',
          200: '#BDDEE7',
          300: '#8EC4D4',
          400: '#4B9DB5',
          500: '#227891', // Mid architectural teal
          600: '#175F75', // Deep slate blue
          700: '#10495B', // Deep petrol blue
          800: '#0E3644', // Dark midnight ocean
          900: '#0A232C', // Exact deep archway midnight blue from image
          950: '#05141A',
        },
        // Glowing electric blue pop tones
        electric: {
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          cyan: '#00C2CB',
          pop: '#00A3C4',
        },
        // Architectural slate tones from the archways
        arch: {
          50: '#F5F9FA',
          100: '#E4EFF2',
          200: '#D0E4EA',
          300: '#B0D0DB',
          400: '#7FAFC0',
          500: '#528FA3',
          600: '#377083',
          700: '#265463',
        },
        // Alias jade and sand for seamless styling
        jade: {
          50: '#F0F7F9',
          100: '#DCEDF2',
          200: '#BDDEE7',
          300: '#8EC4D4',
          400: '#4B9DB5',
          500: '#227891',
          600: '#175F75',
          700: '#10495B',
          800: '#0E3644',
          900: '#0A232C',
          950: '#05141A',
        },
        sand: {
          50: '#F5F9FA',
          100: '#E4EFF2',
          200: '#D5E5EB',
          300: '#B8D5DE',
          400: '#8BBCCB',
          500: '#5A9BB0',
          600: '#35758A',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          subtle: '#F5F9FA',
          sand: '#E4EFF2', // Soft architectural ice/mist
          arch: '#D0E4EA',
          card: '#FFFFFF',
          border: '#D5E5EB',
        },
        content: {
          primary: '#09181F', // Deep midnight noir
          secondary: '#4F6770', // Muted slate petrol
          muted: '#829DA7',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'brand-sm': '0 2px 10px rgba(10, 35, 44, 0.08)',
        'brand-md': '0 8px 30px rgba(0, 163, 196, 0.14)',
        'brand-lg': '0 16px 40px rgba(0, 163, 196, 0.2)',
        'blue-glow': '0 0 25px rgba(0, 163, 196, 0.4)',
        'soft': '0 4px 20px rgba(9, 24, 31, 0.04)',
        'card-hover': '0 20px 40px -15px rgba(10, 35, 44, 0.16)',
        'jade-sm': '0 2px 10px rgba(10, 35, 44, 0.08)',
        'jade-md': '0 8px 30px rgba(0, 163, 196, 0.14)',
        'jade-lg': '0 16px 40px rgba(0, 163, 196, 0.2)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
