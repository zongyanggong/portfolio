import { hydrate, render } from "react-dom";
import App from "./App.tsx";
import "./index.css";

const APP = <App />;

const rootElement = document.getElementById("root");
if (rootElement?.hasChildNodes()) {
  hydrate(APP, rootElement);
} else {
  render(APP, rootElement);
}
