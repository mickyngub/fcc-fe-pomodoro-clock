import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import BreakLength from "./BreakLength";
import SessionLength from "./SessionLength";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import { TimeContext } from "./TimeContext";

import "./PomodoroClock.css";

const PomodoroClock = () => {
  const [breakTime, setBreakTime] = useState(5);
  const [sessionTime, setSessionTime] = useState(25);
  const [timeInMinute, setTimeInMinute] = useState(sessionTime);
  const [timeInSecond, setTimeInSecond] = useState(0);
  const [shouldUpdate, setShouldUpdate] = useState(false);
  const [isItBreak, setIsItBreak] = useState(false);
  useEffect(() => {
    if (shouldUpdate) {
      const interval = setInterval(
        () => setTimeInSecond((current) => current - 1),
        1000
      );
      return () => clearInterval(interval);
    }
  }, [shouldUpdate, timeInSecond]);
  return (
    <TimeContext.Provider
      value={{
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
      }}
    >
      <Container maxWidth="md" style={{ border: "10px solid blue" }}>
        <Grid container>
          <Grid item xs={12} style={{ height: "10vh", marginTop: "40px" }}>
            Pomodoro Clock!
          </Grid>
          <Grid item xs={6}>
            <BreakLength />
            <h2>break time is</h2>
            {breakTime}
          </Grid>
          <Grid item xs={6}>
            <SessionLength />
            <h2>session time is</h2>
            {sessionTime}
          </Grid>
          <Grid item xs={12}>
            <Timer />
          </Grid>
        </Grid>
      </Container>
    </TimeContext.Provider>
  );
};

export default PomodoroClock;
