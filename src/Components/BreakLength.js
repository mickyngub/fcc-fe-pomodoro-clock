import React, { useContext } from "react";
import { TimeContext } from "./TimeContext";

const BreakLength = () => {
  const { breakTime, setBreakTime } = useContext(TimeContext);
  return (
    <div>
      <p>This is Break Length</p>
      <button
        onClick={() => {
          setBreakTime((current) => current + 1);
        }}
      >
        increment
      </button>
      <button
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
