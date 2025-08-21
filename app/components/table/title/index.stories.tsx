import { type Meta, type StoryObj } from "@storybook/nextjs-vite";

import ComponentToTest from ".";

import ActionButton from "@components/button/action";

const meta = {
  title: "Components / Table / Title",
  component: ComponentToTest,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    title: "Our clients",
  },
} satisfies Meta<typeof ComponentToTest>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <ComponentToTest {...args} />,
  args: {},
};

export const WithActions: Story = {
  render: (args) => <ComponentToTest {...args} />,
  args: {
    actions: <ActionButton label="Action" onClick={() => null} />,
  },
};
