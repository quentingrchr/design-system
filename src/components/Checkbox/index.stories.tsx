import { ComponentStory, ComponentMeta } from "@storybook/react";
import Checkbox from "./index";

export default {
  title: "Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = () => (
  <Checkbox />
);

const Primary = Template.bind({});

export { Primary };