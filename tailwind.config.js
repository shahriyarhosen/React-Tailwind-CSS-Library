module.exports = {
  content: ["./src/**/*.{html,js}"],
  themes: [
    {
      light: {
        primary: "#570DF8",
        secondary: "#F000B8",
        accent: "#37CDBE",
        neutral: "#3D4451",
        "base-100": "#FFFFFF",
        info: "#3ABFF8",
        success: "#36D399",
        warning: "#FBBD23",
        error: "#F87272",
      },
    },
    "dark",
    "cupcake",
  ],
  plugins: [require("daisyui")],
};
