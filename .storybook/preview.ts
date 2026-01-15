import type { Preview } from "@storybook/nextjs";
import "../app/globals.css"; // Tailwind / global styles

const preview: Preview = {
  parameters: {
    layout: "centered",
  },
};

export default preview;
