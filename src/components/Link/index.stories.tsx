import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Link from "./index";

export default {
  title: "Link",
  component: Link,
  argTypes: {
    text: {
      description: "Text to display",
      table: {
        type: {
          summary: "Something short",
          detail: "Something really really long",
        },
      },
    },
    to: {
      description: "Destination"
    }
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args: any) => (
  <Link {...args} />
);

const Primary = Template.bind({});

Primary.args = {
  text:"Go there",
  to:"/"
};

export { Primary };