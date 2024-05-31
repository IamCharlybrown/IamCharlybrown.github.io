import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SettingsContextProvider } from "./context/SettingsContext.jsx";
import { ProyectContextProvider } from "./context/ProyectContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProyectContextProvider>
      <SettingsContextProvider>
        <App />
      </SettingsContextProvider>
    </ProyectContextProvider>
  </React.StrictMode>
);
