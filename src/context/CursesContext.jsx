import React, { useState, createContext, useEffect } from "react";
import { curses as data } from "../data/curses";
import { images } from "../data/curses-img";

export const CursesContext = createContext({});

export function CursesContextProvider(props) {
  const [curses, setCurses] = useState([]);

  const curseImages = images

  useEffect(() => {
    setCurses(data);
  }, []);

  function createCurse(title, platform, url, img) {
    setCurses((prevCurses) => [
      ...prevCurses,
      {
        id: prevCurses.length + 1,
        title: title,
        platform: platform,
        url: url,
        img: img,
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
      value={{ curses, curseImages, setCurses, createCurse, deleteCurse }}
    >
      {props.children}
    </CursesContext.Provider>
  );
}
