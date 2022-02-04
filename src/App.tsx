import React from "react";
import Icon from "./components/Icon/index";

import "./style/global.scss";
import Input from "./components/Input/index";
import Button from "./components/Button/index";

function App() {
  return (
    <div>
      <Input />
      <Button text="register" type="primary"/>
    </div>
  );
}

export default App;
