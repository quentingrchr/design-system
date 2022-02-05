import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Icon from "./components/Icon/index";

import "./style/global.scss";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="*" element={<Login/>} />

        </Routes>
    </Router>
  );
}

export default App;
