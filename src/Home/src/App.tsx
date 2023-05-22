import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./sections/navbar";
// @ts-ignore
import RegisterForm from "user/Register";
import "./index.scss";

const App = () => (
  <div>
    <Navbar />
    <RegisterForm />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
