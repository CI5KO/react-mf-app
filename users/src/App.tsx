import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

// @ts-ignore
import Header from "homeComps/Header";

const App = () => (
  <div>
    <Header />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
