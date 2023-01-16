import React from 'react';
import { Box } from '@mui/material';
import logo from './/img/logo.png';
import Container from '@mui/material/Container';
import { Link, useLocation } from "react-router-dom";

export function Home() {
  return (
    <Container fixed>
      <Box sx={{ textAlign: 'center', position: 'relative' }}>
        <a href={useLocation().pathname}>
          <img src={logo} alt="Logo" width={'300px'} />
        </a>
      </Box>
    </Container >
  )
}

export default Home;