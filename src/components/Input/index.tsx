import React from "react";
import { useState, useEffect } from "react";
import cn from "classnames";
import "./style.scss";
import { InputTextType, IconsType } from "../../types";
import Icon from "../Icon";

export interface IProps {
  type: InputTextType;
  placeholder: string;
  icon?: IconsType | "";
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickOnIcon?: () => void;
  onValidChange?: (isValid: boolean | null) => void;
}

export default function Input({
  type = "text",
  placeholder = "placeholder",
  disabled = false,
  onChange = () => {},
  onValidChange = () => {},
  onClickOnIcon = () => {},
  icon,
}: IProps) {
  const [isValid, setIsValid] = useState<boolean | null>(null);

  useEffect(() => {
    onValidChange(isValid);
  }, [isValid]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsValid(e.target.validity.valid);
    if (e.target.value === "") {
      setIsValid(null);
    }
  };

  return (
    <div
      className={cn("input", {
        "input--invalid": !isValid && isValid !== null,
        "input--valid": isValid && isValid !== null,
        "input--disabled": disabled,
      })}
    >
      <input
        onChange={(e) => {
          e.preventDefault();
          if (!disabled) {
            onChange(e);
            handleChange(e);
          }
        }}
        type={type}
        className="input__input"
        placeholder={placeholder}
      />
      {icon ? (
        <Icon
          type={icon}
          color={
            isValid === null
              ? "primary-dark"
              : isValid
              ? "status-success"
              : "status-danger"
          }
        />
      ) : null}
    </div>
  );
}
