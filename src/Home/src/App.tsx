import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <p>This is a test</p>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
