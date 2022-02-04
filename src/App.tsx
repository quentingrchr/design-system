import React from "react";
import Icon from "./components/Icon/index";

import "./style/global.scss";
import Button from './components/Button/index'

function App() {
  return (
    <div>
      <Icon type="check" />
      <Button label="register" backgroundColor="primary-base" color="primary-white" />
    </div>
  );
}

export default App;
