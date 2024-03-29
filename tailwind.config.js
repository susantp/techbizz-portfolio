/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./layout/**/*.{js,ts,jsx,tsx}",
        "./hooks/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
        //     screens: {
        //         'sxm': '320px',
        //         // => @media (min-width: 320px) { ... }
        //         'sm': '640px',
        //         // => @media (min-width: 640px) { ... }
        //
        //         'md': '768px',
        //         // => @media (min-width: 768px) { ... }
        //
        //         'lg': '1024px',
        //         // => @media (min-width: 1024px) { ... }
        //
        //         'xl': '1280px',
        //         // => @media (min-width: 1280px) { ... }
        //
        //         '2xl': '1536px',
        //         // => @media (min-width: 1536px) { ... }
        //     },
            colors: {
                brown: {
                    50: '#fdf8f6',
                    100: '#f2e8e5',
                    200: '#eaddd7',
                    300: '#e0cec7',
                    400: '#d2bab0',
                    500: '#bfa094',
                    600: '#a18072',
                    700: '#977669',
                    800: '#846358',
                    900: '#43302b',
                },
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
}
