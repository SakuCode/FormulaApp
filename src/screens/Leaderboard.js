import React from "react";
import "./styles.css";

import TeamLeaderBoard from "../components/Leaderboard/TeamLeaderboard";
import DriverLeaderboard from "../components/Leaderboard/DriverLeaderboard";

function Leaderboard() {
  const [showTeamResults, setShowTeamResults] = React.useState(false);
  const [showDriverResults, setShowDriverResults] = React.useState(false);
  const [showSelect, setShowSelect] = React.useState(true);

  const handleDriverChange = (e) => {
    e.preventDefault();
    if (showDriverResults === false) {
      setShowDriverResults(!showDriverResults);
      setShowTeamResults(false);
      setShowSelect(false);
    }
  };

  const handleTeamChange = (e) => {
    e.preventDefault();
    if (showTeamResults === false) {
      setShowTeamResults(true);
      setShowDriverResults(false);
      setShowSelect(false);
    }
  };

  return (
    <div className="leaderboards">
      <div className="buttondiv">
        <button className="button" onClick={(e) => handleDriverChange(e)}>
          DRIVERS
        </button>
        <button className="button" onClick={(e) => handleTeamChange(e)}>
          TEAMS
        </button>
      </div>
      {showSelect ? <SelectLeaderboard /> : null}
      {showTeamResults ? <TeamLeaderBoard /> : null}
      {showDriverResults ? <DriverLeaderboard /> : null}
    </div>
  );
}

function SelectLeaderboard() {
  return (
    <div className="selectbox">
      <h2>Please select the scoreboard you want to display.</h2>
    </div>
  );
}

export default Leaderboard;
