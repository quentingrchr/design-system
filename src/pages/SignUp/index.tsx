import React from "react";
import cn from "classnames/bind";
import "./style.scss";
import { VStack } from "./../../components/Stack";
import Text from "./../../components/Text";
import InputTextGroup from "./../../components/InputTextGroup";
import Button from "./../../components/Button";
import Link from "./../../components/Link";


export default function SignUp() {
  return (
    <div className="sign-up">
      <VStack alignItems="center" justifyContent="center" spacing="sm">
        <Text
          tag="h1"
          typo="heading-l"
          content="Sign Up"
          color="primary-dark"
        />
        <InputTextGroup />
        <InputTextGroup />
        <Button text="Register" type="primary" />
        <div className="sign-up__text-container">
          <Text
            tag="p"
            typo="body-m"
            content="Already got an account?"
            color="primary-dark"
          />
          <Link to="/" text="Login" className="sign-up__link" />
        </div>
      </VStack>

    </div>
  )
}