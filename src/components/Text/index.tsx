import React from "react";
import "./style.scss";
import { HTMLTextTag, TextTypography, ColorsType } from "../../types";

export interface IProps {
  tag: HTMLTextTag;
  content: string;
  typo: TextTypography;
  color?: ColorsType;
  attributes?: any;
}
export default function Text({
  tag = "p",
  content = "content",
  typo = "body-m",
  color = "primary-dark",
  attributes = {},
}: IProps) {
  const element = React.createElement(
    tag,
    { className: `text ${typo} ${color}`, ...attributes },
    content
  );
  return element;
}
