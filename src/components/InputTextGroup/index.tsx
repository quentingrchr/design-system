import { useState } from "react";
import cn from "classnames";
import { HStack, VStack } from "../Stack";
import { InputTextType, IconsType } from "../../types";
import "./style.scss";
import Input from "../Input";
import Label from "../Label";
import BottomText from "./BottomText";
import Link from "../Link";

type LinkType = {
  href: string;
  text: string;
};
export interface IProps {
  labelText: string;
  labelFor: string;
  placeholder: string;
  inputType?: InputTextType;
  helpText?: string;
  successText?: string;
  errorText?: string;
  inputIcon?: IconsType | "";
  disabled?: boolean;
  link?: LinkType | null;
}

export default function InputTextGroup({
  labelText = "Label",
  labelFor = "label",
  helpText = "",
  successText = "",
  errorText = "",
  placeholder = "placeholder",
  inputType = "text",
  inputIcon = "",
  disabled = false,
  link = null,
}: IProps) {
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const updateIsValid = (value: boolean | null) => {
    if (disabled) return;
    setIsValid(value);
  };

  const Bottom = () => {
    if (disabled) return;
    if (isValid === true && successText) {
      return <BottomText text={successText} type="success" />;
    } else if (isValid === false && errorText) {
      return <BottomText text={errorText} type="error" />;
    } else {
      if (helpText) {
        return <BottomText text={helpText} type="help" />;
      }
      return null;
    }
  };

  return (
    <div
      className={cn("input-text-group", {
        "input-text-group--disabled": disabled,
      })}
    >
      <VStack alignItems="start" justifyContent="center" spacing="sm">
        <HStack alignItems="center" justifyContent="sp-between" spacing="none">
          <Label labelFor={labelFor} content={labelText} />
          {link && <Link text={link.text} to={link.href} />}
        </HStack>
        <VStack alignItems="start" justifyContent="center" spacing="xs">
          <Input
            disabled={disabled}
            placeholder={placeholder}
            type={inputType}
            icon={inputIcon}
            onValidChange={updateIsValid}
          />
          <div className="input-text-group__info">{Bottom()}</div>
        </VStack>
      </VStack>
    </div>
  );
}
