import {createContext, useState} from 'react'

export const SettingsContext = createContext()

export function SettingsContextProvider(props) {

  const [showSettings, setShowSettings] = useState(false)
  
  const settingsMenu = () => {
    setShowSettings(prev => !prev);
  };

  return (
    <SettingsContext.Provider value={{showSettings, settingsMenu}}>
      {props.children}
    </SettingsContext.Provider>
  )
}
