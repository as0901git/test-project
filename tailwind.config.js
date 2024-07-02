/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#13126C",
        secondary: "#3667E9",
        gray: "#E7E9EF",
        main: "#171731",
        sub: "#65657B",
        btn: "#3667E9",
        border: "#6D7088",
        error: "#C34648",
      },
    },
    fontFamily: {
      georgia: ["Georgia"],
      arial: ["Arial"],
    },
  },
  plugins: [],
};
