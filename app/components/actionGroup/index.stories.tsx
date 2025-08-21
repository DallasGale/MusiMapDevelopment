import { type Meta, type StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";

import ComponentToTest from ".";
import ActionButton from "@components/button/action";

const meta = {
  title: "Components / Actions Group",
  component: ComponentToTest,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof ComponentToTest>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <ComponentToTest {...args} />,
  args: {
    children: (
      <>
        <ActionButton onClick={() => fn()} label="action" />
        <ActionButton onClick={() => fn()} label="action" />
      </>
    ),
  },
};
