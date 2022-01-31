import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function TeamScoreBoard () {

  useEffect(() => {
    fetchScoreBoard();
  } , [] );

  const [drivers, setDrivers] = useState([]);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const fetchScoreBoard = async () => {

    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'https://ergast.com/api/f1/current/driverStandings.json',
      headers: { }
    };

    axios(config)
      .then(function (response) {
      console.log(response.data);
      setDrivers(response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
      })
    .catch(function (error) {
      console.log(error);
    });
  }

  return(
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Position</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Nationality</StyledTableCell>
            <StyledTableCell>Team</StyledTableCell>
            <StyledTableCell>Points</StyledTableCell>
          </TableRow>
        </TableHead>
      <TableBody>
      {drivers?.map(driver => (
          <StyledTableRow key={driver.position}>
              <StyledTableCell >{driver.position}</StyledTableCell>
              <StyledTableCell >{driver.Driver.givenName} {driver.Driver.familyName}</StyledTableCell>
              <StyledTableCell >{driver.Driver.nationality}</StyledTableCell>
              <StyledTableCell >{driver.Constructors[0].name}</StyledTableCell>
              <StyledTableCell >{driver.points}</StyledTableCell>
          </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

  export default TeamScoreBoard;