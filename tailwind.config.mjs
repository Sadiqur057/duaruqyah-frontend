/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        body: "rgb(243, 244, 246)",
        primary: "rgb(31, 164, 91)",
        dark: "rgb(57, 57, 57)",
        light: "rgb(126, 126, 126)",
      },
    },
  },
  plugins: [],
};
