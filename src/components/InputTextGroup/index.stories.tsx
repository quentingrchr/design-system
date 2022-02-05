import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputTextGroup, { IProps } from "./index";

export default {
  title: "InputTextGroup",
  component: InputTextGroup,
} as ComponentMeta<typeof InputTextGroup>;

const Template: ComponentStory<typeof InputTextGroup> = (args: IProps) => (
  <InputTextGroup {...args} />
);

const Default = Template.bind({});

Default.args = {
  labelText: "label",
  labelFor: "label",
  placeholder: "placeholder",
  inputType: "text",
  inputIcon: "check",
};

const InputGroupWithHelper = Template.bind({});

InputGroupWithHelper.args = {
  labelText: "label",
  labelFor: "label",
  helpText: "Help text 🤔",
  placeholder: "placeholder",
  inputType: "text",
  inputIcon: "check",
};

const InputGroupWithSuccess = Template.bind({});

InputGroupWithSuccess.args = {
  labelText: "email",
  labelFor: "email",
  helpText: "Help text 🤔",
  successText: "Success text ✅",
  placeholder: "placeholder@gmail.com",
  inputType: "email",
  inputIcon: "check",
};

const InputGroupWithError = Template.bind({});

InputGroupWithError.args = {
  labelText: "email",
  labelFor: "email",
  helpText: "Help text 🤔",
  errorText: "Error text ❌",
  placeholder: "placeholder@gmail.com",
  inputType: "email",
  inputIcon: "check",
};

const InputGroupWithSuccessAndErrorText = Template.bind({});

InputGroupWithSuccessAndErrorText.args = {
  labelText: "email",
  labelFor: "email",
  helpText: "Help text 🤔",
  errorText: "Error text ❌",
  successText: "Success text ✅",
  placeholder: "placeholder@gmail.com",
  inputType: "email",
  inputIcon: "check",
};

const InputGroupDisabled = Template.bind({});

InputGroupDisabled.args = {
  labelText: "email",
  labelFor: "email",
  helpText: "Help text 🤔",
  disabled: true,
  errorText: "Error text ❌",
  successText: "Success text ✅",
  placeholder: "placeholder@gmail.com",
  inputType: "email",
  inputIcon: "check",
};

export {
  Default,
  InputGroupWithHelper,
  InputGroupWithSuccess,
  InputGroupWithError,
  InputGroupWithSuccessAndErrorText,
  InputGroupDisabled,
};
