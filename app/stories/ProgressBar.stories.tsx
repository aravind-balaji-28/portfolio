import type { Meta, StoryObj } from "@storybook/nextjs";
import { ProgressBar } from "../components/ProgressBar";


const meta: Meta<typeof ProgressBar> = {
  title: "Component/ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],

  parameters: {
    layout: "centered",
    backgrounds: {
      default: "black",
      values: [
        { name: "black", value: "#000000" },
      ],
    },
  },

  argTypes: {
    /** ---------------- Styling ---------------- */
    className: {
      control: "text",
      description: "Custom CSS class for additional styling",
      table: {
        category: "Styling",
      },
    },

    /** ---------------- Content ---------------- */
    value: {
      control: {
        type: "number",
        min: 0,
        max: 100,
      },
      description: "Progress value as a percentage (0–100).",
      table: {
        category: "Content",
      },
    },

    icon: {
      control: "text",
      description: "Material icon name or custom React node",
      table: {
        category: "Content",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    value: 75,
    icon: "javascript",
    className: "dark", // ✅ THIS is where dark belongs
  },
};
