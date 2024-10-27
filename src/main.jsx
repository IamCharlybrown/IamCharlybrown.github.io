import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Dashboard from "./routes/Dashboard";
import CreateRoutine from "./routes/CreateRoutine";
import CrearEjercicio from "./routes/CrearEjercicio";
import Perfil from "./routes/Perfil";
import LogIn from './routes/LogIn'

import Settings from "./routes/Settings";
import Calendar from './routes/Calendar'

import { WorkoutProvider } from "./context/HomeContext";
import { RoutineProvider } from "./context/CreateRoutineContext";
import UpdateProgress from "./routes/UpdateProgress";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/create-routine",
    element: <CreateRoutine />,
  },
  {
    path: "/calendario",
    element: <Calendar />,
  },
  {
    path: "/progress-stats",
    element: <CrearEjercicio></CrearEjercicio>,
  },
  {
    path: "/perfil",
    element: <Perfil />,
  },
  {
    path: "/workout-notes",
    element: <UpdateProgress />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WorkoutProvider>
      <RoutineProvider>
        <RouterProvider router={router} />
      </RoutineProvider>
    </WorkoutProvider>
  </StrictMode>
);
