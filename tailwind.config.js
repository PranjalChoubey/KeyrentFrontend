/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        aliceblue: "#def0f4",
        secondary: "#1d5e6d",
        text1: "#616161",
        primary: "#00d095",
        "row-color": "#f1f6f7",
        mistyrose: "#f5dbdb",
        tomato: "#fc5858",
        gainsboro: "#dbdbdb",
        darkgray: "#9c9c9c",
        lightblue: "#caebfe",
        steelblue: "#2e95ce",
        palegoldenrod: "#d5f3b8",
        yellowgreen: "#64b316",
        tertiary: "#e1f4f5",
        background: "#f7f9fa",
        black: "#000",
        text: "#2c2c30",
      },
      spacing: {},
      fontFamily: {
        "head5-2-23-med": "Poppins",
        inter: "Inter",
      },
      borderRadius: {
        "9xl": "28px",
        "2xs-4": "10.4px",
        "22xl": "41px",
        "59xl": "78px",
      },
    },
    fontSize: {
      base: "16px",
      lgi: "19px",
      "45xl": "64px",
      "7xl": "26px",
      smi: "13px",
      "4xl": "23px",
      "base-9": "16.9px",
      "331xl": "350px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
