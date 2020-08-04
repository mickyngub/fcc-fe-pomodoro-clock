import React, { useContext } from "react";

import { TimeContext } from "./TimeContext";
const SessionLength = () => {
  const {
    sessionTime,
    setSessionTime,
    timeInMinute,
    setTimeInMinute,
  } = useContext(TimeContext);
  return (
    <div id="session-label">
      <h2>session time is</h2>
      <div id="session-length">{sessionTime}</div>

      <button
        id="session-increment"
        onClick={() => {
          setSessionTime((current) => {
            if (current > 59) {
              return current;
            } else {
              return current + 1;
            }
          });
          setTimeInMinute((current) => {
            if (current > 59) {
              return current;
            } else {
              return current + 1;
            }
          });
        }}
      >
        increment
      </button>
      <button
        id="session-decrement"
        onClick={
          sessionTime > 1
            ? () => {
                setSessionTime((current) => current - 1);
                setTimeInMinute((current) => current - 1);
              }
            : null
        }
      >
        decrement
      </button>
    </div>
  );
};

export default SessionLength;
