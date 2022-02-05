import React from "react";
import cn from "classnames/bind";
import { ColorsType } from "types";
import "./style.scss";

type maxW = "sm" | "md" | "lg" | "xl";
type padding = "none" | "xs" | "sm" | "md" | "lg" | "xl";
interface IProps {
  maxW?: maxW;
  padding?: padding;
  center?: boolean;
  children: React.ReactNode;
  bgColor?: ColorsType;
}

export default function Container({
  children,
  center,
  maxW,
  padding,
  bgColor,
}: IProps) {
  return (
    <div
      className={cn(
        "container",
        { "container--center": center },
        `container--${maxW}`,
        `container--padding-${padding}`,
        `container--bg-color-${bgColor}`
      )}
    >
      {children}
    </div>
  );
}
