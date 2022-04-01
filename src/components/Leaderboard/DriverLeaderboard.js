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

function DriverLeaderboard() {
  useEffect(() => {
    fetchLeaderBoard();
  }, []);

  const [drivers, setDrivers] = useState([]);

  const fetchLeaderBoard = async () => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "https://ergast.com/api/f1/current/driverStandings.json",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        setDrivers(
          response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <TableContainer component={Paper} className="driverboard">
      <Table aria-label="customized table">
        <TableHead>
          <TableRow className="tablehead">
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Position
            </TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Name
            </TableCell>
            <TableCell
              sx={{ color: "white", fontWeight: "bold" }}
              className="nationshow"
            >
              Nationality
            </TableCell>
            <TableCell
              sx={{ color: "white", fontWeight: "bold" }}
              className="teamshow"
            >
              Team
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
          {drivers.map((driver) => (
            <TableRow key={driver.position} className="table">
              <TableCell>{driver.position}</TableCell>
              <TableCell>
                {driver.Driver.givenName} {driver.Driver.familyName}
              </TableCell>
              <TableCell className="nationshow">
                {driver.Driver.nationality}
              </TableCell>
              <TableCell className="teamshow">
                {driver.Constructors[0].name}
              </TableCell>
              <TableCell align="center">{driver.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DriverLeaderboard;
