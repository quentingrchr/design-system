import React from "react";
import "./style.scss";
import { Link as RouterLink } from "react-router-dom";
import Text from "./../Text";

export interface LinkProps {
  text: string;
  to: string;
  className?: string
}

export default function Link({
  text = "Go",
  to = '/',
  className = ''
}) {
  return (
    <RouterLink to={to} className={className}>
      <Text
        tag="p"
        typo="body-m-underlined"
        content={text}
        color="primary-base"
      />
    </RouterLink>
  )
}