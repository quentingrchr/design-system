import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input, { IProps } from "./index";

export default {
  title: "Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: IProps) => (
  <Input {...args} />
);

const Default = Template.bind({});

Default.args = {
  type: "text",
  placeholder: "placeholder",
};

const WithIcon = Template.bind({});

WithIcon.args = {
  type: "text",
  placeholder: "placeholder",
  icon: "check",
  onClickOnIcon: () => {
    alert("clicked");
  },
};

const Disabled = Template.bind({});

Disabled.args = {
  type: "text",
  placeholder: "placeholder",
  icon: "check",
  disabled: true,
};
export { Default, WithIcon, Disabled };
