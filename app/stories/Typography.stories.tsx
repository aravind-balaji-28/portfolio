
import type { Meta, StoryObj } from "@storybook/nextjs"

import { Typography } from "../components/Typography"

const meta: Meta<typeof Typography> = {
    title: "Component/Typography",
    component: Typography,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof Typography>

export const Default: Story = {
   args: {
    variant: "body",
    children: "Hello",
  },
}