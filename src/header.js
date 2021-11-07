import React from 'react'
import Box from '@mui/material/Box';
import './index.css'
import bg from './images/redbull.jpg';
import logo from './images/f1logo.png';

const styles = {
    boxStyle: {
      height: 200,
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      margin: -4,
      padding: 4,
    },

    logoStyle: {
        height: 50,
        backgroundImage: `url(${logo})`,
        backgroundSize: '350px 250px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        padding: 50,
      }
   };

export default function Header() {
    return (
        <Box
        style={styles.boxStyle}
        >
            <Box style={styles.logoStyle}></Box>
        </Box>
    );
  }