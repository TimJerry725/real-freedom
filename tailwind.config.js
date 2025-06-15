/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)'],
                merriweather: ['var(--font-merriweather)'],
            },
            borderColor: {
                border: 'hsl(var(--border))',
            },
            backgroundColor: {
                background: 'hsl(var(--background))',
            },
            textColor: {
                foreground: 'hsl(var(--foreground))',
            },
        },
    },
    plugins: [],
} 