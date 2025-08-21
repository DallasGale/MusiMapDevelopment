import { type Meta, type StoryObj } from "@storybook/nextjs-vite";

import ComponentToTest from ".";

const meta = {
  title: "Views / Analysis / Summary / Item",
  component: ComponentToTest,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    title: "Title",
    value: "Value",
  },
} satisfies Meta<typeof ComponentToTest>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
