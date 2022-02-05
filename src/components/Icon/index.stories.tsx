import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Icon, { IProps } from "./index";

export default {
  title: "Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args: IProps) => (
  <Icon {...args} />
);

const Default = Template.bind({});

Default.args = {
  type: "check",
  color: "primary-base",
};

const ActionIcon = Template.bind({});
ActionIcon.args = {
  type: "check",
  color: "primary-base",
  onClick: () => {
    alert("clicked");
  },
};
export { Default, ActionIcon };
