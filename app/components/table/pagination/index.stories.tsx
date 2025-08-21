import { type Meta, type StoryObj } from "@storybook/nextjs-vite";

import ComponentToTest from ".";

import { fn } from "storybook/internal/test";

const meta = {
  title: "Components / Table / Pagination",
  component: ComponentToTest,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    page: 1,
    total: 90,
    setPage: fn(),
    limit: 8,
  },
} satisfies Meta<typeof ComponentToTest>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <ComponentToTest {...args} />,
  args: {},
};
