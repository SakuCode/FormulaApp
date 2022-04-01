import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../../index.css";
import "./styles.css";

function TeamLeaderBoard() {
  useEffect(() => {
    fetchLeaderBoard();
  }, []);

  const [teams, setTeams] = useState([]);

  const fetchLeaderBoard = async () => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "https://ergast.com/api/f1/current/constructorStandings.json",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        setTeams(
          response.data.MRData.StandingsTable.StandingsLists[0]
            .ConstructorStandings
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <TableContainer component={Paper} className="teamboard">
      <Table aria-label="customized table">
        <TableHead>
          <TableRow className="tablehead">
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Position
            </TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Constructor
            </TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Nationality
            </TableCell>
            <TableCell
              sx={{ color: "white", fontWeight: "bold" }}
              align="center"
            >
              Points
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teams.map((team) => (
            <TableRow key={team.position} className="table">
              <TableCell>{team.position}</TableCell>
              <TableCell>{team.Constructor.name}</TableCell>
              <TableCell>{team.Constructor.nationality}</TableCell>
              <TableCell align="center">{team.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TeamLeaderBoard;
