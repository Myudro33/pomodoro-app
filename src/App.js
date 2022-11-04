import React, { useState } from "react";
import Settings from "./components/Settings";
import SettingsContext from "./components/SettingsContext";
import Timer from "./components/Timer";

const App = () => {
  const [showSettings, setshowSettings] = useState(false);
  const [workMinutes, setworkMinutes] = useState(45);
  const [breakMinutes, setbreakMinutes] = useState(15);

  return (
    <div className="w-full h-screen bg-[#30384b] text-[#eee] flex justify-center items-center">
      <SettingsContext.Provider
        value={{
          workMinutes,
          breakMinutes,
          setbreakMinutes,
          setworkMinutes,
          setshowSettings
        }}
      >
        {showSettings ? <Settings setshowSettings={setshowSettings} /> : <Timer setshowSettings={setshowSettings}  />}
      </SettingsContext.Provider>
    </div>
  );
};

export default App;
