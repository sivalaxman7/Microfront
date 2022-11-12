import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import SafeComponent  from "./SafeComponent";

import "./index.scss";

export const App = () => (
  <>
  <SafeComponent>
  <Header/>
  </SafeComponent>
</>
);
ReactDOM.render(<App />, document.getElementById("app"));
