import React, { useState, useContext } from "react";
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
  return (
    <TimeContext.Provider
      value={{
        breakTime,
        setBreakTime,
        sessionTime,
        setSessionTime,
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
            <h2>Timer is</h2>
            {sessionTime}
          </Grid>
        </Grid>
      </Container>
    </TimeContext.Provider>
  );
};

export default PomodoroClock;
