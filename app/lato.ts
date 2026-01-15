import localFont from "next/font/local";
export const lato = localFont({
  src: [
    {
      path: "../public/fonts/Lato-Hairline.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Lato-HairlineItalic.ttf",
      weight: "100",
      style: "italic",
    },

    { path: "../public/fonts/Lato-Light.ttf", weight: "300", style: "normal" },
    {
      path: "../public/fonts/Lato-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },

    {
      path: "../public/fonts/Lato-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    { path: "../public/fonts/Lato-Italic.ttf", weight: "400", style: "italic" },

    { path: "../public/fonts/Lato-Bold.ttf", weight: "700", style: "normal" },
    {
      path: "../public/fonts/Lato-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },

    { path: "../public/fonts/Lato-Black.ttf", weight: "900", style: "normal" },
    {
      path: "../public/fonts/Lato-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-lato",
  display: "swap",
});
