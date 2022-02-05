import React from "react";
import cn from "classnames";
import "./style.scss";

export interface IBaseStackProps {
  children: React.ReactNode;
  justifyContent: "start" | "end" | "center" | "sp-between" | "sp-around";
  alignItems: "start" | "end" | "center" | "sp-between" | "sp-around";
  spacing: "lg" | "md" | "sm" | "xs" | "none";
}

export interface IExplicitStackProps extends IBaseStackProps {
  direction: "row" | "col";
}

export default function Stack({
  children,
  direction = "col",
  justifyContent = "start",
  alignItems = "start",
  spacing = "md",
}: IExplicitStackProps) {
  const directionClass = direction === "row" ? "stack-h" : "stack-v";

  return (
    <div
      className={cn(
        "stack",
        directionClass,
        `align-${alignItems}`,
        `justify-${justifyContent}`,
        `spacing-${spacing}`
      )}
    >
      {children}
    </div>
  );
}

export function VStack(props: IBaseStackProps) {
  return <Stack direction="col" {...props}></Stack>;
}

export function HStack(props: IBaseStackProps) {
  return <Stack direction="row" {...props}></Stack>;
}
