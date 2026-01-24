import type { Meta, StoryObj } from "@storybook/nextjs"
import { Button } from "../components/Button";
const meta: Meta<typeof Button> = {
  title: "Component/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
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
    /** ---------------- Appearance ---------------- */
    variant: {
      control: "select",
      options: ["filled", "outlined", "transparent"],
      description: "Defines the visual style of the button",
      table: {
        category: "Appearance",
      },
    },
    size: {
      control: "select",
      options: ["md", "lg"],
      description: "Controls the size of the button",
      table: {
        category: "Appearance",
      },
    },
    color: {
      control: "select",
      options: ["primary", "dark"],
      description: "Sets the color theme of the button",
      table: {
        category: "Appearance",
      },
    },
    borderRadius: {
      control: "select",
      options: ["corner", "rounded"],
      description: "Sets the color theme of the button",
      table: {
        category: "Appearance",
      },
    },
    /** ---------------- Content ---------------- */
    text: {
      control: "text",
      description: "Text displayed inside the button",
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
    iconPosition: {
      control: "select",
      options: ["left", "right"],
      description: "Position of the icon relative to the text",
      table: {
        category: "Content",
      },
    },
    isIconOnly: {
      control: "boolean",
      description: "Displays only the icon without text",
      table: {
        category: "Content",
      },
    },

    /** ---------------- Behavior ---------------- */
    disabled: {
      control: "boolean",
      description: "Disables the button interaction",
      table: {
        category: "Behavior",
      },
    },
    onClick: {
      action: "clicked",
      description: "Triggered when the button is clicked",
      table: {
        category: "Behavior",
      },
    },

    /** ---------------- HTML Attributes ---------------- */
    type: {
      control: "select",
      options: ["button", "submit", "reset"],
      description: "Native HTML button type",
      table: {
        category: "HTML Attributes",
      },
    },
  }

}
export default meta;
type Story = StoryObj<typeof Button>
const content = {
  text: "Button"
}
const defaultValues = {
  size: "md",
  color: "primary",
  borderRadius: "corner",
  isIconOnly: false,
  text: content.text,
  iconPosition: "left",
  disabled: false,
  type: "button",
} as const
export const Filled: Story = {
  args: {
    ...defaultValues,
    variant: "filled",
  },
}
export const Outlined: Story = {
  args: {
    ...defaultValues,
    variant: "outlined",
  }
}


export const Rounded: Story = {
  args: {
    ...defaultValues,
    variant: "filled",
    borderRadius: "rounded"
  }
}

export const IconOnly: Story = {
  args: {
    ...defaultValues,
    variant: "filled",
    icon: "add",
    isIconOnly: true,
  },
};
export const IconLeft: Story = {
  args: {
    ...defaultValues,
    variant: "filled",
    icon: "add",
    size: "md"
  },
};
export const IconRight: Story = {
  args: {
    ...defaultValues,
    variant: "filled",
    icon: "add",
    iconPosition: "right",
  },
};


export const Disabled: Story = {
  args: {
    ...defaultValues,
    variant: "filled",
    disabled: true,
  },
};

