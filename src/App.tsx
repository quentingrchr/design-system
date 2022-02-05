import React from "react";
import Icon from "./components/Icon/index";

import "./style/global.scss";
import InputTextGroup from "./components/InputTextGroup";
import Checkbox from "./components/Checkbox";
import Button from "./components/Button/index";
import Stack, { VStack, HStack } from "./components/Stack";
import Box from "./components/Box";

function App() {
  return (
    <div>
      <InputTextGroup />
      <Checkbox/>
    </div>
  );
}

export default App;
