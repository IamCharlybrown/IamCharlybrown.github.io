import Backbutton from "./Backbutton";
import SliderSet from "./SliderSet";
import {useContext} from 'react'
import {SettingsContext} from '../../context/SettingsContext'

function Settings() {

  const settingsInfo = useContext(SettingsContext)
  return (
    <div className="flex flex-col size-96">
      <div>
        <Backbutton/>
        <label className="text-3xl text-white mx-2">Settings</label>
      </div>
      <div className="mb-11 mt-6">
        <h2 className="mb-10 text-lg text-white">Working time: </h2>
        <SliderSet max={60} def={settingsInfo.workMinutes} type="work" />
      </div>
      <div>
        <h2 className="mb-10 text-lg text-white">Brake time: </h2>
        <SliderSet max={15} def={settingsInfo.breakMinutes} type="break"/>
      </div>
    </div>
  );
}

export default Settings;
