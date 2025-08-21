import { type Meta, type StoryObj } from "@storybook/nextjs-vite";

import ComponentToTest from ".";

const meta = {
  title: "Components / Loading Overlay",
  component: ComponentToTest,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    loading: true,
  },
} satisfies Meta<typeof ComponentToTest>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <ComponentToTest {...args} />,
  args: {},
};
