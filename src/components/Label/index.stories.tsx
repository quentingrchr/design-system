import { ComponentStory, ComponentMeta } from "@storybook/react";
import Label, { IProps } from "./index";

export default {
  title: "Label",
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args: IProps) => (
  <Label {...args} />
);

const Default = Template.bind({});

Default.args = {
  content: "Label",
  labelFor: "label",
};

export { Default };
