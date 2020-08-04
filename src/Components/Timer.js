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

  // let audioBreak = useRef();
  // let audioSession = useRef();
  // const playSoundBreak = () => {
  //   audioBreak.current.play();
  // };
  // const playSoundSession = () => {
  //   audioSession.current.play();
  // };
  let displaySession = "";
  if (timeInMinute === 0 && timeInSecond === 0 && isItBreak === false) {
    setTimeInSecond(59);
    setTimeInMinute(breakTime - 1);
    setIsItBreak(true);
    // playSoundBreak();
    console.log("first is called");
  } else if (timeInMinute === 0 && timeInSecond === 0 && isItBreak === true) {
    setTimeInSecond(59);
    setTimeInMinute(sessionTime - 1);
    setIsItBreak(false);
    // playSoundSession();
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
      {/* <audio
        ref={audioBreak}
        type="audio/mp3"
        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
      ></audio>
      <audio
        ref={audioSession}
        type="audio/mp3"
        src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
      ></audio> */}
      {isItBreak ? <p>Break Time</p> : <p>Session Time</p>}

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
      <button onClick={() => setTimeInSecond((current) => current - 1)}>
        decrement
      </button>
    </div>
  );
};

export default Timer;
