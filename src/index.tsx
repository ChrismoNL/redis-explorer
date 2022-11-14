import React from "react";
import ReactDOM from "react-dom/client";
import "devextreme/dist/css/dx.light.css";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { MenuComponent } from "./components/menu/menu";
import { HomePage } from "./pages";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MenuComponent />
    <HomePage />
  </React.StrictMode>
);

reportWebVitals();
