import { type Meta, type StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";

import ComponentToTest from ".";

// Data
import { headerItems } from "@components/header/headerItems";
import navItems from "@/app/_mocks/header";

const meta = {
  title: "Components / Navigation",
  component: ComponentToTest,
  parameters: {
    layout: "padded",
    nextjs: {
      navigation: {
        segments: [["lang", "en"]],
      },
    },
  },
  tags: ["autodocs"],
  args: {
    navItems: navItems.primary,
  },
} satisfies Meta<typeof ComponentToTest>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const HoverNavItem: Story = {
  play: async ({ canvasElement, userEvent }) => {
    const canvas = within(canvasElement);

    const navLink = canvas.getByText("Discover");
    const initialStyle = window.getComputedStyle(navLink);
    expect(initialStyle.color).toBe("rgb(124, 124, 124)");

    // Hover State
    await userEvent.hover(navLink);
    const hoverColor = window.getComputedStyle(navLink);
    expect(hoverColor.color).toBe("rgb(255, 255, 255)");
  },
};
