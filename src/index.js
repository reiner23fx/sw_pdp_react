import React from "react";
import { render } from "react-dom";
import Layout from "./containers/Layout";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => <Layout />;

render(<App />, document.getElementById("root"));
