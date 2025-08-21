import { type Meta, type StoryObj } from "@storybook/nextjs-vite";

import ComponentToTest from ".";

import { headColumns, rows } from "@mocks/tag/clients/tableData";
import ActionButton from "@components/button/action";
import { fn } from "storybook/internal/test";
import ActionsGroup from "@components/actionGroup";

const meta = {
  title: "Components / Table",
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
    title: "Table Title",
    headColumns: headColumns.slice(0, headColumns.length - 1),
    rows: rows,
  },
};

export const WithActions: Story = {
  render: (args) => <ComponentToTest {...args} />,
  args: {
    title: "Table Title",
    titleActions: <ActionButton onClick={() => null} label="action" />,
    headColumns: headColumns,
    rows: rows,
    rowActions: (
      <ActionsGroup>
        <ActionButton onClick={() => null} label="action" />
        <ActionButton onClick={() => null} label="action" />
      </ActionsGroup>
    ),
  },
};

export const WithPagination: Story = {
  render: (args) => <ComponentToTest {...args} />,
  args: {
    title: "Table Title",
    headColumns: headColumns,
    rows: rows,
    pagination: {
      limit: 10,
      total: 30,
      page: 1,
      setPage: fn(),
    },
    rowActions: (
      <ActionsGroup>
        <ActionButton onClick={() => null} label="action" />
        <ActionButton onClick={() => null} label="action" />
      </ActionsGroup>
    ),
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
