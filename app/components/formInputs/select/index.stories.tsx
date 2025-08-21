import { type Meta, type StoryObj } from "@storybook/nextjs-vite";

import ComponentToTest from ".";
import { fn } from "storybook/internal/test";
const meta = {
  title: "Components / Form Inputs / Select",
  component: ComponentToTest,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    data: ["item1", "item2"],
    placeholder: "Select",
    setInputValue: fn(),
  },
} satisfies Meta<typeof ComponentToTest>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
