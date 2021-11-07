import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import formula from './formula';

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
  
  function createData(id, country, circuit, date, status) {
    return { id, country, circuit, date, status};
  }
  
  const rows = [
    //Bahrain
    createData(formula.circuits[0].id,formula.circuits[0].country,formula.circuits[0].circuit,
        formula.circuits[0].date,formula.circuits[0].status),
    //Italy 1
    createData(formula.circuits[1].id,formula.circuits[1].country,formula.circuits[1].circuit,
        formula.circuits[1].date,formula.circuits[1].status),
    //Portugal
    createData(formula.circuits[2].id,formula.circuits[2].country,formula.circuits[2].circuit,
        formula.circuits[2].date,formula.circuits[2].status),
    //Spain
    createData(formula.circuits[3].id,formula.circuits[3].country,formula.circuits[3].circuit,
        formula.circuits[3].date,formula.circuits[3].status),
    //Monaco
    createData(formula.circuits[4].id,formula.circuits[4].country,formula.circuits[4].circuit,
        formula.circuits[4].date,formula.circuits[4].status),
    //Azerbaijan
    createData(formula.circuits[5].id,formula.circuits[5].country,formula.circuits[5].circuit,
        formula.circuits[5].date,formula.circuits[5].status),
    //France
    createData(formula.circuits[6].id,formula.circuits[6].country,formula.circuits[6].circuit,
        formula.circuits[6].date,formula.circuits[6].status),
    //Austria 1
    createData(formula.circuits[7].id,formula.circuits[7].country,formula.circuits[7].circuit,
        formula.circuits[7].date,formula.circuits[7].status),
    //Austria 2
    createData(formula.circuits[8].id,formula.circuits[8].country,formula.circuits[8].circuit,
        formula.circuits[8].date,formula.circuits[8].status),
    //England
    createData(formula.circuits[9].id,formula.circuits[9].country,formula.circuits[9].circuit,
        formula.circuits[9].date,formula.circuits[9].status),
    //Hungary
    createData(formula.circuits[10].id,formula.circuits[10].country,formula.circuits[10].circuit,
        formula.circuits[10].date,formula.circuits[10].status),
    //Belgium
    createData(formula.circuits[11].id,formula.circuits[11].country,formula.circuits[11].circuit,
        formula.circuits[11].date,formula.circuits[11].status),
    //Netherlands
    createData(formula.circuits[12].id,formula.circuits[12].country,formula.circuits[12].circuit,
        formula.circuits[12].date,formula.circuits[12].status),
    //Italy 2
    createData(formula.circuits[13].id,formula.circuits[13].country,formula.circuits[13].circuit,
            formula.circuits[13].date,formula.circuits[13].status),
    //Russia
    createData(formula.circuits[14].id,formula.circuits[14].country,formula.circuits[14].circuit,
        formula.circuits[14].date,formula.circuits[14].status),
    //Turkey
    createData(formula.circuits[15].id,formula.circuits[15].country,formula.circuits[15].circuit,
        formula.circuits[15].date,formula.circuits[15].status),
    //United States
    createData(formula.circuits[16].id,formula.circuits[16].country,formula.circuits[16].circuit,
        formula.circuits[16].date,formula.circuits[16].status),
    //Mexico
    createData(formula.circuits[17].id,formula.circuits[17].country,formula.circuits[17].circuit,
        formula.circuits[17].date,formula.circuits[17].status),
    //Brazil
    createData(formula.circuits[18].id,formula.circuits[18].country,formula.circuits[18].circuit,
        formula.circuits[18].date,formula.circuits[18].status),
    //Qatar
    createData(formula.circuits[19].id,formula.circuits[19].country,formula.circuits[19].circuit,
        formula.circuits[19].date,formula.circuits[19].status),
    //Abu Dhabi
    createData(formula.circuits[20].id,formula.circuits[20].country,formula.circuits[20].circuit,
        formula.circuits[20].date,formula.circuits[20].status),
    
  ];
  
  export default function Schedule() {
    return (
      <TableContainer component={Paper} >
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell>Country</StyledTableCell>
              <StyledTableCell>Circuit</StyledTableCell>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell>{row.id}</StyledTableCell>
                <StyledTableCell>{row.country}</StyledTableCell>
                <StyledTableCell >{row.circuit}</StyledTableCell>
                <StyledTableCell >{row.date}</StyledTableCell>
                <StyledTableCell >{row.status}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }