import React from "react";
import cn from "classnames/bind";
import "./style.scss";
import { VStack, HStack } from "./../../components/Stack";
import Text from "./../../components/Text";
import InputTextGroup from "./../../components/InputTextGroup";
import Checkbox from "./../../components/Checkbox";
import Button from "./../../components/Button";
import Container from "./../../components/Container";
import Link from "./../../components/Link";

export default function Login() {
  return (
    <div className="login">
      <Container center maxW="md">
        <VStack alignItems="center" justifyContent="center" spacing="md">
          <Text
            tag="h1"
            typo="heading-l"
            content="Login"
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
            errorText="password is required"
            link={{
              text: "forgot password ?",
              href: "#",
            }}
            inputIcon="eye-open"
          />
          <HStack alignItems="center" justifyContent="center" spacing="xs">
            <Text
              tag="p"
              typo="body-m"
              content="remember me ?"
              color="primary-dark"
            />
            <Checkbox/>
          </HStack>
          <Button fullWidth text="Login" type="primary" />
          <div className="login__text-container">
            <Text
              tag="p"
              typo="body-m"
              content="Not signed up yet ?"
              color="primary-dark"
            />
            <Link to="/signup" text="Sign up" className="sign-up__link" />
          </div>
        </VStack>
      </Container>
    </div>
  );
}