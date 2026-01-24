// Input.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../components/Input";

const meta: Meta<typeof Input> = {
  title: "Component/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: "text",
      description: "ID for the input field",
      table: {
        category: "Props",
      },
    },
    label: {
      control: "text",
      description: "Label for the input field",
      table: {
        category: "Props",
      },
    },
    variant: {
     control: "select",
     options: ["filled", "outlined", "standard"] ,
      description: "Material UI TextField variant",
      table: {
        category: "Props",
      },
    },
    className: {
      control: "text",
      description: "Additional CSS class for the wrapper div",
      table: {
        category: "Styling",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    id: "filled-basic",
    label: "UserName",
    variant: "filled",
    className: "",
  },
};
