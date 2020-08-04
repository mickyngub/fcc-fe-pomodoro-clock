import React, { useContext } from "react";
import { TimeContext } from "./TimeContext";

const BreakLength = () => {
  const { breakTime, setBreakTime } = useContext(TimeContext);
  return (
    <div id="break-label">
      <h2>Break Length is</h2>
      <div id="break-length" style={{ margin: "20px" }}>
        {breakTime}
      </div>
      <button
        id="break-increment"
        onClick={() => {
          setBreakTime((current) => {
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
        id="break-decrement"
        onClick={
          breakTime > 1
            ? () => {
                setBreakTime((current) => current - 1);
              }
            : null
        }
      >
        decrement
      </button>
    </div>
  );
};

export default BreakLength;
