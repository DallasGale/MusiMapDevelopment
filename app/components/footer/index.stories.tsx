import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import ComponentToTest from ".";
import navItems from "@mocks/footer";

const meta = {
  title: "Components / Footer",
  component: ComponentToTest,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    navItems: navItems,
  },
} satisfies Meta<typeof ComponentToTest>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
