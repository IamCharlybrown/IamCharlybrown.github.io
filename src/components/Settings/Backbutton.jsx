import {useContext} from "react";
import {SettingsContext} from '../../context/SettingsContext'

function Backbutton() {
  
  const {settingsMenu} = useContext(SettingsContext)

  return (
    <button onClick={settingsMenu} >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-7 h-7 bg-black text-white p-1"
        color="white"
        
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
        />
      </svg>
    </button>
  );
}

export default Backbutton;
