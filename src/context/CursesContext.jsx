import React, { useState, createContext, useEffect } from "react";
import { curses as data } from "../data/curses";

export const CursesContext = createContext({});

export function CursesContextProvider(props) {
  const [curses, setCurses] = useState([]);

  useEffect(() => {
    setCurses(data);
  }, []);

  function createCurse(title, platform, url) {
    setCurses((prevCurses) => [
      ...prevCurses,
      {
        id: prevCurses.length + 1,
        title: title,
        platform: platform,
        url: url,
        img: "https://www.lacorformacion.com/wp-content/uploads/curso-por-defecto.jpg",
      },
    ]);
  }

  function deleteCurse(proyectID) {
    setCurses((prevCurses) => {
      const updatedProyects = prevCurses.filter(
        (curse) => curse.id !== proyectID
      );
      return updatedProyects;
    });
  }
  return (
    <CursesContext.Provider
      value={{ curses, setCurses, createCurse, deleteCurse }}
    >
      {props.children}
    </CursesContext.Provider>
  );
}
