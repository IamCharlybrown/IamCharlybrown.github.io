import React, { useState, createContext, useEffect } from "react";
import { proyects as data } from "../data/proyects";

export const ProyectContext = createContext({});
export function ProyectContextProvider(props) {
  const [proyects, setProyects] = useState([]);

  useEffect(() => {
    setProyects(data);
  }, []);

  function createProyect(title, desc) {
    setProyects((prevProyects) => [
      ...prevProyects,
      {
        id: prevProyects.length+1,
        title: title,
        desc: desc,
        img: "https://www.lacorformacion.com/wp-content/uploads/curso-por-defecto.jpg",
      },
    ]);
  }

  
  function deleteProyect(proyectID) {
    setProyects((prevProyects) => {
      const updatedProyects = prevProyects.filter((proyect) => proyect.id !== proyectID);
      return updatedProyects;
    });
  }


  return (
    <ProyectContext.Provider
      value={{ proyects, setProyects, createProyect, deleteProyect }}
    >
      {props.children}
    </ProyectContext.Provider>
  );
}
