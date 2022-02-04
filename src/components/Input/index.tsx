import React from "react";
import "./style.scss";
import { InputType } from "../../types";
export interface IProps {
  type: InputType;
}

export default function Input({ type = "text" }: IProps) {
  return (
    <div className="input">
      <input type={type} className="input__input" />
    </div>
  );
}
