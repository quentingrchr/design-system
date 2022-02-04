import React from "react";
import cn from "classnames/bind";
import { ColorsType } from "../../types";
import styles from "./style.module.scss";

export interface ButtonProps {
  label: string;
  backgroundColor: ColorsType;
  color: ColorsType;
}

export default function Button({
  label = "test",
  backgroundColor = "primary-base",
  color = "primary-white",
}: ButtonProps) {
  return (
    <button
      className={cn(styles.btn, `bg-${backgroundColor}`, `text-${color}`)}
    >
      {label}
    </button>
  );
}
