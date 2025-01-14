import React from "react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./api/store";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
