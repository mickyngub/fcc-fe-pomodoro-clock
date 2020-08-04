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

  const playSound = () => {
    const audio = document.getElementsByClassName("audio")[0];
    audio.play();
  };

  const pauseSound = () => {
    const audio = document.getElementsByClassName("audio")[0];
    audio.pause();
    audio.currentTime = 0;
  };
  let displaySession = "";
  if (timeInMinute === 0 && timeInSecond === 0 && isItBreak === false) {
    playSound();
  } else if (timeInMinute === 0 && timeInSecond === 0 && isItBreak === true) {
    playSound();
  }
  if (timeInMinute === 0 && timeInSecond === -1 && isItBreak === false) {
    setTimeInSecond(0);
    setTimeInMinute(breakTime);
    setIsItBreak(true);
    console.log("first is called");
  } else if (timeInMinute === 0 && timeInSecond === -1 && isItBreak === true) {
    setTimeInSecond(0);
    setTimeInMinute(sessionTime);
    setIsItBreak(false);
    console.log("second is called");
  } else if (timeInSecond === -1) {
    setTimeInSecond((current) => (current = 59));
    setTimeInMinute((current) => current - 1);
  } else {
    if (timeInMinute < 10 && timeInMinute >= 0) {
      if (timeInSecond < 10 && timeInSecond >= 0) {
        displaySession = `0${timeInMinute}:0${timeInSecond}`;
      } else {
        displaySession = `0${timeInMinute}:${timeInSecond}`;
      }
    } else if (timeInSecond < 10 && timeInSecond >= 0) {
      displaySession = `${timeInMinute}:0${timeInSecond}`;
    } else {
      displaySession = `${timeInMinute}:${timeInSecond}`;
    }
  }

  return (
    <div>
      <audio id="beep" className="audio">
        <source src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></source>
      </audio>

      {isItBreak ? (
        <div id="timer-label">
          <p>Break Time </p>
        </div>
      ) : (
        <div id="timer-label">
          <p>Session Time</p>
        </div>
      )}

      <div id="time-left" style={{ margin: "20px" }}>
        {displaySession}
      </div>
      <button
        id="start_stop"
        onClick={() => {
          setShouldUpdate((current) => !current);
        }}
      >
        PLAY/PAUSE
      </button>

      <button
        id="reset"
        onClick={() => {
          setTimeInMinute(25);
          setTimeInSecond(0);
          setSessionTime(25);
          setBreakTime(5);
          setIsItBreak(false);
          setShouldUpdate(false);
          pauseSound();
        }}
      >
        RESET
      </button>
    </div>
  );
};

export default Timer;
