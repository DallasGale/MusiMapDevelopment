import { type Meta, type StoryObj } from "@storybook/nextjs-vite";

import ComponentToTest from ".";

import { items } from "@mocks/tag/sidebar";
import { componentList } from "@views/tag/search/";

const meta = {
  title: "Components / Sidebar",
  component: ComponentToTest,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    items: items,
    itemContent: componentList,
  },
} satisfies Meta<typeof ComponentToTest>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <ComponentToTest {...args} />,
  args: {},
};
