import React, { useContext, useEffect, useRef, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PauseButton from "./PauseButton";
import PlayButton from "./PlayButton";
import SettingsButton from "../components/SettingsButton";
import SettingsContext from "./SettingsContext";
import sound from '../effect.mp3.mp3'

const Timer = ({ setshowSettings }) => {
  const settingsInfo = useContext(SettingsContext);

  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState('work'); // work/break/null
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  useEffect(() => {

    function switchMode() {
      const nextMode = modeRef.current === 'work' ? 'break' : 'work';
      const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60;

      setMode(nextMode);
      modeRef.current = nextMode;

      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
    }

    secondsLeftRef.current = settingsInfo.workMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        const song = new Audio(sound)
        song.play()
        return switchMode();
      }
      tick();
    },1000);

    return () => clearInterval(interval);
  }, [settingsInfo]);

  const totalSeconds = mode === 'work'
    ? settingsInfo.workMinutes * 60
    : settingsInfo.breakMinutes * 60;
  const percentage = Math.round(secondsLeft / totalSeconds * 100);

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if(seconds<10){
    seconds = '0'+seconds
  }
  return (
    <div>
      <CircularProgressbar
        value={percentage}
        text={minutes+':'+seconds}
        styles={buildStyles({
          textColor: "white",
          pathColor: mode==='work'?"red":'green',
          trailColor: "#f1f1f1",
        })}
      />
      <div className="flex justify-center mt-10">
        {isPaused ? (
          <PlayButton isPausedRef={isPausedRef} setIsPaused={setIsPaused} />
        ) : (
          <PauseButton setisPaused={setIsPaused} isPausedRef={isPausedRef} />
        )}
      </div>
      <div className="mt-10 flex justify-center">
        <SettingsButton setshowSettings={setshowSettings} />
      </div>
    </div>
  );
};

export default Timer;
