import { MantineProvider } from "@mantine/core";
import type { Preview } from "@storybook/nextjs-vite";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "../app/[lng]/globals.css";
import { theme } from "../app/[lng]/theme";
import { withThemeByClassName } from "@storybook/addon-themes";

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "error",
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: "",
        dark: "dark-theme",
      },
      defaultTheme: "dark",
    }),
    (Story) => {
      return (
        <MantineProvider defaultColorScheme="dark" theme={theme}>
          <Story />
        </MantineProvider>
      );
    },
  ],
};

export default preview;
