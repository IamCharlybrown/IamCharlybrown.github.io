import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SettingsContextProvider } from "./context/SettingsContext.jsx";
import { ProyectContextProvider } from "./context/ProyectContext.jsx";
import { NavBarContextProvider } from "./context/NavBarContext.jsx";
import { CursesContextProvider } from "./context/CursesContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProyectContextProvider>
      <SettingsContextProvider>
        <CursesContextProvider>
          <NavBarContextProvider>
            <App />
          </NavBarContextProvider>
        </CursesContextProvider>
      </SettingsContextProvider>
    </ProyectContextProvider>
  </React.StrictMode>
);
