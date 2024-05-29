import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Timer() {
  const percentage = 66;

  return <CircularProgressbar value={percentage} text={`${percentage}%`} />;
}

export default Timer;
