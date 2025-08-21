import { type Meta, type StoryObj } from "@storybook/nextjs-vite";

import ComponentToTest from ".";

import { mockColumns, mockColorColumns } from "../_mock";
import { Table } from "@mantine/core";

const meta = {
  title: "Components / Table / Head",
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
  render: (args) => (
    <Table>
      <ComponentToTest {...args} />
    </Table>
  ),
  args: {
    headColumns: mockColumns,
  },
};

export const WithColor: Story = {
  render: (args) => (
    <Table>
      <ComponentToTest {...args} />
    </Table>
  ),
  args: {
    headColumns: mockColorColumns,
  },
};

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
