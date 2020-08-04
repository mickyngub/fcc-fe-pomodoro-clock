import React from "react";
import Timer from "./Timer";
import BreakLength from "./BreakLength";
import SessionLength from "./SessionLength";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import "./PomodoroClock.css";

const PomodoroClock = () => {
  return (
    <Container maxWidth="md" style={{ border: "10px solid blue" }}>
      <Grid container>
        <Grid item xs={12}>
          Pomodoro Clock!
        </Grid>
        <Grid item xs={6}>
          <BreakLength />
        </Grid>
        <Grid item xs={6}>
          <SessionLength />
        </Grid>
        <Grid item xs={12}>
          <Timer />
        </Grid>
      </Grid>
    </Container>
    // <div className="grid-container">
    //   <div className="grid-item">Pomodoro Clock</div>
    //   <div className="grid-item">
    //     <Timer />
    //   </div>
    //   <div className="grid-item">
    //     <BreakLength />
    //   </div>
    //   <div className="grid-item">
    //     <SessionLength />
    //   </div>
    // </div>
  );
};

export default PomodoroClock;
