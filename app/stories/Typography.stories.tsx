
import type { Meta, StoryObj } from "@storybook/nextjs"

import { Typography } from "../components/Typography";


const meta: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
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
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "body"],
      description: "Defines the typography style and semantic level",
      table: {
        category: "Appearance",
      },
    },

    /** ---------------- Content ---------------- */
    children: {
      control: "text",
      description: "Text content rendered inside the typography component",
      table: {
        category: "Content",
      },
    },

  },
}

export default meta;

type Story = StoryObj<typeof Typography>

const content = {
  text: "Hello"
}
export const H1: Story = {
  args: {
    variant: "h1",
    children: content.text,
  },
}
export const H2: Story = {
  args: {
    variant: "h2",
    children: content.text,
  },
}

export const H3: Story = {
  args: {
    variant: "h3",
    children: content.text,
  },
}

export const H4: Story = {
  args: {
    variant: "h4",
    children: content.text,
  },
}
export const H5: Story = {
  args: {
    variant: "h5",
    children: content.text,
  },
}

export const H6: Story = {
  args: {
    variant: "h6",
    children: content.text,
  },
}

export const body: Story = {
  args: {
    variant: "body",
    children: content.text,
  },
}