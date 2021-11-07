import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import formula from './formula';


export default function Selectscore() {
  const [val, setSelect] = React.useState('');
  const [showTeamResults, setShowTeamResults] = React.useState(false);
  const [showDriverResults, setShowDriverResults] = React.useState(false);

  const handleChange = (event) => {
    setSelect(event.target.value);
    console.log('You clicked on select');
  };

  React.useEffect(() => {
    if (val === 10) {
      console.log('Teams selected');
      setShowTeamResults(true);
      setShowDriverResults(false);
    }
    else if(val === 20) {
      console.log('Drivers selected');
      setShowTeamResults(false);
      setShowDriverResults(true);
    }
    else{
      console.log('Nothing selected');
      setShowTeamResults(false);
      setShowDriverResults(false);
    }
  })


  return (
    <div>
      <Box sx={{ maxWidth: 120 }} style={{paddingBottom: 5}}>
        <FormControl fullWidth >
          <InputLabel >Select</InputLabel>
            <Select
               value={val}
              label="Select"
              onChange={handleChange}
            >
            <MenuItem value={10}>Teams</MenuItem>
            <MenuItem value={20}>Drivers</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <br></br>
      <Box sx={{ paddingLeft: 20 , paddingRight: 20 }}>
        {showTeamResults ? <TeamScoreboard /> : null}
        {showDriverResults ? <Scoreboard /> : null}
      </Box>
    </div>
);
}

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
  
  function createData(position, name, nationality, team, points) {
    return { position, name, nationality, team, points};
  }

  function teamData(position, name, points) {
    return { position, name, points};
  }

  const teamrows = [
    //Mercedes
    teamData(formula.leaderboard[0].id, formula.leaderboard[0].name, formula.leaderboard[0].points),
    //Red Bull
    teamData(formula.leaderboard[1].id, formula.leaderboard[1].name, formula.leaderboard[1].points),
    //Mclaren
    teamData(formula.leaderboard[2].id, formula.leaderboard[2].name, formula.leaderboard[2].points),
    //Ferrari
    teamData(formula.leaderboard[5].id, formula.leaderboard[5].name, formula.leaderboard[5].points),
    //Alpine
    teamData(formula.leaderboard[4].id, formula.leaderboard[4].name, formula.leaderboard[4].points),
    //Alphatauri
    teamData(formula.leaderboard[6].id, formula.leaderboard[6].name, formula.leaderboard[6].points),
    //Aston Martin
    teamData(formula.leaderboard[3].id, formula.leaderboard[3].name, formula.leaderboard[3].points),
    //Williams
    teamData(formula.leaderboard[9].id, formula.leaderboard[9].name, formula.leaderboard[9].points),
    //Alfa Romeo
    teamData(formula.leaderboard[7].id, formula.leaderboard[7].name, formula.leaderboard[7].points),
    //Haas
    teamData(formula.leaderboard[8].id, formula.leaderboard[8].name, formula.leaderboard[8].points)
  ];
  
  const driverrows = [
    //Max Verstappen
    createData(formula.leaderboard[1].driverone[0].position, formula.leaderboard[1].driverone[0].name, formula.leaderboard[1].driverone[0].nationality,
         formula.leaderboard[1].name, formula.leaderboard[1].driverone[0].points),
    //Lewis Hamilton
    createData(formula.leaderboard[0].driverone[0].position, formula.leaderboard[0].driverone[0].name, formula.leaderboard[0].driverone[0].nationality,
         formula.leaderboard[0].name, formula.leaderboard[0].driverone[0].points),  
    //Valtteri Bottas
    createData(formula.leaderboard[0].drivertwo[0].position, formula.leaderboard[0].drivertwo[0].name, formula.leaderboard[0].drivertwo[0].nationality,
         formula.leaderboard[0].name, formula.leaderboard[0].drivertwo[0].points),
    //Sergio Perez
    createData(formula.leaderboard[1].drivertwo[0].position, formula.leaderboard[1].drivertwo[0].name, formula.leaderboard[1].drivertwo[0].nationality,
      formula.leaderboard[1].name, formula.leaderboard[1].drivertwo[0].points),
    //Lando Norris
    createData(formula.leaderboard[2].drivertwo[0].position, formula.leaderboard[2].drivertwo[0].name, formula.leaderboard[2].drivertwo[0].nationality,
        formula.leaderboard[2].name, formula.leaderboard[2].drivertwo[0].points),
    //Charles Leclerc
    createData(formula.leaderboard[5].driverone[0].position, formula.leaderboard[5].driverone[0].name, formula.leaderboard[5].driverone[0].nationality,
        formula.leaderboard[5].name, formula.leaderboard[5].driverone[0].points),
    //Carlos Saintz
    createData(formula.leaderboard[5].drivertwo[0].position, formula.leaderboard[5].drivertwo[0].name, formula.leaderboard[5].drivertwo[0].nationality,
      formula.leaderboard[5].name, formula.leaderboard[5].drivertwo[0].points),
    //Daniel Ricciardo
    createData(formula.leaderboard[2].driverone[0].position, formula.leaderboard[2].driverone[0].name, formula.leaderboard[2].driverone[0].nationality,
        formula.leaderboard[2].name, formula.leaderboard[2].driverone[0].points),
    //Pierre Gasly
    createData(formula.leaderboard[6].driverone[0].position, formula.leaderboard[6].driverone[0].name, formula.leaderboard[6].driverone[0].nationality,
        formula.leaderboard[6].name, formula.leaderboard[6].driverone[0].points),
    //Fernando Alonso
    createData(formula.leaderboard[4].driverone[0].position, formula.leaderboard[4].driverone[0].name, formula.leaderboard[4].driverone[0].nationality,
        formula.leaderboard[4].name, formula.leaderboard[4].driverone[0].points),
    //Esteban Ocon
    createData(formula.leaderboard[4].drivertwo[0].position, formula.leaderboard[4].drivertwo[0].name, formula.leaderboard[4].drivertwo[0].nationality,
        formula.leaderboard[4].name, formula.leaderboard[4].drivertwo[0].points),
    //Sebastian Vettel
    createData(formula.leaderboard[3].driverone[0].position, formula.leaderboard[3].driverone[0].name, formula.leaderboard[3].driverone[0].nationality,
        formula.leaderboard[3].name, formula.leaderboard[3].driverone[0].points),
    //Lance Stroll
    createData(formula.leaderboard[3].drivertwo[0].position, formula.leaderboard[3].drivertwo[0].name, formula.leaderboard[3].drivertwo[0].nationality,
        formula.leaderboard[3].name, formula.leaderboard[3].drivertwo[0].points),
    //Yuki Tsunoda
    createData(formula.leaderboard[6].drivertwo[0].position, formula.leaderboard[6].drivertwo[0].name, formula.leaderboard[6].drivertwo[0].nationality,
        formula.leaderboard[6].name, formula.leaderboard[6].drivertwo[0].points),
    //George Russell
    createData(formula.leaderboard[9].driverone[0].position, formula.leaderboard[9].driverone[0].name, formula.leaderboard[9].driverone[0].nationality,
        formula.leaderboard[9].name, formula.leaderboard[9].driverone[0].points),
    //Nicholas Latifi
    createData(formula.leaderboard[9].drivertwo[0].position, formula.leaderboard[9].drivertwo[0].name, formula.leaderboard[9].drivertwo[0].nationality,
        formula.leaderboard[9].name, formula.leaderboard[9].drivertwo[0].points),
    //Kimi Räikkönen
    createData(formula.leaderboard[7].driverone[0].position, formula.leaderboard[7].driverone[0].name, formula.leaderboard[7].driverone[0].nationality,
        formula.leaderboard[7].name, formula.leaderboard[7].driverone[0].points),
    //Antonio Giovinazzi
    createData(formula.leaderboard[7].drivertwo[0].position, formula.leaderboard[7].drivertwo[0].name, formula.leaderboard[7].drivertwo[0].nationality,
        formula.leaderboard[7].name, formula.leaderboard[7].drivertwo[0].points),
    //Mick Schumacher
    createData(formula.leaderboard[8].driverone[0].position, formula.leaderboard[8].driverone[0].name, formula.leaderboard[8].driverone[0].nationality,
        formula.leaderboard[8].name, formula.leaderboard[8].driverone[0].points),
    //Robert Kubica
    createData(formula.leaderboard[7].driverthree[0].position, formula.leaderboard[7].driverthree[0].name, formula.leaderboard[7].driverthree[0].nationality,
        formula.leaderboard[7].name, formula.leaderboard[7].driverthree[0].points),
    //Nikita Mazepin
    createData(formula.leaderboard[8].drivertwo[0].position, formula.leaderboard[8].drivertwo[0].name, formula.leaderboard[8].drivertwo[0].nationality,
        formula.leaderboard[8].name, formula.leaderboard[8].drivertwo[0].points),
  ];
  
  function Scoreboard() {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Position</StyledTableCell>
              <StyledTableCell>Driver</StyledTableCell>
              <StyledTableCell>Nationality</StyledTableCell>
              <StyledTableCell>Team</StyledTableCell>
              <StyledTableCell align="right">Points</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {driverrows.map((row) => (
              <StyledTableRow key={row.position}>
                <StyledTableCell component="th" scope="row">
                  {row.position}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell >{row.nationality}</StyledTableCell>
                <StyledTableCell >{row.team}</StyledTableCell>
                <StyledTableCell align="right">{row.points}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }


  function TeamScoreboard() {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Position</StyledTableCell>
              <StyledTableCell>Team</StyledTableCell>
              <StyledTableCell align="right">Points</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teamrows.map((row) => (
              <StyledTableRow key={row.position}>
                <StyledTableCell component="th" scope="row">
                  {row.position}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.points}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }