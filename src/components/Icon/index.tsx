import { ReactComponent as Check } from "../../assets/icons/check.svg";
import { ReactComponent as Cross } from "../../assets/icons/cross.svg";
import { ReactComponent as EyeOpen } from "../../assets/icons/eye-open.svg";
import { ReactComponent as EyeSlashed } from "../../assets/icons/eye-slashed.svg";
import { ReactComponent as Plus } from "../../assets/icons/plus.svg";

import { IconsType, ColorsType } from "../../types";

export interface IProps {
  type: IconsType;
  color?: ColorsType;
}
interface IIcons {
  [String: string]: JSX.Element;
}
const Icons: IIcons = {
  check: <Check />,
  cross: <Cross />,
  "eye-open": <EyeOpen />,
  "eye-slashed": <EyeSlashed />,
  plus: <Plus />,
};

export default function Icon({ type, color = "primary-base" }: IProps) {
  return <div className={`fill-${color}`}>{Icons[type]}</div>;
}
