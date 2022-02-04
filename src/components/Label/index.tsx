import Text from "../Text";
import "./style.scss";

export interface IProps {
  content: string;
  name: string;
}

export default function Label({ content, name, ...otherProps }: IProps) {
  return (
    <Text
      content={content}
      attributes={{ name, ...otherProps }}
      tag="label"
      typo="label"
    />
  );
}
