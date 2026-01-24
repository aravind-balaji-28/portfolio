import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Select } from "../components/Select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
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

    return (
      <Select
        {...args}
        value={value}
        onChange={(_, val) => setValue(val)}
      />
    );
  },
  args: {
    label: "Age",
    variant: "outlined",
    value: 20,
    options: [
      { label: "Ten", value: 10 },
      { label: "Twenty", value: 20 },
      { label: "Thirty", value: 30 },
    ],
  },
};
