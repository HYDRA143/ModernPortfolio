import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";
import App from "./App.jsx";
import "./styles/tailwind.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <IntlProvider locale="en-US" defaultLocale="en-US" messages={{}}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </IntlProvider>
  </HashRouter>,
);
