import React from "react";

interface IProps {
  w: number;
  h: number;
  bg: string;
}
export default function Box({ w, h, bg }: IProps) {
  return (
    <div
      style={{
        width: `${w}px`,
        height: `${h}px`,
        backgroundColor: `${bg}`,
      }}
    ></div>
  );
}
