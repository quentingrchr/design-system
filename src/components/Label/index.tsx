import Text from "../Text";
import "./style.scss";

export interface IProps {
  content: string;
  labelFor: string;
}

export default function Label({ content, labelFor, ...otherProps }: IProps) {
  return (
    <Text
      content={content}
      attributes={{ for: labelFor, ...otherProps }}
      tag="label"
      typo="label"
    />
  );
}
