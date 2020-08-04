import React, { useContext } from "react";

import { TimeContext } from "./TimeContext";
const SessionLength = () => {
  const { sessionTime, setSessionTime } = useContext(TimeContext);
  return (
    <div>
      <p>This is Session Length</p>
      <button
        onClick={() => {
          setSessionTime((current) => current + 1);
        }}
      >
        increment
      </button>
      <button
        onClick={
          sessionTime > 1
            ? () => {
                setSessionTime((current) => current - 1);
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
