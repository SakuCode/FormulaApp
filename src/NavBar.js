
import React, {useState, useEffect} from 'react';
import stya from './styles.css';
import ScoreBoard from './Scoreboard';
import Schedule from './Schedule';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Countdown from 'react-countdown';

function NavBar () {

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} centered>
                        <Tab label="Home" value="1" />
                        <Tab label="Schedule" value="2" />
                        <Tab label="Scoreboard" value="3" />
                    </TabList>
                </Box>
            <TabPanel value="1">
                <Box style={stya}>
                    {/*Change the countdown and last race top 3 from here*/}
                    <h1 >Countdown to the next race:</h1>
                    <h1><Countdown date={new Date('2022-03-20T16:00:00')} /></h1>
                    <br></br>
                    <h1>2021 Formula 1 World Champion:</h1>
                    <h2>Max Verstappen</h2>
                </Box>
            </TabPanel>
            <TabPanel value="2">
                    <Schedule />
            </TabPanel>
                <TabPanel value="3">
                    <ScoreBoard />
                </TabPanel>
            </TabContext>
        </Box>
    );
}

export default NavBar;