import { type Meta, type StoryObj } from "@storybook/nextjs-vite";

import ComponentToTest from ".";

const meta = {
  title: "Components / Chart",
  component: ComponentToTest,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    category: "genres",
    data: [
      {
        name: "rock",
        value: 85,
        color: "red",
      },
      {
        name: "pop rock",
        value: 52,
        color: "blue",
      },
      {
        name: "pop",
        value: 50,
        color: "green",
      },
      {
        name: "alternative rock",
        value: 40,
        color: "orange",
      },
    ],
  },
} satisfies Meta<typeof ComponentToTest>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
