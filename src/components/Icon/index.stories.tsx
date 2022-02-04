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

const Primary = Template.bind({});

Primary.args = {
  type: "check",
};

export { Primary };
