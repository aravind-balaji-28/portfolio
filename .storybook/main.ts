import type { StorybookConfig } from "@storybook/nextjs";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

  webpackFinal: async (config) => {
    config.resolve = config.resolve || {};
    config.resolve.fallback = {
      ...(config.resolve.fallback || {}),
      stream: path.resolve(
        __dirname,
        "../node_modules/stream-browserify"
      ),
    };
    return config;
  },
};

export default config;
