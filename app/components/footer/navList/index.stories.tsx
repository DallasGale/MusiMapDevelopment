import { type Meta, type StoryObj } from "@storybook/nextjs-vite";

import ComponentToTest from ".";

// Data
import { navItems } from "@components/footer/navItems";

const meta = {
  title: "Components / Footer / Nav List",
  component: ComponentToTest,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    heading: navItems[0].heading,
    items: navItems[0].items,
  },
} satisfies Meta<typeof ComponentToTest>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// export const HoverNavItem: Story = {
//   play: async ({ canvasElement, userEvent }) => {
//     const canvas = within(canvasElement);

//     const navLink = canvas.getByText('Discover');
//     const initialStyle = window.getComputedStyle(navLink);
//     expect(initialStyle.color).toBe('rgb(124, 124, 124)');

//     // Hover State
//     await userEvent.hover(navLink);
//     const hoverColor = window.getComputedStyle(navLink);
//     expect(hoverColor.color).toBe('rgb(255, 255, 255)');
//   },
// };
