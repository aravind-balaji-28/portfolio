import type { Meta, StoryObj } from "@storybook/nextjs";
import { Tabs } from "../components/Tabs";

const meta: Meta<typeof Tabs> = {
    title: "Component/Tabs",
    component: Tabs,
    tags: ["autodocs"],

    parameters: {
        layout: "centered",
        backgrounds: {
            default: "white",
            values: [
                { name: "white", value: "#ffffff" },
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
        tabs: {
            control: "object",
            description: "Array of tab objects with `id` and `label`",
            table: {
                category: "Content",
            },
        },

        initialActiveTab: {
            control: "number",
            description: "ID of the tab to be active initially",
            table: {
                category: "Content",
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
    args: {
        className: "",
        tabs: [
            { id: 1, label: "All" },
            { id: 2, label: "Website Design" },
            { id: 3, label: "App mobile design" },
            { id: 4, label: "App desktop" },
            { id: 5, label: "Braiding" },
        ],
    },
};

export const CustomActive: Story = {
    args: {
        className: "",
        tabs: [
            { id: 1, label: "All" },
            { id: 2, label: "Website Design" },
            { id: 3, label: "App mobile design" },
            { id: 4, label: "App desktop" },
            { id: 5, label: "Braiding" },
        ],
        initialActiveTab: 2,
    },
};

