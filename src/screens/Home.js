import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Countdown from "react-countdown";
import "./styles.css";
import "../styles.css";
import "../index.css";
import ham from "../images/hamilton.png";
import lec from "../images/leclerc.png";
import ver from "../images/verstappen.png";

export default function Home() {
  return (
    <div className="home">
      <div className="countdown">
        <h3>Countdown to the next race:</h3>
        <h1>
          <Countdown date={new Date("2022-04-10T08:00:00")} />
        </h1>
      </div>
    </div>
  );
}
