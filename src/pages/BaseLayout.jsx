import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Box, Grid, Link } from "@mui/material";
import Header from './Header';
import Home from './Home';
import Gallery from './Gallery';
import Portraits from './Portraits';
import About from './About';
import Contacts from './Contacts';
import PageNotFound from './PageNotFound';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { Dict } from './langRU.json';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';

// const translations = {
//     'en': () => import('./langEN.json'),
//     'ru': () => import('./langRU.json')
//   };

const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
        '& .MuiSwitch-thumb': {
            width: 15,
        },
        '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
        },
    },
    '& .MuiSwitch-switchBase': {
        padding: 2,
        '&.Mui-checked': {
            transform: 'translateX(12px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
        width: 12,
        height: 12,
        borderRadius: 6,
        transition: theme.transitions.create(['width'], {
            duration: 200,
        }),
    },
    '& .MuiSwitch-track': {
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor:
            theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
        boxSizing: 'border-box',
    },
}));
export default function BaseLayout() {
    // if (isMobile) {
    //     //console.log('isMobile');
    // }
    const [isStatus, setStatus] = useState(false);

    const buttonHandler = () => {
        setStatus((status) => !status);
        console.log(isStatus);
    };

    return (

        <Grid container display={'flex'} flexDirection={'column'}
            justifyContent={'space-between'}>
            <Grid item>

                <Grid item p={5}
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                >
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Typography color={'#EFEFEF'} fontSize={'0.8rem'}>Eng</Typography>
                        <AntSwitch inputProps={{ 'aria-label': 'ant design' }} onChange={buttonHandler} checked={isStatus} />
                        <Typography color={'#EFEFEF'} fontSize={'0.8rem'}>Ru</Typography>
                    </Stack>
                </Grid>
                <Header></Header>
            </Grid>
            <Grid item flexGrow={1}>
                <Routes>
                    <Route index path={'andreychikachev'} element={<Home />} />
                    <Route exact path={'gallery'} element={<Gallery />} />
                    <Route exact path={'portraits'} element={<Portraits />} />
                    <Route exact path={'about'} element={<About />} />
                    <Route exact path={'contacts'} element={<Contacts />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Grid>
            <Grid item>
                <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                    py={'3rem'} sx={{ opacity: 0.7, fontSize: '1rem' }}>
                    <Link href={'https://github.com/corbenykt'} underline="hover" color={'white'}>
                        By Dmitrii Artemev
                    </Link>
                    <p>&copy; 2023</p></Box>
            </Grid>
        </Grid >
    )
}