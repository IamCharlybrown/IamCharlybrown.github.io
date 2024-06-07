import React, { createContext, useEffect } from "react";
import { curses as data } from "../data/curses";
import { images } from "../data/curses-img";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const CursesContext = createContext({});

export function CursesContextProvider(props) {
  const [curses, setCurses] = useLocalStorage("curses", []);
  const curseImages = images;

  useEffect(() => {
    if (curses.length === 0) {
      setCurses(data);
    }
  }, [curses, setCurses]);

  const createCurse = (title, platform, url, img) => {
    setCurses((prevCurses) => [
      ...prevCurses,
      {
        id: prevCurses.length + 1,
        title,
        platform,
        url,
        img,
      },
    ]);
  };

  const deleteCurse = (curseID) => {
    setCurses((prevCurses) => prevCurses.filter((curse) => curse.id !== curseID));
  };

  return (
    <CursesContext.Provider
      value={{ curses, curseImages, setCurses, createCurse, deleteCurse }}
    >
      {props.children}
    </CursesContext.Provider>
  );
}
