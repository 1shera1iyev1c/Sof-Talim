import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { LangProvider } from "./Context/lang-context";
import { ThemeProvider } from "./Context/theme-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <LangProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </LangProvider>
  </BrowserRouter>
);
