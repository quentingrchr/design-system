import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button, { IProps } from "./index";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: IProps) => (
  <Button {...args} />
);

const Primary = Template.bind({});

Primary.args = {
  label: "register",
  backgroundColor: "primary-base",
  color: "primary-white"
};

const Disabled = Template.bind({});

Disabled.args = {
  label: "register",
  backgroundColor: "primary-base",
  color: "primary-white"
};

export { Primary, Disabled };
