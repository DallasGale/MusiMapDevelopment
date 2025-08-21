import { type Meta, type StoryObj } from "@storybook/nextjs-vite";

import ComponentToTest from ".";

const meta = {
  title: "Views / Home / Go Big",
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
