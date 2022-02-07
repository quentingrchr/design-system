import { ColorsType } from "../../types";
import "./style.scss";
import Text from "../Text";

export type BottomTextType = "success" | "error" | "help";

export interface IProps {
  text: string;
  type: BottomTextType;
}

export type ColorsMap = {
  [type in BottomTextType]: ColorsType;
};

export default function BottomText({ text, type }: IProps) {
  const textColor: ColorsMap = {
    success: "status-success",
    error: "status-danger",
    help: "grey-darken",
  };

  if (!text) return null;

  return <Text tag="p" typo="body-m" content={text} color={textColor[type]} />;
}
