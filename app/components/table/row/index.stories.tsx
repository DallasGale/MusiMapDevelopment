import { type Meta, type StoryObj } from "@storybook/nextjs-vite";

import ComponentToTest from ".";

import { mockColumns } from "../_mock";
import { Table } from "@mantine/core";
import ActionButton from "@components/button/action";

const meta = {
  title: "Components / Table / Row",
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
    columns: mockColumns,
    actions: null,
    isEven: false,
  },
};

export const WithActions: Story = {
  render: (args) => (
    <Table>
      <ComponentToTest {...args} />
    </Table>
  ),
  args: {
    columns: mockColumns,
    actions: <ActionButton onClick={() => null} label="action" />,
    isEven: false,
  },
};

export const OddEven: Story = {
  render: (args) => (
    <Table>
      <ComponentToTest {...args} isEven />
      <ComponentToTest {...args} />
    </Table>
  ),
  args: {
    columns: mockColumns,
    actions: <ActionButton onClick={() => null} label="action" />,
    isEven: false,
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
