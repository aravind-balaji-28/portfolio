import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Select } from "../components/Select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["outlined", "filled", "standard"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);
 console.log(value ,">value");
    return (
      <Select
        {...args}
        value={value}
        onChange={(_, val) => setValue(val)}
      />
    );
  },
  args: {
    label: "Service of Interest",
    variant: "outlined",
    value: '',
    options: [
      { label: "Mern Stack Developer", value: "Mern Stack Developer" },
      { label: "Frontend Developer", value: "Frontend Developer" },
      { label: "Backend Developer", value: "Backend Developer" },
    ],
  },
};
