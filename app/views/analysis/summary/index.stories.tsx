import { type Meta, type StoryObj } from "@storybook/nextjs-vite";

import ComponentToTest from ".";
import { summary } from "@/app/_mocks/analysis";

const meta = {
  title: "Views / Analysis / Summary",
  component: ComponentToTest,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    items: summary.items,
  },
} satisfies Meta<typeof ComponentToTest>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
