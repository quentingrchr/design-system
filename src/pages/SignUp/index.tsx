import React from "react";
import cn from "classnames/bind";
import "./style.scss";
import { VStack } from "./../../components/Stack";
import Text from "./../../components/Text";
import InputTextGroup from "./../../components/InputTextGroup";
import Button from "./../../components/Button";
import Link from "./../../components/Link";
import Container from "./../../components/Container";

export default function SignUp() {
  return (
    <div className="sign-up">
      <Container center maxW="md">
        <VStack alignItems="center" justifyContent="center" spacing="md">
          <Text
            tag="h1"
            typo="heading-l"
            content="Sign up"
            color="primary-dark"
          />
          <InputTextGroup
            labelText="email"
            labelFor="email"
            placeholder="enter your email"
            inputType="email"
            errorText="email is required"
          />
          <InputTextGroup
            labelText="password"
            labelFor="password"
            placeholder="enter your password"
            inputType="password"
            helpText="1 maj, 1 spec char and 1 number mininmum"
            inputIcon="eye-open"
          />
          <Button fullWidth text="Sign up" type="primary" />
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
      </Container>
    </div>
  );
}
