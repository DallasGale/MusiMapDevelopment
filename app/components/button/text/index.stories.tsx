import { type Meta, type StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";

import ComponentToTest from ".";

const meta = {
  title: "Components / Button / Text",
  component: ComponentToTest,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    onClick: () => fn(),
    label: "text",
  },
} satisfies Meta<typeof ComponentToTest>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
