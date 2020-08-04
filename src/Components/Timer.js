import React, { useContext, useRef } from "react";
import { TimeContext } from "./TimeContext";
const Timer = () => {
  const {
    breakTime,
    setBreakTime,
    sessionTime,
    setSessionTime,
    timeInMinute,
    setTimeInMinute,
    timeInSecond,
    setTimeInSecond,
    shouldUpdate,
    setShouldUpdate,
    isItBreak,
    setIsItBreak,
  } = useContext(TimeContext);

  const playSoundBreak = () => {
    const audioBreak = document.getElementsByClassName("audio-break")[0];
    audioBreak.play();
  };
  const playSoundSession = () => {
    const audioSession = document.getElementsByClassName("audio-session")[0];
    audioSession.play();
  };
  let displaySession = "";
  if (timeInMinute === 0 && timeInSecond === 0 && isItBreak === false) {
    setTimeInSecond(59);
    setTimeInMinute(breakTime - 1);
    setIsItBreak(true);
    playSoundBreak();
    console.log("first is called");
  } else if (timeInMinute === 0 && timeInSecond === 0 && isItBreak === true) {
    setTimeInSecond(59);
    setTimeInMinute(sessionTime - 1);
    setIsItBreak(false);
    playSoundSession();
    console.log("second is called");
  } else if (timeInSecond < 0) {
    setTimeInSecond((current) => (current = 59));
    setTimeInMinute((current) => current - 1);
  } else {
    if (timeInSecond < 10 && timeInSecond >= 0) {
      displaySession = `${timeInMinute}:0${timeInSecond}`;
    } else {
      displaySession = `${timeInMinute}:${timeInSecond}`;
    }
  }

  return (
    <div>
      <audio className="audio-session">
        <source src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></source>
      </audio>
      <audio className="audio-break">
        <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></source>
      </audio>
      {isItBreak ? <p>Break Time </p> : <p>Session Time</p>}

      {displaySession}
      <button
        onClick={() => {
          setShouldUpdate(true);
        }}
      >
        PLAY
      </button>
      <button
        onClick={() => {
          setShouldUpdate(false);
        }}
      >
        PAUSE
      </button>
      <button
        onClick={() => {
          setSessionTime(25);
          setBreakTime(5);
          setTimeInMinute(25);
          setTimeInSecond(0);

          setShouldUpdate(false);
        }}
      >
        RESET
      </button>
      <button onClick={() => setTimeInSecond((current) => current + 1)}>
        increment
      </button>
      <button onClick={() => setTimeInSecond((current) => current - 8)}>
        decrement
      </button>
    </div>
  );
};

export default Timer;
