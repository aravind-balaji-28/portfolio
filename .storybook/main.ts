import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [
    "../app/stories/**/*.stories.@(ts|tsx)",
    "../app/components/**/*.stories.@(ts|tsx)",
  ],

  addons: ["@storybook/addon-docs"],

  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
};

export default config;
