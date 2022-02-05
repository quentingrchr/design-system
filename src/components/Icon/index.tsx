import { ReactComponent as Check } from "../../assets/icons/check.svg";
import { ReactComponent as Cross } from "../../assets/icons/cross.svg";
import { ReactComponent as EyeOpen } from "../../assets/icons/eye-open.svg";
import { ReactComponent as EyeSlashed } from "../../assets/icons/eye-slashed.svg";
import { ReactComponent as Plus } from "../../assets/icons/plus.svg";

import "./style.scss";

import { IconsType, ColorsType } from "../../types";

export interface IProps {
  type: IconsType;
  color?: ColorsType;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
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

export default function Icon({ type, color, onClick = () => {} }: IProps) {
  return (
    <div onClick={(e) => onClick(e)} className={`icon icon--${color}`}>
      {Icons[type]}
    </div>
  );
}
