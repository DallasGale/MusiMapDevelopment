import { type Meta, type StoryObj } from "@storybook/nextjs-vite";

import ComponentToTest from ".";

const meta = {
  title: "Components / Card Title",
  component: ComponentToTest,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    title: "Card Title",
  },
} satisfies Meta<typeof ComponentToTest>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
