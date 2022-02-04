import { ComponentStory, ComponentMeta } from "@storybook/react";
import Text, { IProps } from "./index";

export default {
  title: "Text",
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args: IProps) => (
  <Text {...args} />
);

const Default = Template.bind({});

const Heading = Template.bind({});
Heading.args = {
  tag: "h1",
  content: "I am a heading",
  typo: "heading-l",
};

const Paragraph = Template.bind({});
Paragraph.args = {
  tag: "p",
  content: "I am a paragraph",
  typo: "body-m",
};

const ParagraphUnderlined = Template.bind({});
ParagraphUnderlined.args = {
  tag: "p",
  content: "I am a paragraph underlined",
  typo: "body-m-underlined",
};

const Label = Template.bind({});
Label.args = {
  tag: "p",
  content: "I am a label",
  typo: "label",
};

export { Default, Heading, Paragraph, ParagraphUnderlined, Label };
