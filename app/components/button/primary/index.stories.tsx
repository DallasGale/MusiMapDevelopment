import { type Meta, type StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";

import ComponentToTest from ".";

const meta = {
  title: "Components / Button / Primary",
  component: ComponentToTest,
  // parameters: {
  //   layout: "padded",
  // },
  tags: ["autodocs"],
  args: {
    onClick: () => fn(),
    label: "action",
  },
} satisfies Meta<typeof ComponentToTest>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// export const HoverNavItem: Story = {
//   play: async ({ canvasElement, userEvent }) => {
//     const canvas = within(canvasElement);

//     const navLink = canvas.getByText("Discover");
//     const initialStyle = window.getComputedStyle(navLink);
//     expect(initialStyle.color).toBe("rgb(124, 124, 124)");

//     // Hover State
//     await userEvent.hover(navLink);
//     const hoverColor = window.getComputedStyle(navLink);
//     expect(hoverColor.color).toBe("rgb(255, 255, 255)");
//   },
// };

// This test checks if the sub-nav is visible when a link is
// todo: define some sort of check to know a link will
// display a sub-nav of just be a link.
// expect the sub nav link to not be a link.
// export const SubNavVisible: Story = {
//   play: async ({ canvasElement, userEvent  }) => {
//     const canvas = within(canvasElement);
//     const subNavParent  = canvas.getByRole("sub-nav-parent");
//     await userEvent.hover(subNavParent);

//     const subNav = canvas.getByTestId("tag-nav-list");
//     expect(subNav).toBeVisible();
//   },
// };
