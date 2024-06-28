import React from "react";
import Navbar from "./Navbar";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  component: Navbar,
  title: "ovb/Navbar",
} as Meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = (args) => <Navbar {...args} />;

Default.args = {
  fullWidth: false,
  width: 300,
  height: 50,
  dataLists: [
    { label: "p1", value: "p1" },
    { label: "p2", value: "p2" },
    { label: "p3", value: "p3" },
    { label: "p4", value: "p4" },
  ],
};
