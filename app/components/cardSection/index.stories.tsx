import { type Meta, type StoryObj } from "@storybook/nextjs-vite";

import ComponentToTest from ".";
import { summary } from "@/app/_mocks/analysis";

const meta = {
  title: "Components / Card Section",
  component: ComponentToTest,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    title: "Title",
    children: <div>Children</div>,
  },
} satisfies Meta<typeof ComponentToTest>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
