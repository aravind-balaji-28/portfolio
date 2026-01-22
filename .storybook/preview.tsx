import type { Decorator, Preview } from "@storybook/react";
import "../app/fonts/storybook-font.css"; 
import "../app/icons.css";           
import "../app/globals.css";       
import "../app/storybook.css";       


const withFont: Decorator = (Story) => (
  <div className="font-base sb-top-center">
    <Story />
  </div>
);

const preview: Preview = {
  decorators: [withFont],
};

export default preview;
