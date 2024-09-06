/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #00308F, #002D62, #005A9C, #002244)',
        'custom-gradient2': 'linear-gradient(to bottom, #00308F, #0C2340, #132257)',
        'custom-gradient3': 'linear-gradient(90deg, rgba(40,15,169,1) 2%, rgba(2,0,36,1) 36%, rgba(9,9,121,1) 56%, rgba(0,212,255,1) 90%)',
        'custom-gradient4': 'linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(9,9,121,1) 52%, rgba(0,212,255,1) 88%)',
        'custom-gradient5': 'linear-gradient(90deg, rgba(2,56,67,1) 0%, rgba(2,177,232,1) 0%, rgba(8,37,57,1) 0%, rgba(37,62,94,1) 30%, rgba(9,9,121,1) 68%, rgba(0,212,255,1) 100%)',
        'custom-gradient6': 'linear-gradient(90deg, rgba(2,56,67,1) 0%, rgba(2,177,232,1) 0%, rgba(8,37,57,1) 0%, rgba(4,47,101,1) 31%, rgba(9,9,121,1) 55%, rgba(0,212,255,1) 100%);',
        'dark-blue-to-black-to-purple': 'linear-gradient(to right, #00308F, #000000, #1D1A6F)',
        // Light gradients
        'light': 'linear-gradient(to right, #F7F9F2, #F6F5F2)',
        'light1': 'linear-gradient(to top, #CDF5FD, #D2E0FB)',//star
        'light2': 'linear-gradient(to bottom, #F9F5F6, #F9FBE7, #D2E0FB)',
        'light3': 'linear-gradient(to right, #E3F4F4, #F8F6F4, #F6F5F2)',
        'lightDark': 'linear-gradient(to right, #a0c4ff, #00308F)',//star

        // Light cyan to dark blue
        'lightDark1': 'linear-gradient(to right, #e0f7fa, #004d40)', 

        // Light blue to navy
        'lightDark2': 'linear-gradient(to bottom, #e0f7fa, #002d72)',//star

        // Light grey to dark grey
        'lightDark3': 'linear-gradient(to bottom, #D2E0FB, #1a1f71)',

        // Light green to dark green
        'lightDark4': 'linear-gradient(to bottom, #367588, #00356B)',
        'lightDark5': 'linear-gradient(to bottom, #AFDBF5, #1D428A)',


        // Light teal to dark teal
        'light-teal-to-dark-teal': 'linear-gradient(to bottom, #b2dfdb, #004d40)',

        // Gradient from dark blue to dark purple
        'dark-blue-to-purple': 'linear-gradient(to right, #00308F, #1D1A6F)',

        // Gradient from midnight blue to grey
        'midnight-blue-to-grey': 'linear-gradient(to right, #002D62, #333333)',

        // Gradient from dark teal to deep blue nice
        'dark-teal-to-deep-blue': 'linear-gradient(to bottom left, #004d4d, #002244)',

        // Gradient from charcoal to dark blue
        'charcoal-to-dark-blue': 'linear-gradient(to bottom, #333333, #00308F)',

        // Gradient from dark blue to grey to black
        'blue-to-grey-to-black': 'linear-gradient(to bottom right, #00308F, #666666, #000000)',

        // Gradient from dark blue to dark green with multiple stops agricultural
        'blue-to-green-multi': 'linear-gradient(to top right, #00308F, #004d00, #007a00)',

        // Gradient from dark blue to dark red to black
        'blue-to-red-to-black': 'linear-gradient(to top, #00308F, #ff0000, #000000)',

        // Diagonal gradient from dark purple to dark teal
        'purple-to-teal-diagonal': 'linear-gradient(to bottom right, #1D1A6F, #004d4d)',
        
        // Gradient from dark blue to dark grey to black
        'blue-to-grey-to-black-diagonal': 'linear-gradient(to top left, #00308F, #666666, #000000)',
        'dark1': 'linear-gradient(to top left, #1B1027, #1E1D21, #0C1A1D)',
        'darkblue1': 'linear-gradient(to top left, #132257, #082567, #004170)',
        'darkblue2': 'linear-gradient(to bottom left, #011F5B, #1a1f71, #002D72)',
        'darkblue3': 'linear-gradient(to top left, #004170, #1E1D21, #00356B)',
        
      },

      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}