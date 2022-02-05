import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Box from "../Box";

import Stack, {
  VStack,
  HStack,
  IBaseStackProps,
  IExplicitStackProps,
} from "./index";

export default {
  title: "Stack",
  component: Stack,
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args: IExplicitStackProps) => (
  <Stack {...args}>
    <Box w={100} h={100} bg="DodgerBlue" />
    <Box w={100} h={100} bg="MediumSeaGreen" />
    <Box w={100} h={100} bg="Violet" />
  </Stack>
);

const Default = Template.bind({});

Default.args = {
  alignItems: "center",
  justifyContent: "start",
  spacing: "md",
  direction: "col",
};

const TemplateH: ComponentStory<typeof Stack> = (args: IExplicitStackProps) => (
  <HStack {...args}>
    <Box w={100} h={100} bg="DodgerBlue" />
    <Box w={100} h={100} bg="MediumSeaGreen" />
    <Box w={100} h={100} bg="Violet" />
  </HStack>
);

const HorizontalStack = TemplateH.bind({});

HorizontalStack.args = {
  alignItems: "center",
  justifyContent: "start",
  spacing: "md",
};

const TemplateV: ComponentStory<typeof Stack> = (args: IExplicitStackProps) => (
  <VStack {...args}>
    <Box w={100} h={100} bg="DodgerBlue" />
    <Box w={100} h={100} bg="MediumSeaGreen" />
    <Box w={100} h={100} bg="Violet" />
  </VStack>
);

const VerticalStack = TemplateV.bind({});

VerticalStack.args = {
  alignItems: "center",
  justifyContent: "start",
  spacing: "md",
};

export { Default, VerticalStack, HorizontalStack };
