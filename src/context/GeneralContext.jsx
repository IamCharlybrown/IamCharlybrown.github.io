import { useState, useEffect, createContext } from "react";

export const GeneralContext = createContext();
export function GeneralContextProvider(props) {
  return <GeneralContext.Provider>{props.children}</GeneralContext.Provider>;
}
