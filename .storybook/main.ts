import type { StorybookConfig } from "@storybook/nextjs-vite";
import { mergeConfig } from "vite";
import path from "path";

const config: StorybookConfig = {
  stories: ["../app/**/*.mdx", "../app/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },
  staticDirs: ["../public"],
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "../app/[lng]"),
          "@components": path.resolve(__dirname, "../app/components"),
          "@assets": path.resolve(__dirname, "../app/assets"),
          "@app": path.resolve(__dirname, "../app[lng]"),
          "@views": path.resolve(__dirname, "../app/views"),
          "@i18n": path.resolve(__dirname, "../app/i18n"),
        },
      },
    });
  },
};
export default config;
