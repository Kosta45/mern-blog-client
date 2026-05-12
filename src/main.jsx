import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

import CssBaseline from "@mui/material/CssBaseline";
import "./index.css";

import { ThemeProvider } from "@mui/material";
import { theme } from "@/theme";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </>,
);
