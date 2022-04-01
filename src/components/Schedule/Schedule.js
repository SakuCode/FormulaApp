import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../../index.css";
import "./styles.css";

function Schedule() {
  useEffect(() => {
    fetchSchedule();
  }, []);

  const [circuits, setCircuits] = useState([]);

  const fetchSchedule = async () => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "http://ergast.com/api/f1/current.json",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        setCircuits(response.data.MRData.RaceTable.Races);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="schedulediv">
      <TableContainer component={Paper} className="schedule">
        <Table aria-label="customized table">
          <TableHead>
            <TableRow className="tablehead">
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Number
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Race Name
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                {" "}
                Country
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {circuits.map((circuit) => (
              <TableRow key={circuit.round} className="table">
                <TableCell>{circuit.round}</TableCell>
                <TableCell>{circuit.raceName}</TableCell>
                <TableCell>{circuit.Circuit.Location.country}</TableCell>
                <TableCell>{circuit.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Schedule;
