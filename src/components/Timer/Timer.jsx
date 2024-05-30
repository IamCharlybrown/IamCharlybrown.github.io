import {useState} from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PlayButton from "./PlayButton";
import StopButton from "./StopButton";
import SettingsButton from "./SettingsButton";

function Timer() {

  const percentage = 100;

  return (
    <>
      <CircularProgressbar value={percentage} text={`${percentage}%`} />
      <PlayButton></PlayButton>
      <StopButton></StopButton>
      <SettingsButton></SettingsButton>
    </>
  );
}

export default Timer;
