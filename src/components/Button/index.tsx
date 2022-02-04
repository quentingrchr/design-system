import React from "react";
import cn from "classnames/bind";
import { BtnType } from "../../types";
import "./style.scss";

export interface ButtonProps {
  text: string;
  type: BtnType
}

export default function Button({
  text = "test",
  type = "primary"
}: ButtonProps) {
  return (
    <button
      className={cn('btn', `btn--${type}`)}
    >
      {text}
    </button>
  );
}
