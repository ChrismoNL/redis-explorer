import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { MenuComponent } from "./components/menu/menu";
import { ServerPage, InitPage, LoginPage } from "./pages";
import { FooterComponent } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ServerPage />,
  },
  {
    path: "/init",
    element: <InitPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="page-container">
        <div className="page-content">
          <MenuComponent />
          <RouterProvider router={router} />
        </div>
        <FooterComponent />
      </div>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
