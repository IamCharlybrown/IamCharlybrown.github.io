import React, { useState, createContext, useEffect } from "react";
import { proyects as data } from "../data/proyects";

export const ProyectContext = createContext({});
export function ProyectContextProvider(props) {
  const [proyects, setProyects] = useState([]);

  useEffect(() => {
    setProyects(data);
  }, []);

  function createProyect(title, platform) {
    setProyects([
      ...proyects,
      {
        id: proyects.length,
        title: title,
        platform: platform,
        img: "https://www.lacorformacion.com/wp-content/uploads/curso-por-defecto.jpg",
      },
    ]);
  }

  function deleteProyect(proyectID) {
    setProyects(proyects.filter((proyect) => proyect.id !== proyectID));
  }

  return (
    <ProyectContext.Provider value={{ proyects, createProyect, deleteProyect }}>
      {props.children}
    </ProyectContext.Provider>
  );
}
