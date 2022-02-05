import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputTextGroup from "./index";

export default {
  title: "InputTextGroup",
  component: InputTextGroup,
} as ComponentMeta<typeof InputTextGroup>;

const Template: ComponentStory<typeof InputTextGroup> = (args: any) => (
  <InputTextGroup {...args} />
);

const Default = Template.bind({});

Default.args = {};

/* todo: add icon */

export { Default };
