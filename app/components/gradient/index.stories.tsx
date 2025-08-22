import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import ComponentToTest from ".";
import navItems from "@/app/_mocks/header";
import { fn } from "storybook/internal/test";

const meta = {
  title: "Components / Gradient",
  component: ComponentToTest,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof ComponentToTest>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
  args: {
    size: "small",
  },
};
