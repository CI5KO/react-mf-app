import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import RegisterForm from "./sections/registerForm";

const App = () => <RegisterForm />;
ReactDOM.render(<App />, document.getElementById("app"));
