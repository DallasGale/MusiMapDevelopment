import { type Meta, type StoryObj } from "@storybook/nextjs-vite";

import ComponentToTest from ".";
const meta = {
  title: "Views / Tag / Search",
  component: ComponentToTest,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    translation: {
      tagInput: {
        placeholder: "No tags currently selected",
      },
    },
  },
} satisfies Meta<typeof ComponentToTest>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
