import React from "react";
import cn from "classnames/bind";
import "./style.scss";
import { VStack } from "./../../components/Stack";
import Text from "./../../components/Text";
import InputTextGroup from "./../../components/InputTextGroup";
import Button from "./../../components/Button";


export default function Login() {
    return (
        <div className="login">
            <VStack alignItems="center" justifyContent="center" spacing="sm">
                <Text
                    tag="h1"
                    typo="heading-l"
                    content="Login"
                    color="primary-dark"
                />
                <InputTextGroup />
                <InputTextGroup />
                <Button text="Login" type="primary" />
            </VStack>

        </div>
    )
}