import React from 'react'
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

import TeamScoreBoard from './TeamScoreBoard';
import DriverScoreBoard from './DriverScoreBoard';


function ScoreBoard() {

  const [showTeamResults, setShowTeamResults] = React.useState(false);
  const [showDriverResults, setShowDriverResults] = React.useState(false);
  const [val, setSelect] = React.useState('');

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
    });

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
          {showTeamResults ? <TeamScoreBoard /> : null}
          {showDriverResults ? <DriverScoreBoard /> : null}
        </Box>
      </div>
  );
}

export default ScoreBoard;