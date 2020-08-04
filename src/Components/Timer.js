import React, { useContext } from "react";
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

  let displaySession = "";
  if (timeInMinute === 0 && timeInSecond === 0) {
    setTimeInSecond(59);
    setTimeInMinute(breakTime);
  } else if (timeInSecond < 0) {
    setTimeInSecond(59);
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
      <p>This is Timer</p>

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
    </div>
  );
};

export default Timer;
