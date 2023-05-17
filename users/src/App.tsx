import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from "homeComps/Header";
import Home from "./components/Home";

const App = () => (
  <div>
    <Header />
    <Home />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
