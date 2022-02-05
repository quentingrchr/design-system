import { useState, useEffect } from "react";
import { VStack } from "../Stack";
import "./style.scss";
import Input from "../Input";
import Label from "../Label";
import Text from "../Text";

export default function InputTextGroup() {
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const updateIsValid = (value: boolean | null) => {
    setIsValid(value);
  };

  return (
    <div className="input-text-group">
      <VStack alignItems="start" justifyContent="center" spacing="sm">
        <div>
          <Label name="name" content="email" />
          {/* todo add link btn */}
        </div>
        <VStack alignItems="start" justifyContent="center" spacing="xs">
          <Input
            placeholder="placeholder"
            type="text"
            icon="check"
            onValidChange={updateIsValid}
          />
          <div className="input-text-group__info">
            {/* todo add sucess messsage if valid */}
            {/* todo add error message if not valid */}
            <Text
              tag="p"
              typo="body-m"
              content="here are additionnal informations"
              color={
                isValid === null
                  ? "primary-dark"
                  : isValid
                  ? "success-base"
                  : "danger-base"
              }
            />
          </div>
        </VStack>
      </VStack>
    </div>
  );
}
