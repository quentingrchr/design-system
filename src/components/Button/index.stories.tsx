import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button, { ButtonProps } from "./index";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    label: {
      description: "Text to display on the button",
      table: {
        type: {
          summary: "Something short",
          detail: "Something really really long",
        },
      },
      color: {
        control: { type: "select" },
      },
      backgroundColor: {
        control: { type: "select" },
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
);

const Primary = Template.bind({});

Primary.args = {
  color: "primary-base",
  label: "test",
  backgroundColor: "primary-dark",
};

export { Primary };
