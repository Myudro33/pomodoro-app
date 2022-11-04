import React,{useContext} from "react";
import ReactSlider from "react-slider";
import SettingsContext from "./SettingsContext";
import BackButton from './BackButton'

const Settings = ({setshowSettings}) => {

  const settingsInfo = useContext(SettingsContext)

  return (
    <div>
      <label>Work: {settingsInfo.workMinutes}:00</label>
      <ReactSlider
        className="slider my-2 h-12 border-2 border-red-500 rounded-3xl w-72"
        thumbClassName="thumb w-10 h-10 bg-red-500 rounded-full cursor-pointer border-none outline-none"
        trackClassName="track"
        value={settingsInfo.workMinutes}
        onChange={newValue=>settingsInfo.setworkMinutes(newValue)}
        min={1}
        max={120}
      />
      <label>Break: {settingsInfo.breakMinutes}:00</label>
      <ReactSlider
        className="slider my-2 h-12 border-2 border-green-500 rounded-3xl w-72"
        thumbClassName="thumb w-10 h-10 bg-green-500 rounded-full cursor-pointer border-none outline-none"
        trackClassName="track"
        value={settingsInfo.breakMinutes}
        onChange={newValue=>settingsInfo.setbreakMinutes(newValue)}
        min={1}
        max={120}
      />
      <div className="flex justify-center mt-10">
        <BackButton  setshowSettings={setshowSettings} />
      </div>
    </div>
  );
};

export default Settings;
