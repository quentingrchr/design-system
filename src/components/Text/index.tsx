import React from "react";
import "./style.scss";
import { HTMLTextTag, TextTypography } from "../../types";

export interface IProps {
  tag: HTMLTextTag;
  content: string;
  typo: TextTypography;
}
export default function Text({
  tag = "p",
  content = "content",
  typo = "body-m",
}: IProps) {
  const element = React.createElement(tag, { class: `text ${typo}` }, content);
  return element;
}
