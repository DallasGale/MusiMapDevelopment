import { type Meta, type StoryObj } from "@storybook/nextjs-vite";

import ComponentToTest from ".";
import { artist } from "@/app/_mocks/analysis";

const meta = {
  title: "Views / Analysis / Results",
  component: ComponentToTest,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    artist: artist,
  },
} satisfies Meta<typeof ComponentToTest>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
