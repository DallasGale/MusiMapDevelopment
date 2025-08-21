import { type Meta, type StoryObj } from "@storybook/nextjs-vite";

import ComponentToTest from ".";
import { fn } from "storybook/internal/test";
const meta = {
  title: "Components / Form Inputs / Analyser",
  component: ComponentToTest,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    placeholder: "Paste a song link (eg. Spotify, Apple Music, YouTube)",
    uploadUrl: "",
    setUploadUrl: fn(),
    uploadState: "idle",
  },
} satisfies Meta<typeof ComponentToTest>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    uploadState: "idle",
  },
};
export const Error: Story = {
  args: {
    uploadState: "error",
  },
};
export const Uploading: Story = {
  args: {
    uploadState: "uploading",
  },
};
export const Success: Story = {
  args: {
    uploadState: "success",
  },
};
