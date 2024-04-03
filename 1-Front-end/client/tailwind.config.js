/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        navbar: "#1e272e",
        navbar_input: "#ffa801",
        footer: "#1e272e",
        footer_input: "#ffa801",
        body: "#485460",
        body_page: "#485460",
        "btn-subscription": "#546E7A",
        "btn-contact": "#455A64",
        "btn-share": "#37474F",
        "btn-help": "#263238",
      },
      textColor: {
        navbar: "#1e272e",
        footer: "#1e272e",
        body: "#d2dae2",
        halo: "#ffa801",
        "title-home": "#ff6b6b",
      },
      keyframes: {
        growShrink: "growShrink",
      },
      animation: {
        growShrink: "growShrink",
      },
    },
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [require("daisyui")],
};
