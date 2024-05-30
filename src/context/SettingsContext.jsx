import { createContext, useState } from "react";

export const SettingsContext = createContext({});

export function SettingsContextProvider(props) {
  //state to show settings menu
  const [showSettings, setShowSettings] = useState(false);

  //state of work and break mins configurated in settings
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);

  //handler to show settings
  function settingsMenu() {
    setShowSettings((prev) => !prev);
  }

  return (
    <SettingsContext.Provider
      value={{
        showSettings,
        settingsMenu,
        workMinutes,
        setWorkMinutes,
        breakMinutes,
        setBreakMinutes,
      }}
    >
      {props.children}
    </SettingsContext.Provider>
  );
}
