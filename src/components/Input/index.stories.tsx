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
};

const WithIcon = Template.bind({});

WithIcon.args = {
  type: "text",
};
/* todo: add icon */

export { Default };
