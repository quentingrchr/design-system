import React from "react";
import cn from "classnames/bind";
import { BtnType } from "../../types";
import "./style.scss";

export interface ButtonProps {
  text: string;
  type: BtnType;
  fullWidth?: boolean;
}

export default function Button({
  text = "test",
  type = "primary",
  fullWidth = false,
}: ButtonProps) {
  return (
    <button
      className={cn("btn", `btn--${type}`, { "btn--full-width": fullWidth })}
    >
      {text}
    </button>
  );
}
